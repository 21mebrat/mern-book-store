import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addCart } from '../../feature/cartItems/cartSlice'
const Book = ({ book }) => {
    const dispatch = useDispatch()
    const handleAddToCart = (book) => {
        dispatch(addCart(book))
    }
    return (
        <div className='rounded-lg transition-shadow duration-300'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4'>
                <div className='sm:h-72 sm:flex-shrink-0 border rounded-md'>
                    <Link to={`/book/${book._id}`}>
                        <img
                            src={book.image}
                            alt="book"
                            className="h-72 w-full object-cover rounded-md p-2 transition-all duration-500 cursor-pointer hover:scale-105"
                        />

                    </Link>
                </div>
                <div>
                    <Link to={`/book/${book._id}`}>
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

export default Book
