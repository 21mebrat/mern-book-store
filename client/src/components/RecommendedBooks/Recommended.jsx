import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper style4
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {  Pagination,Navigation } from 'swiper/modules';
import Book from '../Book/Book';
import { useGetAllBooksQuery } from '../../feature/auth/authApiSlice';
const Recommended = () => {
    const { data, isLoading, isError, error } = useGetAllBooksQuery();
if(isLoading) return <p>loadding...</p>
if(isError ) return <p>{error.message}</p>
    return (
        <div className='py-16'>
            <h2 className='text-2xl font-semibold mb-6'>Recommended Books</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation = {true}
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
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >
                {
                    data?.map((book, index) => (
                        <SwiperSlide key={index}>
                            <Book book={book} />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}

export default Recommended
