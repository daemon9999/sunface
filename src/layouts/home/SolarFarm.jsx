import React from 'react'
import Reasons from 'src/components/home/solar-farm/Reasons'

const SolarFarm = () => {
  return (
    <section id='solar-farm' className='bg-brand-linear py-6 h-auto xs:py-9 sm:py-10 md:py-16 lg:py-[100px]'>
        <div className='container w-5/6 mx-auto text-main h-full '>
            <div className='flex flex-col items-center justify-center h-full gap-y-8 xs:gap-y-10 lg:gap-y-16'>
                <h3 className='font-light text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                    Why Solar Farm?
                </h3>

                <Reasons/>

            </div>
        </div>    


    </section>
  )
}

export default SolarFarm