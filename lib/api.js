    const API_BASE_URL = '/api';

    export async function registerUser(userData) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
    }
    
    return data;
    }

    export async function loginUser(credentials) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.message || 'Login failed');
    }
    
    return data;
    }

    export async function verifyToken(token) {
    const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.message || 'Token verification failed');
    }
    
    return data;
    }