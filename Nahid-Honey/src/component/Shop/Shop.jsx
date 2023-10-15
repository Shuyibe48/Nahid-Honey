import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        title: 'Product 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 19.99,
        lessThanPrice: 15.99,
        available: 10,
    },
    {
        id: 2,
        title: 'Product 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 24.99,
        lessThanPrice: 19.99,
        available: 5,
    },
    {
        id: 3,
        title: 'Product 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 24.99,
        lessThanPrice: 19.99,
        available: 5,
    },
    {
        id: 4,
        title: 'Product 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 24.99,
        lessThanPrice: 19.99,
        available: 5,
    },
    {
        id: 5,
        title: 'Product 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 24.99,
        lessThanPrice: 19.99,
        available: 5,
    },
    {
        id: 6,
        title: 'Product 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 24.99,
        lessThanPrice: 19.99,
        available: 5,
    },
    {
        id: 7,
        title: 'Product 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 24.99,
        lessThanPrice: 19.99,
        available: 5,
    },
    {
        id: 8,
        title: 'Product 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 24.99,
        lessThanPrice: 19.99,
        available: 5,
    },
    {
        id: 9,
        title: 'Product 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukVKxpnr7NLCVb1U2DZSFnK_oi54P11Bx3g&usqp=CAU',
        price: 24.99,
        lessThanPrice: 19.99,
        available: 5,
    },
    // Add more products as needed
];

function Shop() {
    return (
        <div className="px-1 md:px-2">
            <h1 className="text-xl md:text-2xl font-semibold text-center my-2 md:my-4">Product List</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-1 gap-y-2">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Shop;
