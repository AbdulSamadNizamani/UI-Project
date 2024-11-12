import React from 'react'

const Footer = () => {
  return (
    <div className='py-28 h-0 overflowHidden'>
      <div className='flex justify-between md:flex-row flex-col items-center px-6'>
        <div>
        <img src="/images/logo.svg" className='w-56' alt="" />
        <p className='text-white text-lg pt-4 md:pt-0'>A new way to make the payments<br />easy,reliable and secure.</p>
        </div>
        <div className='md:flex-none flex justify-between py-8 md:py-0 w-full md:hidden'>
        <div className='flex flex-col gap-2 cursor-pointer'>
            <h2 className='text-xl text-white'>Useful Links</h2>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Content</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>How it works</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Create</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Explore</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Terms</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Services</p>
        </div>
        <div className='flex flex-col gap-2 cursor-pointer'>
            <h2 className='text-xl text-white'>Community</h2>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Help Center</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Partners</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Suggestions</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Blog</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>NewSletters</p>
        </div>
        </div>
        <div className='flex flex-col gap-2 cursor-pointer hidden md:block'>
            <h2 className='text-xl text-white'>Useful Links</h2>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Content</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>How it works</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Create</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Explore</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Terms</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Services</p>
        </div>
        <div className='flex flex-col gap-2 cursor-pointer hidden md:block'>
            <h2 className='text-xl text-white'>Community</h2>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Help Center</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Partners</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Suggestions</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Blog</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>NewSletters</p>
        </div>
        <div className='flex flex-col gap-2 cursor-pointer pr-52 md:pr-0'>
            <h2 className='text-xl text-white'>Useful Links</h2>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>Content</p>
            <p className='text-lg text-gray-500 hover:text-yellow-500 transition-all duration-300 ease-in'>How it works</p>
        </div>
      </div>
      <div>
        <hr className='md:hidden' />
        <div className='flex justify-between items-center px-10 py-6 md:flex-row flex-col gap-4'>
            <h1 className='text-white text-base md:text-xl'>2021 HooBank.All Rights Reserved.</h1>
            <div className='flex items-center gap-6'>
                <img className='w-8 hover:rotate-[360deg] cursor-pointer transition-all duration-300 ease-in' src="/images/instagram.svg" alt="" />
                <img className='w-8 hover:rotate-[360deg] cursor-pointer transition-all duration-300 ease-in' src="/images/facebook.svg" alt="" />
                <img className='w-8 hover:rotate-[360deg] cursor-pointer transition-all duration-300 ease-in' src="/images/twitter.svg" alt="" />
                <img  className='w-8 hover:rotate-[360deg] cursor-pointer transition-all duration-300 ease-in'src="/images/linkedin.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
