import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Login successful')
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                toast.error('error')
            })
    }

    return (
        <div className="bg-[#C46A2C] min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C46A2C] focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Password</label>
                        <input
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
                        Login
                    </button>
                    <div className="mt-4 text-center">
                        <p>Or sign up with:</p>
                        <button
                            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            onClick={signInWithGoogle}
                        >
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
