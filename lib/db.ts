    import mongoose from 'mongoose';

    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    // Global cache to prevent multiple connections in development
    declare global {
    var mongoose: any;
    }

    let cached = global.mongoose;

    if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
    }

    async function connectDB() {
    try {
        if (cached.conn) {
        console.log('📦 Using cached database connection');
        return cached.conn;
        }

        if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        console.log('🔗 Creating new database connection...');
        cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            console.log('✅ MongoDB connected successfully');
            return mongoose;
        });
        }

        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw new Error('Failed to connect to MongoDB');
    }
    }

    export default connectDB;