import React from "react"
import style from "./Wrapper.module.scss"

const Wrapper = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>
}

export default Wrapper
