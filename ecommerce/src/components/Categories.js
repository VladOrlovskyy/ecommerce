import React from 'react';

const Categories = ({ chooseCategory }) => {
    const categories = [
        { key: 'all', name: "All" },
        { key: 'chairs', name: "Chairs" },
        { key: 'tables', name: "Tables" },
        { key: 'sofa', name: "Sofa" },
        { key: 'wardrobes', name: "Wardrobes" },
        { key: 'light', name: "Light" }
    ];

    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
};

export default Categories;
