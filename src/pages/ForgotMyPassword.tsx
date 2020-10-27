import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ButtonEnter from '../components/ButtonEnter'
import Input from '../components/Input'

import LayoutLogin from '../components/LayoutLogin'

import '../styles/components/forgotMyPassword.css'

function ForgotMyPassword() {
  function active1() {
    const valueOfInput = document.querySelectorAll('input')

      if (valueOfInput[0].selectionEnd as number > 0 ) {
        document.querySelector('button')?.setAttribute('class', 'active')
      } else {
        document.querySelector('button')?.removeAttribute('class')
      }
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

        <form>
          <fieldset>
            <legend>Esqueci a senha</legend>
            <span>Sua redefinição de senha será enviada para o e-mail cadastrado.</span>

            <Input
              name="email"
              label="E-mail"
              onChange={active1}
              onFocus={active1}
            />
            <ButtonEnter name="Entrar"/>
          </fieldset>
        </form>

      </div>

    </LayoutLogin>
  )
}

export default ForgotMyPassword