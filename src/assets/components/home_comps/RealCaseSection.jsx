import React from 'react'
import realcase from './Home_i/realcase.jpg'

function RealCaseSection() {
  return (
    <div className='flex flex-col bg-[#f1d7c4] m-10 p-10 md:flex-row'>
  {/* text part */}
  <div className='w-1/2 text-left justify-center items-center'>
    <h1 className='text-[#5e4b3c] font-bold text-3xl mb-2'>REAL CASE</h1>
    <h4 className='text-[#5e4b3c] text-xl font-medium mb-4'>REJURAN</h4>
    
    <p className='text-[#5e4b3c] mb-3'>
      Restore your skin’s natural healing power with Rejuran—designed to repair, rejuvenate, and rebalance your skin from within.
    </p>
    
    <p className='text-[#5e4b3c] mb-3'>
      This real case showcases how Rejuran treatments visibly reduced fine lines, improved skin texture, and boosted hydration—giving our client a youthful, radiant glow.
    </p>
    
    <p className='text-[#5e4b3c]'>
      Whether it’s post-acne repair, anti-aging, or revitalizing dull skin, Rejuran works at the cellular level to regenerate and strengthen your skin barrier.
    </p>
  </div>


        <div className='w-1/2 '>
        <img 
        src= {realcase}
        className='max-w-full pl-20'
        />
        </div>
    </div>
  )
}

export default RealCaseSection