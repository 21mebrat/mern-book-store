import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addCart } from '../../feature/cartItems/cartSlice'
import { useGetBooksByIdQuery } from '../../feature/auth/authApiSlice'
const SingleBook = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { data:book, isError, error, isloading } = useGetBooksByIdQuery(id)
    const handleAddToCart = (book) => {
        dispatch(addCart(book))
    }
    if (isloading) return <p>loading</p>
    if (isError) {
        return <p>{error.error}</p>
    }
    return (
        <div className='rounded-lg transition-shadow duration-300'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4'>
                <div className='sm:h-72 sm:flex-shrink-0 border rounded-md'>
                    <Link to={`/book/}`}>
                        <img
                            src={book?.image}
                            alt="book"
                            className="h-72 w-full object-cover rounded-md p-2 transition-all duration-500 cursor-pointer hover:scale-105"
                        />

                    </Link>
                </div>
                <div>
                    <Link to={`/book/`}>
                        <h3 className='text-xl font-semibold hover:text-blue-500 mb-3'>{book?.title}</h3>
                    </Link>
                    <p className='text-gray-600 mb-3'> {book?.description}</p>
                    <p className='font-medium mb-5'>$80
                        <span className='line-through font-normal ml-1'>$100</span>
                    </p>
                    <button
                        onClick={() => handleAddToCart(book)}
                        className='btn-primary px-6 space-x-1 flex items-center gap-1'
                        type="button">
                        <FiShoppingCart />
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SingleBook
