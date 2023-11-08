import { useContext, useState } from 'react'
// import { imageUpload } from '../../api/utils'
// import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AddProductsForm from '../../../component/Forms/AddProductsForm'
import { AuthContext } from '../../../providers/AuthProvider'
import { imageUpload } from '../../../api/utils'
import useAxiosSecure from '../../../api/useAxiosSecure'
import Swal from 'sweetalert2'

const AddProducts = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    // handle form submit
    const handleSubmit = event => {
        event.preventDefault()
        setLoading(true)
        const title = event.target.title.value
        const brand = event.target.brand.value
        const price = event.target.price.value
        const available = event.target.available.value
        const category = event.target.category.value
        const ratings = event.target.ratings.value
        const freeDelivery = event.target.freeDelivery.value
        const cashOnDelivery = event.target.cashOnDelivery.value
        const returnPolicy = event.target.returnPolicy.value
        const image = event.target.image.files[0]
        setUploadButtonText('Uploading...')
        // Upload image
        imageUpload(image)
            .then(data => {
                const productData = {
                    title,
                    brand,
                    price: parseFloat(price),
                    ratings,
                    available,
                    category,
                    freeDelivery,
                    cashOnDelivery,
                    returnPolicy,
                    image: data.data.display_url
                }

                // post product to database 
                axiosSecure.post(`/products`, productData)
                    .then(data => {
                        const success = data?.data?.insertedId
                        setUploadButtonText('Uploaded!')
                        setLoading(false)
                        navigate('/')
                        if (success) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: success + ' has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false)
            })
    }

    const handleImageChange = image => {
        console.log(image)
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <h1 className="text-xl md:text-2xl font-semibold text-center my-2 md:my-4">Add Product</h1>
            <AddProductsForm
                handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
            />
        </div>
    )
}

export default AddProducts