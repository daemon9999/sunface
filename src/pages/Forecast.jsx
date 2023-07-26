import React from 'react'
import HistoricalForecast from 'src/layouts/forecast/HistoricalForecast'
import Sidebar from 'src/layouts/forecast/Sidebar'

const Forecast = () => {
  return (
      <div className='flex gap-x-4  h-[88vh]'>
          <HistoricalForecast/>
          <Sidebar/>
      </div>
  )
}

export default Forecast