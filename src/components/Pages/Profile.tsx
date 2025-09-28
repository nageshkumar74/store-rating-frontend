import React, { useContext } from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <div>
            <h1>Profile</h1>
            {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
};

export default Profile;
