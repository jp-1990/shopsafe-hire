import React from "react"
import style from "./Button.module.scss"

const Button = ({ label, action }) => {
  return (
    <button className={style.Button} onClick={() => action()}>
      {label}
    </button>
  )
}

export default Button
