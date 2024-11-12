import React from 'react'
import Button from './Button'

const Bussiness = () => {
  return (
    <div className='px-16'>
      <div className='flex justify-between md:flex-row flex-col gap-8 md:gap-0'>
        <div>
            <h1 className='text-white text-2xl md:text-3xl'>You do the bussiness,<br />We will handle the money.</h1>
           <br />
            <p className='text-gray-600 text-sm md:text-lg'>With the right credit card,you can improve your <br />financial life by building credit,earning rewards and <br /> saving money.But with hundreds of credit cards on the market.</p>
            <Button/>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <img className='relative bottom-3' src="/images/Star.svg" alt="" />
                    <div>
                        <h1 className='text-2xl text-white'>Reward</h1>
                        <p className='text-sm text-gray-600'>The best credit cards offers some tantalizing combinations of <br />promotions and prizes</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 md:py-2 py-6'>
                    <img className='relative bottom-3' src="/images/Shield.svg" alt="" />
                    <div>
                        <h1 className='text-2xl text-white'>100% Secured</h1>
                        <p className='text-sm text-gray-600'>We take proactive steps make sure your information and<br />transactions are secured.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 md:py-2 py-6'>
                    <img className='relative bottom-3' src="/images/Star.svg" alt="" />
                    <div>
                        <h1 className='text-2xl text-white'>Balance Transfer</h1>
                        <p className='text-sm text-gray-600'>A balance transfer credit card can save you alot of money in<br />interest charges</p>
                    </div>
                </div>
            </div>
        
      </div>
    </div>
  )
}

export default Bussiness
