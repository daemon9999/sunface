import React from 'react'
import Content from 'src/components/home/landing/Content'
import HelpNotification from 'src/components/home/landing/HelpNotification'

const Landing = () => {
  return (
    <section id='landing' className='bg-farm bg-cover h-[700px] w-full bg-no-repeat relative'>
        <div className='container w-5/6 mx-auto  h-full'>
            <Content/>
        </div>

        <HelpNotification/>


    </section>
  )
}

export default Landing