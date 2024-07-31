import { createContext } from "react";
import { data_list } from "../assets/assets";
import { img } from "../assets/assets";
import { dev } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  
  const contextValue = {
      data_list,
      img,
      dev
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider;