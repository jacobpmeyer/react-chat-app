import React, { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);

  return (
    <div>
      <h1>Welcome to Chat App!</h1>
      {showSignupForm ? <SignupForm /> : <LoginForm /> }

      {/* A toggle link or button to switch between the forms */}
      <button onClick={() => setShowSignupForm(!showSignupForm)}>
          {showSignupForm ? 'Already have an account? Login' : 'New user? Sign Up'}
      </button>
    </div>
  );
};

export default App;
