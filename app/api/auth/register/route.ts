    import { NextResponse } from 'next/server';
    import connectDB from '@/lib/db';
    import User from '@/models/User';
    import { hashPassword, generateToken } from '@/lib/auth';

    export async function POST(req: Request) {
    console.log('🚀 Registration route called');
    
    try {
        // Step 1: Parse request body
        console.log('📥 Parsing request body...');
        const { username, email, password } = await req.json();
        console.log('📋 Request data:', { username, email, password: '***' });

        // Step 2: Connect to database
        console.log('🔗 Connecting to database...');
        await connectDB();
        console.log('✅ Database connected successfully');

        // Step 3: Validate input
        if (!username || !email || !password) {
        console.log('❌ Missing fields validation failed');
        return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }

        // Step 4: Check existing user
        console.log('🔍 Checking for existing user...');
        const existing = await User.findOne({ email });
        if (existing) {
        console.log('❌ User already exists');
        return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }
        console.log('✅ No existing user found');

        // Step 5: Hash password
        console.log('🔐 Hashing password...');
        const hashed = await hashPassword(password);
        console.log('✅ Password hashed successfully');

        // Step 6: Create user
        console.log('👤 Creating new user...');
        const newUser = await User.create({ username, email, password: hashed });
        console.log('✅ User created:', { id: newUser._id, email: newUser.email });

        // Step 7: Generate token
        console.log('🎫 Generating JWT token...');
        const token = generateToken({ userId: newUser._id });
        console.log('✅ Token generated successfully');

        console.log('🎉 Registration completed successfully');
        return NextResponse.json({
        user: { id: newUser._id, email: newUser.email, username: newUser.username },
        token,
        }, { status: 201 });

    } catch (err: any) {
        console.error('💥 Registration error details:');
        console.error('Error name:', err.name);
        console.error('Error message:', err.message);
        console.error('Error stack:', err.stack);
        
        // Log specific error types
        if (err.name === 'ValidationError') {
        console.error('Mongoose validation error:', err.errors);
        }
        if (err.name === 'MongoError' || err.name === 'MongoServerError') {
        console.error('MongoDB error code:', err.code);
        }
        if (err.message?.includes('JWT_SECRET')) {
        console.error('JWT_SECRET environment variable issue');
        }
        
        return NextResponse.json({ 
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
        }, { status: 500 });
    }
    }