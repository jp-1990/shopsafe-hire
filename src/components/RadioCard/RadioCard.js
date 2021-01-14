import React from "react"
import Button from "../Button/Button"
import style from "./RadioCard.module.scss"

const RadioCard = ({ image, title, modalState }) => {
  return (
    <div className={style.container}>
      <div className={style.imagebox}>
        <img src={image}></img>
        <h1>{title}</h1>
      </div>
      <div className={style.buttonbox}>
        <Button
          label="Hire Now"
          action={() => modalState({ image, title })}
        ></Button>
      </div>
    </div>
  )
}

export default RadioCard
