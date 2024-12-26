import React from 'react'
import { Link } from 'react-router-dom'
import { FaBook, FaBookOpen, FaFacebook, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10 px-4'>
      {/* left */}
      <div className='container max-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-1/2 w-full'>
          <FaBookOpen
            size={40}
            className='mb-5 w-36'
          />
          <ul className='flex flex-col md:flex-row gap-4'>
            <li><Link className='hover:text-orange-500' to=''>Home</Link></li>
            <li><Link className='hover:text-orange-500' to=''>Services</Link></li>
            <li><Link className='hover:text-orange-500' to=''>Contact Us</Link></li>
            <li><Link className='hover:text-orange-500' to=''>About</Link></li>
          </ul>
        </div>
        <div className='md:w-1/2 w-full'>
          <p className='mb-4'>
            if you want to offer and Subscribe my channel give your email
          </p>
          <div className='flex'>
            <input
              type="email"
              placeholder='Enter Your Email'
              className='text-black px-4 py-2 w-full rounded-l-md focus:outline-none'
              name="email"
            />
            <button className='bg-orange-500 px-6 py-2 rounded-r-md hover:bg-black' type="button">Subscribe</button>
          </div>
        </div>
      </div>


      <div className='container max-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-t-gray-500 pt-6'>
        <ul className='flex flex-col md:flex-row gap-4 mb-4'>
          <li><Link className='hover:text-orange-500' to=''>Privacy Policy</Link></li>
          <li><Link className='hover:text-orange-500' to=''>services and Terms</Link></li>
        </ul>
        <div className='flex gap-6'>
          <a className='hover:text-orange-500' href="#">
            <FaFacebook size={24} />
          </a>
          <a className='hover:text-orange-500' href="#">
            <FaYoutube size={24} />
          </a>
          <a className='hover:text-orange-500' href="#">
            <FaTelegram size={24} />
          </a>
          <a className='hover:text-orange-500' href="#">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
