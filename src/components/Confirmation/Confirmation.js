import React from "react"

import style from "./Confirmation.module.scss"

import { useHire } from "../../Context/HireContext"

const Confirmation = () => {
  const { hireState } = useHire()
  console.log(hireState)

  return <div>{hireState?.quantity ? hireState.quantity : ""}</div>
}

export default Confirmation
