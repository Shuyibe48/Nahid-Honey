import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaCartArrowDown, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut, signInWithGoogle } = useContext(AuthContext)
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);


    const handleProfileClick = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <nav className="bg-[#C46A2C] p-2 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-12">
                    <div>
                        <Link to='/'>
                            <h1 className='text-gray-100 font-bold text-xl'>
                                নাহিদ <span className='text-[#FFDC74]'>হানি</span>
                            </h1>
                        </Link>
                    </div>
                    <input
                        type="text"
                        placeholder="পণ্য খুজুন"
                        className="bg-gray-100 hidden md:block text-sm text-gray-500 w-96 p-1 rounded outline-none border"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <div className='relative'>
                        <Link to='cart' className="text-gray-100 text-4xl">
                            <FaCartArrowDown />
                        </Link>
                        <span className='bg-gray-100 px-1 absolute bottom-7 left-7 rounded-full font-bold text-xs'>5</span>
                    </div>
                    {user ? (
                        <div className="relative group">
                            <button
                                onClick={handleProfileClick}
                                className="text-gray-100 focus:outline-none"
                            >
                                {
                                    user.photoURL ? <img
                                        src={user?.photoURL}
                                        alt="Profile"
                                        className="h-10 w-10 rounded-full"
                                    /> : <span className='text-4xl'>
                                        <FaRegUser />
                                    </span>
                                }
                            </button>
                            {isProfileMenuOpen && (
                                <div className="absolute bg-[#C46A2C] text-gray-100 right-0 mt-2 px-6 pb-4 pt-2 font-semibold rounded shadow-lg w-max">
                                    <ul>
                                        <Link to='myOrder'>
                                            <li className='cursor-pointer border-b pb-1 text-sm'>আমার অর্ডার</li>
                                        </Link>
                                        <Link to='manageProfile'>
                                            <li className='cursor-pointer border-b pb-1 my-2 text-sm'>মেনেজ প্রোফাইল</li>
                                        </Link>
                                        <li onClick={() => logOut()} className='cursor-pointer border-b pb-1 text-sm'>লগ আউট</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='flex items-center space-x-4'>
                            <div className='border-e-2'>
                                <Link to='login'>
                                    <button
                                        className="bg-transparent font-semibold hover:bg-[#785B27] text-gray-100 text-sm px-2 py-1 rounded me-4"
                                    >
                                        লগিন
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <Link to='signUp'>
                                    <button className="bg-transparent font-semibold hover:bg-[#785B27] text-gray-100 text-sm px-2 py-1 rounded">
                                        সাইন আপ
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
};



export default Navbar;
