    import jwt from 'jsonwebtoken';

    export async function GET(request) {
    try {
        const authHeader = request.headers.get('authorization');
        const token = authHeader?.replace('Bearer ', '');
        
        if (!token) {
        return Response.json({ error: 'No token provided' }, { status: 401 });
        }

        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Get user from database (replace with your user lookup logic)
        const user = await getUserById(decoded.userId); // You need to implement this
        
        if (!user) {
        return Response.json({ error: 'User not found' }, { status: 404 });
        }

        return Response.json({ 
        user: { 
            userId: user.id, 
            username: user.username, 
            email: user.email 
        } 
        });
        
    } catch (error) {
        console.error('Token verification error:', error);
        return Response.json({ error: 'Invalid token' }, { status: 401 });
    }
    }