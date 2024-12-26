import React, { useState } from 'react';
import Book from '../Book/Book';
import { useGetAllBooksQuery } from '../../feature/auth/authApiSlice';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules for Swiper
import { Pagination, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';

const category = ['choose category', 'fiction', 'spiritual', 'others'];

const BookList = () => {
    const [selectedCategory, setSelectedCategory] = useState('choose category');
    const { data, isLoading, isError, error } = useGetAllBooksQuery();
    // Ensure books is an array and filter based on selected category

    const searchedString = useSelector((state) => state.auth)
    const dBook =
        selectedCategory === 'choose category'
            ? data
            : data?.filter(
                (book) => book.category.toLowerCase() === selectedCategory.toLowerCase()
            ) || []; // fallback to empty array if no data?.booksmatch
    // Handle loading and error states
    const mainBooks =
        searchedString.searchedData
            ? dBook.filter(book => book.title.toLowerCase().includes(searchedString.searchedData?.toLowerCase()))
            : dBook
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.error}</div>;
    }

    return (
        <div className="py-10">
            <h2 className="text-2xl font-semibold mb-6">Top Sellers</h2>

            {/* Category Selection */}
            <div className="mb-8 flex items-center">
                <select
                    name="category"
                    id="category"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                >
                    {category.map((c, index) => (
                        <option key={index} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            {/* Swiper for displaying books */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {mainBooks?.length > 0 ? (
                    mainBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <Book book={book} />
                        </SwiperSlide>
                    ))
                ) : (
                    <div>No books available in this category.</div>
                )}
            </Swiper>
        </div>
    );
};

export default BookList;
