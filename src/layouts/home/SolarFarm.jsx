import React from 'react'
import Reasons from 'src/components/home/solar-farm/Reasons'

const SolarFarm = () => {
  return (
    <section id='solar-farm' className='bg-brand-linear h-[600px]'>
        <div className='container w-5/6 mx-auto text-main h-full'>
            <div className='flex flex-col items-center justify-center h-full gap-y-20'>
                <h3 className='font-light text-7xl'>
                    Why Solar Farm?
                </h3>

                <Reasons/>

            </div>
        </div>    


    </section>
  )
}

export default SolarFarm