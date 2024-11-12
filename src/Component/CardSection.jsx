import React from 'react'
import Button from './Button'

const CardSection = () => {
  return (
    <div className='px-16 overflow-hidden'>
        <div className='flex justify-around items-center md:flex-row flex-col'>
       <div className='flex flex-col gap-5'>
        <h1 className='text-white md:text-4xl text-3xl'>Find a better card deal <br />in few easy steps.</h1>
        <p className='md:text-2xl text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Fuga ipsa harum pariatur <br />expedita? Repudiandae, dolorum sequi?</p>
        <div className="btn">
            <Button/>
        </div>
        </div>
        <div className='md:py-0 py-6'>
            <img className='lg:max-w-lg max-w-72 md:max-w-sm' src="/images/card.png" alt="" />
        </div>
        </div>
        <div className='md:py-24 py-10 flex justify-around items-center lg:flex-row flex-col gap-6 lg:gap-0'>
          <h1 className='text-white md:text-4xl text-2xl sm:text-3xl'>What people are <br />saying about us</h1>
          <p className='text-gray-700 text-lg md:text-xl py-4 md:py-0'>Everything you need to accept card payments <br />and grow your bussiness anywhere on the planet.</p>
        </div>
    </div>
  )
}

export default CardSection
