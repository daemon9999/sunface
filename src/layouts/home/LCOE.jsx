import React from 'react'
import Details from 'src/components/home/lcoe/Details'

const LCOE = () => {
  return (
    <section id='lcoe' className='bg-main'>
        <div className='container mx-auto w-5/6 py-14 flex flex-col md:flex-row gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 md:justify-between' >
            <Details/>



            <div className='w-[80%] xs:w-[400px] sm:w-[420px]   md:flex-auto'>
                <img src="/assets/lcoe-graph.png" alt="LCOE Graph" className='md:ml-auto w-full md:w-4/5 h-auto' />
            </div>
        </div>


    </section>
  )
}

export default LCOE