import React, { ButtonHTMLAttributes } from 'react'

import '../styles/components/buttonEnter.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}



const ButtonEnter:React.FC<ButtonProps> = ({name, ...rest}) => {
  return (
    <>
      <button {...rest}>
        {name}
      </button>
    </>
  )
}

export default ButtonEnter