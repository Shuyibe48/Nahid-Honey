import { Outlet } from 'react-router-dom';
import Navbar from '../component/Shared/Navbar';
import Footer from '../component/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />

            <div className='py-4 min-h-[calc(100vh-90px)]'>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Main;