import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
    const { createUser, updateUserProfile, setLoading, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                updateUserProfile(name)
                    .then(() => {
                        toast.success('Signup successful')
                        navigate(from, { replace: true })
                        console.log(result);
                    })
                    .catch(err => {
                        setLoading(false)
                        console.log(err.message)
                        toast.error(err.message)
                    })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    };

    return (
        <div className="bg-[#C46A2C] min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Full Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C46A2C] focus:border-transparent"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C46A2C] focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            required
                            type="password"
                            name="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C46A2C] focus:border-transparent"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#C46A2C] text-white py-2 rounded-md hover:bg-[#9E4B24] focus:outline-none focus:ring-2 focus:ring-[#C46A2C] focus:ring-opacity-50"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>Or sign up with:</p>
                    <button
                        className="mt-2 bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={signInWithGoogle}
                    >
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
