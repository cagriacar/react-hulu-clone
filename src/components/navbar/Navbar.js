import React from 'react'
import './style/Navbar.css'
import requests from '../movies/api/tmbd/requests'

function Navbar({setSelectedOption}) {
  return (
    <div className="navbar">
          <h2 onClick={()=> setSelectedOption(requests.fetchTrend)}>Trend</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchTopRated)}>En Çok İzlenen</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchAksiyon)}>Aksiyon</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchKomedi)}>Komedi</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchKorku)}>Korku</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchRomantik)}>Romantik</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchGizem)}>Gizem</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchBilimKurgu)}>Bilim Kurgu</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchMacera)}>Macera</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchAnimasyon)}>Animasyon</h2>
          <h2 onClick={()=> setSelectedOption(requests.fetchTV)}>Film</h2>
    </div>
  )
}

export default Navbar
