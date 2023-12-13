import { useState, useEffect } from "react"
import Auth from "../components/Auth"

<<<<<<< HEAD

export default function AuthPage(){

=======


export default function AuthPage(){


>>>>>>> master
  return (
    <div className="d-flex gap-5">

      <div>
        <Auth usage="signup" />
      </div>

      <div>
        <Auth usage="login" />
      </div>
    </div>
  )
}