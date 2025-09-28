import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(res => setUsers(res.data));
    }, []);

    return (
        <ul>
            {users.map((user: any) => <li key={user.id}>{user.name} – {user.email}</li>)}
        </ul>
    );
};

export default UserList;
