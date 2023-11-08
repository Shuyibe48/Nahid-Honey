import useAxiosSecure from '../../../api/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
import ProductTable from '../../../component/Table/ProductTable';

function ManageProducts() {
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
            <h1 className="text-xl md:text-2xl font-semibold text-center my-2 md:my-4">Manage Product</h1>
            <div className="grid grid-cols-1">
                <ProductTable products={products} refetch={refetch} />
            </div>
        </div>
    );
}

export default ManageProducts;
