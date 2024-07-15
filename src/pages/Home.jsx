import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div>We are here, home</div>
      <NavLink to="../profiles">
        <button>Press me to go Profile</button>
      </NavLink>
    </>
  )
}
