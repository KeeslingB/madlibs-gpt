import { useState, useEffect } from "react"
import Auth from "../components/Auth"
import { Blob } from "../components"



export default function AuthPage() {


  return (
    <div className="d-flex gap-5">

      <div className="signup">
        <Auth usage="signup" />
      </div>

      <div className="login">
        <Auth usage="login" />
      </div>
      <Blob></Blob>
    </div>
  )
}