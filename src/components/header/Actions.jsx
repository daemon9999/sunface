import React from 'react'
import Button from 'src/components/common/Button'

const Actions = () => {
  return (
    <div>
        <Button additionalStyle='hover:bg-brand hover:bg-opacity-90 hover:text-main-2 transition-all duration-300 border-y border-l border-brand'>Login</Button>  
        <Button additionalStyle='bg-brand text-main-2 hover:bg-main-2 hover:text-brand transition-all duration-300 border border-brand '>Schedule Meeting</Button>  

    </div>
  )
}

export default Actions