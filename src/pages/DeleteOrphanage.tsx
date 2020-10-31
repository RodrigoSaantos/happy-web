import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../services/api'

import '../styles/pages/deleteOrphanage.css'

function DeleteOrphanage() {

  const history = useHistory()
  
  const splitOrphanage = window.location.pathname.split('/')
  const orphanageId = splitOrphanage[2]
  
  useEffect(() => {

      api.get(`orphanage/${orphanageId}`).then(response => {
        // console.log(response.data);
        // console.log(orphanageId);
      })

      // console.log(orphanageId);
  
    }, [orphanageId])

    function handleDeleteOrphanage() {
      api.delete(`delete-users/${orphanageId}`)

      setTimeout(() => {
        history.push('/dashboard')
        alert('Orfanato excluído com sucesso')
        
      }, 100);
    }
  return (
    <div id="page-delete-orphanage">
      <div className="content-exclude">

        <main>
          <h1>Excluir!</h1>
          <span>Você tem certeza que quer excluir Orf. Esperança?</span>
          <div>
            <Link to="/dashboard">
              <button>Voltar para o mapa</button>
            </Link>
            <button onClick={handleDeleteOrphanage}>Sim!</button>

          </div>
        </main>

      </div>
    </div>
  )
}

export default DeleteOrphanage