import React from 'react'
import { useNavigate } from 'react-router-dom';
import { profilesData } from '../utils/profilesData';

export const ProfileSelect = () => {
  const navigate = useNavigate(); 
  
  const profiles = [
    {id: 1, name: "Profile 1"},
    {id: 2, name: "Profile 2"},
    {id: 3, name: "Profile 3"},
    {id: 4, name: "Profile 4"}
  ];
  
  const handleProfileChange = (e) =>{
    const profileId = e.target.value;
    if(profileId){
        navigate(`${profileId}`);
    }
  };

  return (
    <div>
      <h2>Select a Profile</h2>
      <select onChange={handleProfileChange} defaultValue="">
        <option value="" disabled>Choose a profile</option>
        
        {profilesData.map(profile => (
         <option key={profile.userId} value={profile.userId}>
            {profile.userId}
         </option>
      ))}
      </select>  
    </div>
  )
}
