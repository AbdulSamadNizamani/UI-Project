import React from 'react'

const cards = () => {
  return (
    <div className='px-16 py-12 overflow-hidden'>
      <div className='flex justify-around items-center md:flex-row flex-col'>
        <div>
            <img className='lg:max-w-lg max-w-xs md:max-w-sm' src="/images/bill.png" alt="" />
        </div>
        <div>
            <h1 className='text-white md:text-4xl text-3xl'>Easily control your<br />billing & invoicing</h1>
            <p className='text-gray-600 md:text-xl text-lg py-6'>Lorem, ipsum dolor sit  adipisicing elit. <br/> Illum explicabo numquam ea. Similique <br/> nisi natus sunt laudantium sit?</p>
            <p></p>
            <div className='flex justify-around items-center'>
                <img className='sm:w-40 w-32' src="/images/apple.svg" alt="" />
                <img className='sm:w-40 w-32' src="/images/google.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default cards
