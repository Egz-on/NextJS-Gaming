    import jwt from 'jsonwebtoken';
    import bcrypt from 'bcryptjs';

    const JWT_SECRET = 'MyAwesomeGamingWebsite2024_RandomKey_ForFunProject123';
    const JWT_EXPIRES_IN = '7d';

    // Hash password
    export async function hashPassword(password) {
    const salt = await bcrypt.genSalt(12);
    return bcrypt.hash(password, salt);
    }

    // Verify password
    export async function verifyPassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
    }

    // Generate JWT token
    export function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    }

    // Verify JWT token
    export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
    }

        export function getTokenFromRequest(req) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.substring(7);
    }
    return null;
    }