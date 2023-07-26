import React from 'react'
import {IoSettingsSharp} from 'react-icons/io5'
const PVSystem = () => {
  return (
    <div className='mt-6 mb-10'>
        <h4 className='text-[#364863] font-bold mb-7 uppercase'>PV system data</h4>
        

        <h5 className='text-[#364863] font-bold mb-2'>PV system configuration</h5>

        <div className='flex items-center pl-1'>
            <img src="src/icons/panel.svg" alt="Panel logo"  />
            <div className='flex flex-col text-sm text-[#4B5B75]'>
                <p>Pv system: <span className='font-bold'>Bifacial Ground-mounted large scale</span></p>
                <p>Tilt of PV panels: <span className='font-bold'>34º</span></p>
                <p>Installed capacity: <span className='font-bold'>1000 kWp</span></p>
            </div>

        </div>

        <span className='flex items-center gap-x-2 text-[#22A6F5] text-sm justify-end mt-2 cursor-pointer '>
            <IoSettingsSharp size={20}/>
            <p className='font-medium'>Change PV system</p>
        </span>

        <h6 className='text-[#364863] font-bold mt-4'>
          Plants
        </h6>
        <div className='flex  text-[#4B5B75] text-sm items-center justify-center'>
          <div>
            <p>Power of bifacial PV </p>
            <p>Power of monofacial PV</p>
            <p>Albedo</p>
          </div>
        </div>
        <p className='text-[#22A6F5] font-medium text-sm mt-3 text-end'>Learn More</p>
    </div>
  )
}

export default PVSystem