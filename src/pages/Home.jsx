import React from 'react'
import ExploreSunface from 'src/layouts/home/ExploreSunface'
import LCOE from 'src/layouts/home/LCOE'
import Landing from 'src/layouts/home/Landing'
import SolarFarm from 'src/layouts/home/SolarFarm'

const Home = () => {
  return (
    <>
        <Landing/>
        <SolarFarm/>
        <ExploreSunface/>
        <LCOE/>
    </>
  )
}

export default Home