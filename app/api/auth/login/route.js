    import { verifyPassword, generateToken } from '../../../../lib/auth';
    import { NextResponse } from 'next/server';

    export async function POST(request) {

    try {
        const { email, password } = await request.json();

        // Validate input
        if (!email || !password) {
        return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
        }

        // Find user (in real app, query your database)
        const user = users.find(user => user.email === email);
        if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // Verify password
        const isValidPassword = await verifyPassword(password, user.password);
        if (!isValidPassword) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // Generate JWT token
        const token = generateToken({
        userId: user.id,
        email: user.email,
        username: user.username
        });

        // Return success response (don't send password)
        const { password: _, ...userWithoutPassword } = user;
        
        return NextResponse.json({
        message: 'Login successful',
        user: userWithoutPassword,
        token
        });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
    }