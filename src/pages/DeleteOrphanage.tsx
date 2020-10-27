import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/pages/deleteOrphanage.css'

function DeleteOrphanage() {
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
            <button>Sim!</button>

          </div>
        </main>

      </div>
    </div>
  )
}

export default DeleteOrphanage