import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import mapMarkerImg from '../images/map-marker.svg';

import power from '../images/power.svg'
import locationIcon from '../images/map-pin.svg'
import locationWhiteIcon from '../images/map-pin-white.svg'

import '../styles/components/sidbarApp.css'
import api from '../services/api';
import { OrphanagesProps } from '../pages/Dashboard';
import { FiAlertCircle } from 'react-icons/fi';
import { BsQuestionCircle } from 'react-icons/bs';


function SidbarApp() {
  const { singOut } = useAuth()

  const history = useHistory()

  function handleSignOut() {
    singOut()
    history.push('/login')
 }
 const [show, setShow] = useState(true)

 function showRegister() {
   const sectionConcluded = document.querySelectorAll('main section')[0]
   const sectionPending = document.querySelectorAll('main section')[1]
   const buttonConcluded = document.querySelectorAll('aside.app-sidbar div.menu button')[0]
   const buttonPending = document.querySelectorAll('aside.app-sidbar div.menu button')[1]

   sectionConcluded.classList.remove('display-hide')
   sectionPending.classList.add('display-hide')

   buttonPending.classList.remove('active')
   buttonConcluded.classList.add('active')

   setShow(true)

 }

 function showPending() {
   const sectionConcluded = document.querySelectorAll('main section')[0]
   const sectionPending = document.querySelectorAll('main section')[1]

   const buttonConcluded = document.querySelectorAll('aside.app-sidbar div.menu button')[0]
   const buttonPending = document.querySelectorAll('aside.app-sidbar div.menu button')[1]


   sectionPending.classList.remove('display-hide')
   sectionConcluded.classList.add('display-hide')

   buttonConcluded.classList.remove('active')
   buttonPending.classList.add('active')

   setShow(false)


 }
 
 const [orphanagesPending, setOrphanagesPending] = useState<OrphanagesProps[]>([])

 useEffect(() => {
  api.get('orphanage-pending').then(response => {

    setOrphanagesPending(response.data)
  })
}, [])
  
  return (
    <aside className="app-sidbar">
      <Link to="/">
        <img src={mapMarkerImg} alt="Happy" />
      </Link>

      <div className="menu">
        <button type="button" className="active" onClick={showRegister}>
          <img src={ show ? locationIcon : locationWhiteIcon} width="24" height="24" alt="location"/>
        </button>
        <button type="button" onClick={showPending}>
          {
            orphanagesPending.length > 0
            ? show ? <BsQuestionCircle size={24} color="#FFF" /> : <BsQuestionCircle size={24} color="#0089A5"/> 
            ://icon without pendent
            show ? <FiAlertCircle size={24} color="#FFF"  /> : <FiAlertCircle size={24} color="#0089A5" />
          }
        </button>
        
      </div>

    <footer>
      <button type="button" onClick={handleSignOut}>
        <img src={power} width="24" height="24" alt="power"/>
      </button>
    </footer>
  </aside>

  )
}

export default SidbarApp