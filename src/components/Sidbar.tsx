import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidbar.css'


function Sidbar() {
  const {goBack} = useHistory()
  
  return (
    <aside className="app-sidbar">
    <img src={mapMarkerImg} alt="Happy" />

    <footer>
      <button type="button" onClick={goBack}>
        <FiArrowLeft size={24} color="#FFF" />
      </button>
    </footer>
  </aside>

  )
}

export default Sidbar