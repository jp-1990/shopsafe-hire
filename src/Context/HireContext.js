import React, { useContext, useState } from "react"

export const HireContext = React.createContext()
export const useHire = () => {
  return useContext(HireContext)
}

export const HireProvider = ({ children }) => {
  const [hireState, setHireState] = useState({ quantity: 0 })
  const value = {
    hireState: hireState,
    setHireState: setHireState,
  }
  return <HireContext.Provider value={value}>{children}</HireContext.Provider>
}
