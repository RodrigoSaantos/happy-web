import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/pages/registeredSuccessfully.css'

function DeleteOrphanage() {

  return (
    <div id="page-registered-successfully">
      <div className="content-exclude">

        <main>
          <h1>Ebaaa!</h1>
          <span>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</span>
          
            <Link to="/app">
              <button>Voltar para o mapa</button>
            </Link>
            
        </main>

      </div>
    </div>
  )
}

export default DeleteOrphanage