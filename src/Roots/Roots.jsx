import React from 'react'
import Navber from '../Componenets/Navber'
import { Outlet } from 'react-router'
import Fotter from '../Componenets/Fotter'

const Roots = () => {
  return (
    <div className=''>
      <Navber></Navber>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  )
}

export default Roots
