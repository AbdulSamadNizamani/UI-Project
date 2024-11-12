import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import CountUp from 'react-countup'
const Home = () => {
  return (
    <div>
    <div className='md:py-20 py-14 flex justify-around items-center md:flex-row flex-col overflow-hidden'>
      <div className='px-16'>
        <div className='bg-slate-700 w-72 md:w-64 py-1 px-4 rounded-xl flex mb-4'>
        <img className='w-4' src="/images/quotes.svg" alt="" />
            <h3 className='text-white text-xs'>20% Discount For 1Month Account</h3>
        </div>
        <div className=''>
            <h1 className='text-white md:text-4xl text-3xl'>The Next <br /> <span className='text-blue-300'> <Typewriter
            words={['Generation', 'Flexibility', 'Reasoning','Artificial Intelligence',]}
            loop={5}
            cursor
            cursorStyle='/'
            cursorColor='gold'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
            /></span> <br />Payment Method.</h1>
            <br />
            <p className='text-gray-500 md:text-xl text-sm'>Our team of experts uses a methodology to identify <br />the credit cards most likely to fit your needs. we<br />examine annual percentage rates ,annual fees.</p>
        </div>
      </div>
      <div className="img flex items-center md:relative md:right-44">
              <img className='w-64 relative bottom-20 left-32 hidden md:block' src="/images/getstart.png" alt="" />
              <img className='md:w-96 w-80 py-6 md:py-0' src="/images/robot.png" alt="" />
            </div>
    </div>
    <div className='text-white px-16 relative bottom-20 gap-5 md:gap-0 flex md:justify-between md:flex-row flex-col'>
      <div className="section1 flex items-center gap-1">
              <CountUp className='md:text-3xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white' start={2000} end={3200} duration={4} />
              <span className='md:text-3xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white'>+</span>
              <span className='md:text-3xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white'>User</span>
              </div>
      <div className="section1 flex items-center gap-1">
              <CountUp className='md:text-3xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white' start={3200} end={4200} duration={4} />
              <span className='md:text-3xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white'>+</span>
              <span className='md:text-2xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white'>Company</span>
              </div>
      <div className="section1 flex items-center gap-1">
              <CountUp className='md:text-3xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white' start={4200} end={5400} duration={4} />
              <span className='md:text-3xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white'>+</span>
              <span className='md:text-2xl sm:text-2xl text-[5vw] md:text-yellow-600 text-white'>Transaction</span>
              </div>
            </div>
    </div>
   
  )
}

export default Home
