import React from 'react';

const Item = ({ item, onAdd, onShowItem }) => {
    const handleClick = () => {
        onAdd(item);
    };

    const handleShowItem = () => {
        onShowItem(item);
    };

    return (
        <div className='item'>
            <img src={"/img/" + item.img} alt={item.title} onClick={handleShowItem} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
            <div className='add-to-cart' onClick={handleClick}>+</div>
        </div>
    );
};

export default Item;


