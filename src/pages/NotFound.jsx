import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
    <div>Not Found Page</div>
    <NavLink to="/">
        <button>Press me to go to the right page...</button>
    </NavLink>
    </>
    
  )
}
