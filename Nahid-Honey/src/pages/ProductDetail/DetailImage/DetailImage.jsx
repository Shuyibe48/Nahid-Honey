import { useState } from 'react';

const DetailImage = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full">
            <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            >
                &larr;
            </button>
            <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            >
                &rarr;
            </button>
            <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="w-full h-48 lg:h-96"
            />
        </div>
    );
};

export default DetailImage;
