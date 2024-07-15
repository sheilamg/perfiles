import React from 'react'
import { ProfileSelect } from './ProfileSelect';
import { Outlet } from 'react-router-dom';

export const ProfilesPages = () => {

  return (
    <div>
      <ProfileSelect />  
      <Outlet />  
    </div> 

  )
}
