import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

const App = () => {
    const [orders, setOrders] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [showFullItem, setShowFullItem] = useState(false);
    const [fullItem, setFullItem] = useState(null);

    const items = [
        {
            id: 1,
            title: 'Chair Red',
            img: '1.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'chairs',
            price: '89.99'
        },
        {
            id: 2,
            title: 'Light',
            img: '2.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'light',
            price: '149.00'
        },
        {
            id: 3,
            title: 'Sofa Light Brown',
            img: '3.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'sofa',
            price: '209.99'
        },
        {
            id: 4,
            title: 'Chair Dark Brown',
            img: '4.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'chairs',
            price: '199.00'
        },
        {
            id: 5,
            title: 'Chair Grey',
            img: '5.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'chairs',
            price: '129.00'
        },
        {
            id: 6,
            title: 'Table light brown',
            img: '6.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'tables',
            price: '139.00'
        },
        {
            id: 7,
            title: 'Wardrobe Light Brown',
            img: '7.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'wardrobes',
            price: '99.00'
        },
        {
            id: 8,
            title: 'Sofa Brown',
            img: '8.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'sofa',
            price: '149.00'
        },
        {
            id: 9,
            title: 'Sofa Pink',
            img: '9.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'sofa',
            price: '109.00'
        },
        {
            id: 10,
            title: 'Table Brown',
            img: '10.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'tables',
            price: '99.00'
        },
        {
            id: 11,
            title: 'Light',
            img: '11.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'light',
            price: '29.00'
        },
        {
            id: 12,
            title: 'Wardrobe Light Brown',
            img: '12.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'wardrobes',
            price: '49.00'
        }
    ];

    useState(() => {
        setCurrentItems(items);
    }, []);

    const deleteOrder = (id) => {
        setOrders(orders.filter(el => el.id !== id));
    };

    const addToOrder = (item) => {
        let isInArray = orders.some(el => el.id === item.id);
        if (!isInArray)
            setOrders([...orders, item]);
    };

    const chooseCategory = (category) => {
        if (category === 'all') {
            setCurrentItems(items);
            return;
        }
        setCurrentItems(items.filter(el => el.category === category));
    };

    const onShowItem = (item) => {
        setFullItem(item);
        setShowFullItem(true);
    };

    const onHideItem = () => {
        setShowFullItem(false);
    };

    return (
        <div className="wrapper">
            <Header orders={orders} onDelete={deleteOrder} />
            <Categories chooseCategory={chooseCategory} />
            <main>
                {currentItems.map(item => (
                    <Item key={item.id} item={item} onAdd={addToOrder} onShowItem={onShowItem} />
                ))}
            </main>
            {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem} onHideItem={onHideItem} />}
            <Footer />
        </div>
    );
};

export default App;
