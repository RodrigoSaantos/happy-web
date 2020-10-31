import React, { FormEvent, useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import Input from '../components/Input'
import ButtonEnter from '../components/ButtonEnter'

import logoTipo from '../images/logotipo.svg'

import '../styles/pages/login.css'

import { useAuth } from '../contexts/auth'

function Login() {
  const { signed, signIn } = useAuth()
  // console.log(signed);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [inputOne, setInputOne] = useState(false)
  const [inputTwo, setInputTwo] = useState(false)

  useEffect(() => {

    const emailTrue = email !== ""
    setInputOne(emailTrue)

    const passwordTrue = password !== ""
    setInputTwo(passwordTrue)

  }, [email, password])

  function active3() {
    const valueOfInput = document.querySelectorAll('input')

      if (valueOfInput[2].checked || valueOfInput[0].selectionEnd as number > 0 || valueOfInput[1].selectionEnd as number > 0  ) {
        document.querySelector('button')?.setAttribute('class', 'active')
      } else {
        document.querySelector('button')?.removeAttribute('class')
      }    
  }

  const history = useHistory()
   function handleSignIn(e: FormEvent) {
    e.preventDefault()

     signIn(email, password).then(() => {
       history.push('/dashboard')

     }).catch(() => {
       alert('email ou senha incorreta!')
     })

  }

  return (
    <div id="page-login">

      <div className="logo">
      <img src={logoTipo} alt=""/>
      <div className="location">
        <strong>Embu das Artes</strong>
        <span>São Paulo</span>
      </div>

      </div>

      <div className="login">

      <Link to="/" className="home">
        < FiArrowLeft
          size={26}
          color='#15C3D6'
        />
      </Link>

        <form method="get" onSubmit={handleSignIn}>
          <fieldset>
          <legend>Fazer Login</legend>
            
            <Input
              name="email"
              label="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              name="password"
              label="Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <div className="checkbox">
              <input type="checkbox" name="remember" id="remember" onChange={active3} />
              <label htmlFor="remember">Lembrar-me</label>
              <Link to="/esqueci-minha-senha">
              
              <span>Esqueci minha senha</span>
              </Link>
            </div>

            <ButtonEnter
              name="Entrar"
              type="submit"
              className={inputOne || inputTwo ? 'active' : inputTwo || inputOne ? 'active' : ''}
            />
          </fieldset>
        </form>
        
      </div>
    </div>
  )
}

export default Login