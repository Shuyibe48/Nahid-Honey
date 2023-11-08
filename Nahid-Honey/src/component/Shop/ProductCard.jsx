import { Link } from "react-router-dom";

// ProductCard.js
const ProductCard = ({ product }) => {
    return (
        <div className="max-w-xs hover:shadow-xl mx-auto p-1 md:p-2 rounded-md shadow-md bg-white">
            <Link to={`product-detail/${product?.id}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-60 h-40 rounded-md"
                />
                <div className="mt-1 md:mt-2">
                    <h2 className="text-xs md:text-xl">{product.title}</h2>
                    <p className="text-gray-600 text-sm md:text-2xl">৳{product.price}</p>
                    <p className="text-gray-600 text-xs md:text-base">
                        Available: {product.available}
                    </p>
                </div>
            </Link>
            <div className="mt-2 md:mt-4">
                <button className="hover:bg-[#C46A2C] hover:text-gray-100 border border-[#C46A2C] font-semibold text-xs lg:text-base text-[#C46A2C] px-2 md:px-4 py-1 md:py-2 rounded-md">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
