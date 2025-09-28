import React, { useEffect, useState } from 'react';
import StoreList from '../store/StoreList';
import { fetchStores } from '../services/api';

const Stores = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetchStores().then(res => setStores(res.data));
    }, []);

    return (
        <div>
            <h1>Stores</h1>
            <StoreList stores={stores} />
        </div>
    );
};

export default Stores;
