import React from 'react'
import Posts from 'src/components/home/explore-sunface/Posts'
import Welcome from 'src/components/home/explore-sunface/Welcome'

const ExploreSunface = () => {
  return (
    <section id='explore-sunface' className='bg-main-2'>

        <div className='container mx-auto w-5/6 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20'>


                <Welcome/>
                <Posts/>
        </div>

    </section>
  )
}

export default ExploreSunface