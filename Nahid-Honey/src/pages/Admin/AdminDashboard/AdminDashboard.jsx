import { Link, Outlet } from "react-router-dom";
import { FaListUl } from "react-icons/fa";

const AdminDashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <div className="w-full bg-slate-800 mb-4">
                    <label htmlFor="my-drawer-2" className="btn rounded-none drawer-button lg:hidden"><FaListUl /></label>
                </div>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li><Link to='addProducts'>Add Products</Link></li>
                    <li><Link to='manageProducts'>Manage Products</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminDashboard;