import React, { useState } from "react"
import { navigate } from "gatsby"
import style from "./Modal.module.scss"

import { useHire } from "../../Context/HireContext"

const Modal = ({ modalActive, modalState }) => {
  const { hireState, setHireState } = useHire()
  const [confirm, setConfirm] = useState(false)

  const handleChange = (e, target) => {
    const value = e.target.value
    setHireState(prev => {
      return { ...prev, [target]: value }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setConfirm(prev => !prev)
  }

  const output = Object.keys(hireState).map((e, i) => {
    return <h3 key={i}>{`${e}: ${hireState[e]}`} </h3>
  })

  return (
    <div className={style.modal}>
      <div className={style.wrapper}>
        {!confirm ? (
          <>
            <div className={style.radioContainer}>
              <img src={modalActive.image}></img>
            </div>
            <div className={style.formContainer}>
              <h1>{modalActive.title}</h1>
              <form onSubmit={e => handleSubmit(e)}>
                <label>Quantity of radios to hire</label>
                <input
                  type="text"
                  value={hireState?.quantity ? hireState.quantity : ""}
                  onChange={e => handleChange(e, "quantity")}
                ></input>
                <h3>Details</h3>
                <label>Full Name</label>
                <input
                  type="text"
                  value={hireState?.fullname ? hireState.fullname : ""}
                  onChange={e => handleChange(e, "fullname")}
                ></input>
                <label>Email Address</label>
                <input
                  type="email"
                  value={hireState?.email ? hireState.email : ""}
                  onChange={e => handleChange(e, "email")}
                ></input>
                <label>Contact Number</label>
                <input
                  type="text"
                  value={hireState?.number ? hireState.number : ""}
                  onChange={e => handleChange(e, "number")}
                ></input>
                <h3>Shipping Address</h3>
                <label>Address 1</label>
                <input
                  type="text"
                  value={hireState?.address1 ? hireState.address1 : ""}
                  onChange={e => handleChange(e, "address1")}
                ></input>
                <label>Address 2</label>
                <input
                  type="text"
                  value={hireState?.address2 ? hireState.address2 : ""}
                  onChange={e => handleChange(e, "address2")}
                ></input>
                <label>City</label>
                <input
                  type="text"
                  value={hireState?.city ? hireState.city : ""}
                  onChange={e => handleChange(e, "city")}
                ></input>
                <label>Postcode</label>
                <input
                  type="text"
                  value={hireState?.postcode ? hireState.postcode : ""}
                  onChange={e => handleChange(e, "postcode")}
                ></input>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </>
        ) : (
          <div>
            <h1>Order Confirmed</h1>
            <h2>{modalActive.title}</h2>
            {output}
          </div>
        )}
      </div>
      <div
        className={style.closeHelper}
        onClick={() => modalState(prev => !prev)}
      ></div>
    </div>
  )
}

export default Modal
