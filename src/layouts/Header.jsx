import Logo from 'src/components/header/Logo'
import React from 'react'

import Navbar from 'src/components/header/Navbar'
import Actions from 'src/components/header/Actions'

const Header = () => {
  return (
    <header className='bg-main-2'>
        <div className='container w-5/6 mx-auto py-4 flex items-center justify-between'>
           <Logo/>
            <Navbar/>

            <Actions/>
        </div>

    </header>
  )
}

export default Header