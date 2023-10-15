import { useState, useEffect } from 'react';

const images = [
    'https://img.freepik.com/free-psd/delicious-burger-food-menu-web-banner-template_106176-1429.jpg',
    'https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_106176-1452.jpg',
    'https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_106176-1452.jpg',
];

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === images.length - 1 ? 0 : prevImage + 1
            );
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="relative h-64">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`absolute h-full rounded-lg w-full transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}
        </div>
    );
};

export default Slider;