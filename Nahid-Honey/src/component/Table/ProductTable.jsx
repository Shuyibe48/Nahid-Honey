import { Link } from "react-router-dom";
import useAxiosSecure from "../../api/useAxiosSecure";
import Swal from "sweetalert2";

function ProductTable({ products, refetch }) {
    const axiosSecure = useAxiosSecure()

    const actions = (id) => {
        axiosSecure.delete(`/product/${id}`)
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Deleted!',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            })
    }


    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 font-semibold text-left border">Sl No</th>
                        <th className="py-2 px-4 font-semibold text-left border">Image</th>
                        <th className="py-2 px-4 font-semibold text-left border">Title</th>
                        <th className="py-2 px-4 font-semibold text-left border">Brand</th>
                        <th className="py-2 px-4 font-semibold text-left border">Category</th>
                        <th className="py-2 px-4 font-semibold text-left border">Available</th>
                        <th className="py-2 px-4 font-semibold text-left border">Price</th>
                        <th className="py-2 px-4 font-semibold text-left border">Ratings</th>
                        <th className="py-2 px-4 font-semibold text-left border">Free Delivery</th>
                        <th className="py-2 px-4 font-semibold text-left border">Cash on Delivery</th>
                        <th className="py-2 px-4 font-semibold text-left border">Return Policy</th>
                        <th className="py-2 px-4 font-semibold text-left border">Update</th>
                        <th className="py-2 px-4 font-semibold text-left border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border">{index + 1}</td>
                            <td className="py-2 px-4 border">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-12 h-12 object-cover"
                                />
                            </td>
                            <td className="py-2 px-4 border">{product.title}</td>
                            <td className="py-2 px-4 border">{product.brand}</td>
                            <td className="py-2 px-4 border">{product.category}</td>
                            <td className="py-2 px-4 border">{product.available}</td>
                            <td className="py-2 px-4 border">{product.price}</td>
                            <td className="py-2 px-4 border">{product.ratings}</td>
                            <td className="py-2 px-4 border">
                                {product.freeDelivery ? 'Yes' : 'No'}
                            </td>
                            <td className="py-2 px-4 border">
                                {product.cashOnDelivery ? 'Yes' : 'No'}
                            </td>
                            <td className="py-2 px-4 border">{product.returnPolicy}</td>
                            <td className="py-2 px-4 border">
                                <Link to={`updateProduct/${product?._id}`}>
                                    <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Update
                                    </button>
                                </Link>
                            </td>
                            <td className="py-2 px-4 border">
                                <button onClick={() => actions(product?._id)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 focus:outline-none">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
