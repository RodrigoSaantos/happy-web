import React, { FormEvent, useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import ButtonEnter from '../components/ButtonEnter'
import Input from '../components/Input'

import LayoutLogin from '../components/LayoutLogin'
import api from '../services/api'

import '../styles/components/forgotMyPassword.css'

function ForgotMyPassword() {
  const history = useHistory()
  const [email, setEmail] = useState('')

  const [inputOne, setInputOne] = useState(false)

  useEffect(() => {

    const emailTrue = email !== ""
    setInputOne(emailTrue)

  }, [email])

  function active1() {
    const valueOfInput = document.querySelectorAll('input')

      if (valueOfInput[0].selectionEnd as number > 0 ) {
        document.querySelector('button')?.setAttribute('class', 'active')
      } else {
        document.querySelector('button')?.removeAttribute('class')
      }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    api.get('/id-user', {
      params: {email}
    }).then(response => {

      const id = response.data.id
      history.push(`/redefinicao-de-senha/${id}`)

    }).catch(() => {
      alert('Email não cadastrado!')
    })

    // const emailRedefinition = {id}

    // history.push(`/redefinicao-de-senha/${id}`)

    // console.log(emailRedefinition);
  }
  return (
    <LayoutLogin pageName="page-forgot-my-password">

      <div id="form-box">
        <Link to="/login" className="home">
          < FiArrowLeft
            size={26}
            color='#15C3D6'
          />
        </Link>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Esqueci a senha</legend>
            <span>Sua redefinição de senha será enviada para o e-mail cadastrado.</span>

            <Input
              name="email"
              label="E-mail"
              value={email}
              onChange={e => {setEmail(e.target.value)}}
              onFocus={active1}
            />
            <ButtonEnter name="Entrar" type="submit" className={inputOne ? 'active' : ''} />
          </fieldset>
        </form>

      </div>

    </LayoutLogin>
  )
}

export default ForgotMyPassword