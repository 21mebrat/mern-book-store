import React from 'react'
import image from '../../assets/coding.jpg'
const Banner = () => {
    return (
        <section className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
             {/* right */}
             <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                <img src={image} alt="" className='rounded-lg' />
            </div>
            {/* left */}
            <div className='md:w-1/2 w-full '>
                <h1 className='md:text-5xl text-xl font-medium mb-7'> New Relases This Week</h1>
                <p className='mb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur! Blanditiis perspiciatis molestiae nam ex rerum a officia, commodi, corrupti porro vel debitis consequuntur? Vero laudantium et mollitia quis voluptatum!</p>
                <button className='btn-primary' type="button">Subscribe</button>
            </div>
           
        </section>
    )
}

export default Banner
