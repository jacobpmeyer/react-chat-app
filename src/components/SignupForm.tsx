import React, { useState } from 'react';
import { auth } from '../firebase'; // Import auth from your firebase file
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface SignupFormProps {} // We'll add more props later

const SignupForm: React.FC<SignupFormProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Handle success (e.g., redirect to chat)
        } catch (error) {
            // Handle errors (e.g., display error messages)
        }
    };

    return (
        <form onSubmit={handleSignup}>
             {/* Input fields for email and password */}
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;
