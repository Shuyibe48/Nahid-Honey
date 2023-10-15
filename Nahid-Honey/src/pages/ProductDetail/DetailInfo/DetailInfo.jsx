import { useState } from 'react';

const DetailInfo = ({ title, ratings, available, price, brand }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="bg-white p-2 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div className="flex items-center">
                <span className="text-yellow-500">{ratings} stars</span>
                <span className="text-gray-500 mx-2">|</span>
                <span className="text-gray-500">{available} available</span>
            </div>
            <div className='mb-2'>
                <h5 className='text-gray-500'><span className='font-semibold'>Brand:</span> {brand}</h5>
            </div>
            <p className="text-lg font-semibold text-green-600 mb-2">${price}</p>
            <div className="flex items-center mb-4">
                <label className="text-gray-600 mr-2">Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 p-2 border rounded-md border-gray-300"
                />
            </div>
            <button className="bg-[#C46A2C] hover:bg-[#785B27] font-semibold text-xs lg:text-base text-white px-2 md:px-4 py-1 md:py-2 rounded-md mr-2">
                Add to Cart
            </button>
            <button className="bg-green-500 hover:bg-green-600 font-semibold text-xs lg:text-base text-white px-2 md:px-4 py-1 md:py-2 rounded-md">
                Buy Now
            </button>
        </div>
    );
};

export default DetailInfo;
