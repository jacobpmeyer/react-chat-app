import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface LoginFormProps {} // We'll add props later if needed

const LoginForm: React.FC<LoginFormProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Handle successful login (e.g., redirect to chat)
        } catch (error) {
            // Handle login errors (e.g., display error message)
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {/* Input fields for email and password */}
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
