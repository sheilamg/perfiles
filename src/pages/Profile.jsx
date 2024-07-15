import React from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { ButtonCounter } from '../components/ButtonCounter';
import { useButtom } from '../hooks/useButtom';
import ProfileData from '../components/ProfileData';


export const Profile = () => {
  const params = useParams();

  const {value, inc, desc}  = useButtom();
  
  return (
    <>
    <span>Profile {params.profileId}</span>
    <NavLink to="/home">
        <button>Press me to go Home</button>
    </NavLink>
    <NavLink to="/">
        <button>Press me to go App I guess</button>
    </NavLink>
    <div>
      <ButtonCounter count={value} onClick={desc} label={'decrement'}/>
      <ButtonCounter onClick={inc} label={'increment'}/>
    </div>
    <div>
      <ProfileData />
    </div>
    </>
    
  )
}
