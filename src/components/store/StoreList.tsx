import React from 'react';
import StoreCard from './StoreCard';

const StoreList = ({ stores }: {stores: any[]}) => (
    <div>
        {stores.map(store => (
            <StoreCard key={store.id} store={store} />
        ))}
    </div>
);

export default StoreList;
