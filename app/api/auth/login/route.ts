    import { NextResponse } from 'next/server';
    import connectDB from '@/lib/db';
    import User from '@/models/User';
    import { comparePassword, generateToken } from '@/lib/auth';

    export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        await connectDB();

        const user = await User.findOne({ email });
        if (!user) {
        return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
        return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const token = generateToken({ userId: user._id });
        return NextResponse.json({ user: { id: user._id, email: user.email }, token }, { status: 200 });
    } catch (err) {
        console.error('Login error:', err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
    }
