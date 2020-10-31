import React, { FormEvent, useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory, useParams } from 'react-router-dom'
import ButtonEnter from '../components/ButtonEnter'
import Input from '../components/Input'

import LayoutLogin from '../components/LayoutLogin'
import api from '../services/api'

import '../styles/components/redefinitionPassword.css'

interface UserIdProps {
  id: string
}

function RedefinitionPassword() {
  const history = useHistory()
  const params = useParams<UserIdProps>()

  const [novaSenha, setNovaSenha] = useState('')
  const [repetirSenha, setRepetirSenha] = useState('')
  function active1() {
    const valueOfInput = document.querySelectorAll('input')

      if (valueOfInput[0].selectionEnd as number > 0 ) {
        document.querySelector('button')?.setAttribute('class', 'active')
      } else {
        document.querySelector('button')?.removeAttribute('class')
      }
  }

  function handleSubmit(e:FormEvent) {
    e.preventDefault()

    if (novaSenha === repetirSenha) {
      api.put(`/update-password/${params.id}`, {
        novaSenha
      })
      alert('Senha redefinida com sucesso!')
      history.push('/login')
    } else {
      alert('As senhas não coincidem!')
    }

    console.log(params.id);   
  }

  const [inputOne, setInputOne] = useState(false)
  const [inputTwo, setInputTwo] = useState(false)
  useEffect(() => {

    const novaSenhaTrue = novaSenha !== ""
    setInputOne(novaSenhaTrue)

    const repetirSenhaTrue = repetirSenha !== ""
    setInputTwo(repetirSenhaTrue)

  }, [novaSenha, repetirSenha])
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
            <legend>Redefinição de senha</legend>
            <span>Escolha uma nova senha para você acessar o dashboard do Happy.</span>

            <Input
              name="novaSenha"
              label="Nova senha"
              type="password"
              value={novaSenha}
              onChange={e => {setNovaSenha(e.target.value)}}
              onFocus={active1}
            />

            <Input
              name="repetirSenha"
              label="Repetir senha"
              type="password"
              value={repetirSenha}
              onChange={e => { setRepetirSenha(e.target.value)}}
              onFocus={active1}
            />
            <ButtonEnter name="Entrar" type="submit" className={inputOne || inputTwo ? 'active' : inputTwo || inputOne ? 'active' : ''} />
          </fieldset>
        </form>

      </div>

    </LayoutLogin>
  )
}

export default RedefinitionPassword