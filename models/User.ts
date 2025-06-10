    import mongoose, { Document, Schema } from 'mongoose';

    export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    }

    const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minlength: [2, 'Username must be at least 2 characters long'],
        maxlength: [50, 'Username must be less than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
    }, {
    timestamps: true // This automatically adds createdAt and updatedAt fields
    });

    // Prevent re-compilation during development
    export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);