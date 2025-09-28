import React from 'react';

const StoreCard = ({ store }: {store: any}) => (
    <div>
        <h3>{store.name}</h3>
        <p>{store.address}</p>
        <p>{store.email}</p>
    </div>
);

export default StoreCard;
