import React from 'react'
import { useParams } from 'react-router-dom'
import { profilesData } from '../utils/profilesData';

function ProfileData() {
  const {profileId} = useParams();
  const profile = profilesData.find(p => p.userId === parseInt(profileId));
  
  if(!profile){
    return <div>Profile not found</div>;
  } 
  
  const { title, description } = profile.data;

  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default ProfileData