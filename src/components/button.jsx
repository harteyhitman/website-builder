import React from 'react'

const Button = ({onClick, className, label}) => {
  return (
    <button onClick={onClick} className={className}>{label}</button>
  )
}

export default Button