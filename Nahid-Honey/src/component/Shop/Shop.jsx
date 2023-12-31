import useAxiosSecure from '../../api/useAxiosSecure';
import ProductCard from './ProductCard';
import { useQuery } from "@tanstack/react-query";

function Shop() {
    const axiosSecure = useAxiosSecure()

    const { data: products = [], isLoading, refetch, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/products`)
            // console.log({ fromTQ: data })
            return data?.data
        },
    })
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred' + error.message

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
