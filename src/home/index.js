import React, { useEffect, useState } from 'react';
import Favourite from '../screens/favourite';
import Feed from '../screens/feed';
import Player from '../screens/player/player';
import Trending from '../screens/trending';
import Library from '../screens/library/library';
import Sidebar from '../components/sidebar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './home.css'
import Login from '../screens/auth/login';
import { setClientToken } from '../spotify';
export default function Home() {
  const [token, setToken] = useState("");

  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);

    }else{
      setToken(token);
      setClientToken(token);

    }
  },[]);

  return !token ? (
    <Login/>
  ) : (
    <BrowserRouter>
    <div className='main'>
      <Sidebar/>
    <Routes>
      <Route path = '/' element={<Library/>}></Route>
      <Route path = '/feed' element={<Feed/>}></Route>
      <Route path = '/trending' element={<Trending/>}></Route>
      <Route path = '/Player' element={<Player/>}></Route>
      <Route path = '/favourite' element={<Favourite/>}></Route>
    </Routes>

    </div>

    </BrowserRouter>
    
  )
}
