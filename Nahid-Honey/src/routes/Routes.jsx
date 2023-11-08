import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart from "../pages/Cart/Cart";
import ManageProfile from "../pages/ManageProfile/ManageProfile";
import MyOrder from "../pages/MyOrder/MyOrder";
import AdminDashboard from "../pages/Admin/AdminDashboard/AdminDashboard";
import AddProducts from "../pages/Admin/pages/AddProducts";
import ManageProducts from "../pages/Admin/pages/ManageProducts";
import UpdateProduct from "../component/UpdateProduct/UpdateProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'product-detail/:id',
                element: <ProductDetail />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'manageProfile',
                element: <ManageProfile />
            },
            {
                path: 'myOrder',
                element: <MyOrder />
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'signUp',
        element: <SignUp />
    },
    {
        path: 'adminDashboard',
        element: <AdminDashboard />,
        children: [
            {
                path: 'addProducts',
                element: <AddProducts />
            },
            {
                path: 'manageProducts',
                element: <ManageProducts />
            },
            {
                path: 'manageProducts/updateProduct/:id',
                element: <UpdateProduct />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`)
            }
        ]
    }
]);

export default router