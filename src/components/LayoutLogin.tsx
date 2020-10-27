import React from 'react'

import logoTipo from '../images/logotipo.svg'

import '../styles/components/layoutLogin.css'

interface LayoutLoginProps {
  pageName: string
}

const Login:React.FC<LayoutLoginProps> = (props) => {

  return (
    <div id={props.pageName} className="page-layout">

      <div className="logo">
        <img src={logoTipo} alt="logo" />
        <div className="location">
          <strong>Embu das Artes</strong>
          <span>São Paulo</span>
        </div>

      </div>

      {props.children}



    </div>
  )
}

export default Login