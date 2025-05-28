    import { verifyToken } from '../../../../lib/auth';
    import { NextResponse } from 'next/server';

    export async function POST(request) {
    try {
        const authHeader = request.headers.get('authorization');
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({ message: 'No token provided' }, { status: 401 });
        }

        const token = authHeader.substring(7);
        const decoded = verifyToken(token);
        
        if (!decoded) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
        }

        return NextResponse.json({
        message: 'Token is valid',
        user: {
            userId: decoded.userId,
            email: decoded.email,
            username: decoded.username
        }
        });

    } catch (error) {
        console.error('Token verification error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
    }