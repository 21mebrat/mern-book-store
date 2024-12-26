import React, { useState } from 'react'
import { FaLock, FaSearch } from 'react-icons/fa'
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logutImage from '../../assets/logout.jfif'
import useAuth from '../../hooks/useAuth'
import { setSearchedData } from '../../feature/auth/authSlice'
const menus = [
    {
        path: '/dashbord',
        name: 'Dashbord'
    },
    {
        path: '/cart',
        name: 'Cart'
    },
    {
        path: '/orders',
        name: 'Orders'
    },
    {
        path: '/chekout',
        name: 'Checkout'
    },
]
const Navbar = () => {
    const currentUser = useSelector((state) => state.auth)
    const imageURL = currentUser?.image?.replace("=s96-c", "=s200"); // Change size to 200px
    const { userLogout } = useAuth()
    const carts = useSelector(state => state.cart.cartItems)
    const [menuOpened, setMenuOpened] = useState(false)
    const dispatch = useDispatch()
    return (
        <header className='px-4 py-6 max-w-screen mx-auto sticky top-0 z-50 bg-gray-200 shadow-md'>
            <nav className='flex justify-between items-center'>
                {/* left */}
                <div
                    className='flex items-center md:gap-16 gap-4'
                >
                    <Link to='/'>
                        <HiMiniBars3CenterLeft size={16} />
                    </Link>
                    <div className='relative sm:w-72 w-40 space-x-2'>
                        <FaSearch className='absolute inline-block left-3 inset-y-2' />
                        <input
                            type="text"
                            name="search"
                            placeholder='Search here...'
                            onChange={(e) => dispatch(setSearchedData({ searchedString: e.target.value }))}
                            className='w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'
                        />
                    </div>

                </div>
                {/* right */}
                <div className='flex items-center md:space-x-3 space-x-2'>
                    <div>
                        {
                            currentUser?.userName ?
                                <button
                                    type="button"
                                    onClick={() => setMenuOpened(!menuOpened)}
                                >
                                    <img
                                        src={imageURL}
                                        alt="profile"
                                        className={`size-7 rounded-full {currentUser ? 'ring ring-blue-500' }`}
                                    />
                                </button>
                                : <Link to='/login'><HiOutlineUser size={20} className='cursor-pointer' /></Link>

                        }

                        {
                            menuOpened && (
                                <div className='absolute right-0 shadow-lg w-48 bg-slate-50 z-40 rounded-md'>
                                    <ul>
                                        {
                                            menus.map((menu, index) => <li key={index} className='text-center'>
                                                <Link
                                                    to={menu.path}
                                                    className='px-4 py-2 block hover:bg-gray-300 text-sm'
                                                >
                                                    {menu.name}
                                                </Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            )

                        }
                    </div>
                    <button
                        type="button"
                        className='hidden sm:block'
                        onClick={userLogout}
                    >

                        {currentUser?.userName && (
                            <img
                                src={logutImage}
                                alt="Profile"
                                className="w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full"
                            />
                        )}

                    </button>
                    <Link
                        to='/cart'
                        className='p-1 sm:px-6 py-2 flex items-center bg-orange-500'
                    >
                        <HiOutlineShoppingCart />
                        {carts.length > 0 &&

                            <span className='text-sm font-semibold ml-1'>{carts.length}</span>
                        }
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
