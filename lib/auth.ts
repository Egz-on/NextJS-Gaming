    import bcrypt from 'bcryptjs';
    import jwt from 'jsonwebtoken';

    export async function hashPassword(password: string): Promise<string> {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw new Error('Failed to hash password');
    }
    }

    export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error('Error comparing password:', error);
        throw new Error('Failed to compare password');
    }
    }

    export function generateToken(payload: object): string {
    try {
        const secret = process.env.JWT_SECRET;
        
        if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables');
        }
        
        const token = jwt.sign(payload, secret, { 
        expiresIn: '7d',
        issuer: 'your-app-name' 
        });
        
        return token;
    } catch (error) {
        console.error('Error generating JWT token:', error);
        throw new Error('Failed to generate token');
    }
    }

    export function verifyToken(token: string) {
    try {
        const secret = process.env.JWT_SECRET;
        
        if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables');
        }
        
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (error) {
        console.error('Error verifying JWT token:', error);
        throw new Error('Invalid or expired token');
    }
    }