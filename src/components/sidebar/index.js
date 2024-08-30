import React, { useEffect, useState } from 'react'
import {MdSpaceDashboard} from 'react-icons/md' 
import {MdFavorite} from 'react-icons/md' 
import {FaGripfire, FaPlay} from 'react-icons/fa' 
import {IoLibrary} from 'react-icons/io5' 
import {FaSignOutAlt} from 'react-icons/fa' 
import Sidebarbutton from './sidebarbutton'
import './sidebar.css'
import apiClient from '../../spotify'

export default function Sidebar() {

  const[image, setImage] = useState("https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg")

  useEffect(()=>{
    apiClient.get('me').then((response)=>{
      setImage(response.data.images[0].url);
      
    })

  },[]);
  return (
    <div className='sidebar-container'>
        <img src={image} alt='sidebarimg' className='profile-img'/>
        
       <div>
        <Sidebarbutton title='Feed' to='/feed' icon={ <MdSpaceDashboard />}/>
        <Sidebarbutton title='Trending' to='/trending' icon={ <FaGripfire />}/>
        <Sidebarbutton title='Player' to='/player' icon={ <FaPlay/>}/>
        <Sidebarbutton title='Favourite' to='/favourite' icon={ <MdFavorite />}/>
        <Sidebarbutton title='Library' to='/' icon={ <IoLibrary />}/>
        
        </div> 

        <Sidebarbutton title='Sign Out' to='' icon={ <FaSignOutAlt />}/>
        
      
    </div>
  )
}
