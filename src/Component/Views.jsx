import React from 'react'
import Button from './Button'

const Views = () => {
  return (
    <div className='px-16'>
        <div>
      <div className='flex justify-around items-center lg:flex-row flex-col gap-10 lg:gap-0'>
        <div className='text-white'>
            <img src="/images/quotes.svg" alt="" />
            <div className='py-5 font-light'>
                <p className='text-white text-xl'>Money is only a tool.It will take<br/>you whereever you wish,but it<br/>will not replace you as the driver.</p>
            </div>
            <div className='flex items-center gap-2'>
                <img className='w-16' src="/images/people01.png" alt="" />
                <h1 className='text-white text-sm sm:text-xl'>Herman Jensen <br /><span className='text-gray-600 text-sm sm:text-xl'>Founder & Leader</span></h1>
            </div>
        </div>
        <div className='text-white'>
            <img src="/images/quotes.svg" alt="" />
            <div className='py-5 font-light'>
                <p className='text-white text-xl'>Money makes your life easier.If<br/>you are lucky to have it,you are<br/>lucky.</p>
            </div>
            <div className='flex items-center gap-2'>
                <img className='w-16' src="/images/people02.png" alt="" />
                <h1 className='text-white text-sm sm:text-xl'>Steve Mark <br /><span className='text-gray-600 text-sm sm:text-xl'>Founder & Leader</span></h1>
            </div>
        </div>
        <div className='text-white'>
            <img src="/images/quotes.svg" alt="" />
            <div className='py-5 font-light'>
                <p className='text-white text-xl'>It is usually people in the money<br/>bussiness,finance, and international<br/>trade that are really rich.</p>
            </div>
            <div className='flex items-center gap-2'>
                <img className='w-16' src="/images/people03.png" alt="" />
                <h1 className='text-white text-sm sm:text-xl'>Kenn Gallagher <br /><span className='text-gray-600 text-sm sm:text-xl'>Founder & Leader</span></h1>
            </div>
        </div>
      </div>
      <div className='flex justify-between items-center md:py-12 lg:flex-row flex-col lg:gap-0 gap-10 py-14'>
        <img className='md:w-56 w-40' src="/images/airbnb.png" alt="" />
        <img className='md:w-56 w-40' src="/images/binance.png" alt="" />
        <img className='md:w-56 w-40' src="/images/coinbase.png" alt="" />
        <img className='md:w-56 w-40' src="/images/dropbox.png" alt="" />
      </div>
      </div>
      <div className='bg-slate-200 lg:max-w-4xl sm:max-w-7xl lg:h-44 h-72 m-auto rounded-3xl'>
        <div className='flex justify-around items-center lg:flex-row flex-col md:py-12 py-6'>
            <div>
            <h1 className='text-red-700 md:text-3xl text-xl'>Lets try our service now!</h1>
            <p className='text-indigo-500 md:text-xl text-sm py-2'>Everything you need to accept card payment and <br />grow your bussiness anywhere on the planet.</p>
            </div>
            <div className=' relative lg:bottom-6'>
            <Button/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Views
