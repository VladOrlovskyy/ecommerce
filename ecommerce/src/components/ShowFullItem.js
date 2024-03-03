import React from 'react';

const ShowFullItem = ({ item, onAdd, onShowItem, onHideItem }) => {
    const handleClick = () => {
        onAdd(item);
        onHideItem();
    };

    const handleGoBack = () => {
        onHideItem();
    };

    return (
        <div className='full-item'>
            <div>
                <img src={"/img/" + item.img} alt={item.title} onClick={() => onShowItem(item)} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <div className='add-to-cart' onClick={handleClick}>+</div>
                <button className='back' onClick={handleGoBack}>Назад</button>
            </div>

        </div>
    );
};

export default ShowFullItem;
