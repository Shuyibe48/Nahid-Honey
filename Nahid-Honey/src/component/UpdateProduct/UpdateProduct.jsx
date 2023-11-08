import { useLoaderData } from "react-router-dom";
import { TbFidgetSpinner } from 'react-icons/tb'
import { useState } from "react";
import useAxiosSecure from "../../api/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateProduct = ({
    handleImageChange,
}) => {
    const axiosSecure = useAxiosSecure()

    const data = useLoaderData()
    console.log(data)



    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState(data?.title)
    const [brand, setBrand] = useState(data?.brand)
    const [price, setPrice] = useState(data?.price)
    const [available, setAvailable] = useState(data?.available)
    const [category, setCategory] = useState(data?.category)
    const [ratings, setRatings] = useState(data?.ratings)
    const [freeDelivery, setFreeDelivery] = useState(data?.freeDelivery)
    const [cashOnDelivery, setCashOnDelivery] = useState(data?.cashOnDelivery)
    const [returnPolicy, setReturnPolicy] = useState(data?.returnPolicy)


    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        // const title = event.target.title.value
        // const brand = event.target.brand.value
        // const price = event.target.price.value
        // const available = event.target.available.value
        // const category = event.target.category.value
        // const ratings = event.target.ratings.value
        // const freeDelivery = event.target.freeDelivery.value
        // const cashOnDelivery = event.target.cashOnDelivery.value
        // const returnPolicy = event.target.returnPolicy.value
        // const image = event.target.image.files[0]


        const updateProductData = {
            title,
            brand,
            price: parseFloat(price),
            ratings,
            available,
            category,
            freeDelivery,
            cashOnDelivery,
            returnPolicy,
            // image: data.data.display_url
        }


        // update product
        axiosSecure.put(`/product/${data?._id}`, updateProductData)
            .then(data => {
                setLoading(false)
                console.log(data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(err => console.log(err))

    }

    return (
        <>
            <h1 className="text-xl font-semibold mb-4 underline">Update | {data?._id} </h1>
            <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='title' className='block text-gray-600'>
                                    Product Title
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='title'
                                    id='title'
                                    type='text'
                                    placeholder='Product Title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='category' className='block text-gray-600'>
                                    Product Category
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='category'
                                    id='category'
                                    type='text'
                                    placeholder='Product Category'
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='available' className='block text-gray-600'>
                                    Available
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='available'
                                    id='available'
                                    type='number'
                                    placeholder='Available'
                                    value={available}
                                    onChange={(e) => setAvailable(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='brand' className='block text-gray-600'>
                                    Brand
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='brand'
                                    id='brand'
                                    type='text'
                                    placeholder='Brand'
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    required
                                />
                            </div>

                            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                    <div className='flex flex-col w-max mx-auto text-center'>
                                        <label>
                                            <input
                                                onChange={event => {
                                                    handleImageChange(event.target.files[0])
                                                }}
                                                className='text-sm cursor-pointer w-36 hidden'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                                hidden
                                            />
                                            <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                                Update Image
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-2'>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='price' className='block text-gray-600'>
                                        Price
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='price'
                                        id='price'
                                        type='number'
                                        placeholder='Price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='ratings' className='block text-gray-600'>
                                        Ratings
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='total_guest'
                                        id='ratings'
                                        type='number'
                                        placeholder='Ratings'
                                        value={ratings}
                                        onChange={(e) => setRatings(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex justify-between gap-2'>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='freeDelivery' className='block text-gray-600'>
                                        Free Delivery
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='freeDelivery'
                                        id='freeDelivery'
                                        type='text'
                                        placeholder='Free Delivery'
                                        value={freeDelivery}
                                        onChange={(e) => setFreeDelivery(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='cashOnDelivery' className='block text-gray-600'>
                                        Cash on delivery
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='cashOnDelivery'
                                        id='cashOnDelivery'
                                        type='text'
                                        placeholder='Cash on Delivery'
                                        value={cashOnDelivery}
                                        onChange={(e) => setCashOnDelivery(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='returnPolicy' className='block text-gray-600'>
                                    Return Policy
                                </label>

                                <textarea
                                    id='returnPolicy'
                                    className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                    name='returnPolicy'
                                    value={returnPolicy}
                                    onChange={(e) => setReturnPolicy(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                    >
                        {loading ? (
                            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                        ) : (
                            'Update & Continue'
                        )}
                    </button>
                </form>
            </div>
        </>
    );
};

export default UpdateProduct;