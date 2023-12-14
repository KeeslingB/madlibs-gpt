import Cookie from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

// Create the context itself
const AppContext = createContext({})

// Create a React hook that will allow other components to use the context 
export const useAppCtx = () => useContext(AppContext)

export default function AppProvider(props){

  const [ user, setUser ] = useState({})
  const allowedPaths = ["/", "/auth", "/create-page", "/viewstory", "/park-story", "/arcade-story", "/pizza-story", "/zoo-story"] 

  async function verifyUser(){
    const cookie = Cookie.get("auth-cookie")

    if( !allowedPaths.includes(window.location.pathname)){
      window.location.href = "/auth"
    }
    
    try {
      const query = await fetch("/api/user/verify")
      const response = await query.json()
      if( response.result === "success" ){
        setUser(response.payload)
      }
    } catch(err){
      if( !allowedPaths.includes(window.location.pathname)) {
        window.location.href = "/auth"
      }
    }
  }

  useEffect(() => {
    verifyUser()
  },[])


  return (
    <AppContext.Provider value={{ user, verifyUser }}>
      { props.children }
    </AppContext.Provider>
  )
}