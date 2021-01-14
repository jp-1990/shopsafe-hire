import React from "react"
import style from "./RadioCardBox.module.scss"

const RadioCardBox = ({ children }) => {
  return <div className={style.RadioCardBox}>{children}</div>
}

export default RadioCardBox
