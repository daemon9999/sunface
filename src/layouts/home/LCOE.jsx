import React from 'react'
import Details from 'src/components/home/lcoe/Details'

const LCOE = () => {
  return (
    <section id='lcoe' className='bg-main'>
        <div className='container mx-auto w-5/6 py-14 flex  gap-16 justify-between' >
            <Details/>



            <div className='flex-auto'>
                <img src="/assets/lcoe-graph.png" alt="LCOE Graph" className='ml-auto w-4/5 h-auto' />
            </div>
        </div>


    </section>
  )
}

export default LCOE