import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'

const Dashlayout = ({children}) => {
  return (
    <div className='relative flex flex-col'>
      <Navbar/>
  
      <div className='overflowY-scroll w-full mt-16'>
        {children}
      </div>
 
      <Footer/>
    </div>
  )
}

export default Dashlayout
