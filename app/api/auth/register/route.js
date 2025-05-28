    import { hashPassword, generateToken } from '../../../../lib/auth';
    import { NextResponse } from 'next/server';

    // In a real app, you'd use a database. For demo purposes, using in-memory storage
    let users = [];

    export async function POST(request) {

    try {
        const { email, password, username } = await request.json();

        // Validate input
        if (!email || !password || !username) {
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        if (password.length < 6) {
        return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
        return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        // Hash password and create user
        const hashedPassword = await hashPassword(password);
        const newUser = {
        id: Date.now().toString(),
        email,
        username,
        password: hashedPassword,
        createdAt: new Date().toISOString()
        };

        users.push(newUser);

        // Generate JWT token
        const token = generateToken({
        userId: newUser.id,
        email: newUser.email,
        username: newUser.username
        });

        // Return success response (don't send password)
        const { password: _, ...userWithoutPassword } = newUser;
        
        return NextResponse.json({
        message: 'User created successfully',
        user: userWithoutPassword,
        token
        }, { status: 201 });

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
    }