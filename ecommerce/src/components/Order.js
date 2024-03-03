import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Order = (props) => {
    const { item, onDelete } = props;
    return (
        <div className='item'>
            <img src={"/img/" + item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
        </div>
    );
};

export default Order;
