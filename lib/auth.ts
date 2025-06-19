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

// ===== CLIENT-SIDE FUNCTIONS (Add these) =====

// Simple client-side JWT decoder (without verification for display purposes)
export function decodeToken(token: string) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}

// Check if token is expired
export function isTokenExpired(token: string): boolean {
    try {
        const decoded = decodeToken(token);
        if (!decoded || !decoded.exp) return true;
        
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
    } catch (error) {
        return true;
    }
}

// Get user data from token
export function getUserFromToken(token: string) {
    try {
        const decoded = decodeToken(token);
        if (!decoded) return null;
        
        // Extract user data from token payload
        return {
            id: decoded.userId || decoded.id,
            email: decoded.email,
            name: decoded.name,
            // Add other fields based on your token structure
        };
    } catch (error) {
        return null;
    }
}

// Auth service for localStorage management
export class AuthService {
    static TOKEN_KEY = 'auth-token';

    static getToken(): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(this.TOKEN_KEY);
    }

    static setToken(token: string): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    static removeToken(): void {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(this.TOKEN_KEY);
    }

    static getCurrentUser() {
        const token = this.getToken();
        if (!token || isTokenExpired(token)) {
            this.removeToken();
            return null;
        }
        return getUserFromToken(token);
    }

    static isAuthenticated(): boolean {
        const token = this.getToken();
        return !!(token && !isTokenExpired(token));
    }
}