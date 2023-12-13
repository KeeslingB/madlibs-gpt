import { useEffect, useState } from "react"
import { useAppCtx } from "../utils/AppProvider"
import anime from 'animejs/lib/anime.es.js';
import useAnimate from "./useAnimate";

export default function Auth({ usage = "login"}) {

<<<<<<< HEAD
export default function Auth({ usage = "signup" }) {
=======
  const animateProgress = anime({
    targets: `#${usage}-progress`,
    value: 100,
    easing: 'linear',
    autoplay: false
  });
>>>>>>> master

  const appCtx = useAppCtx()
  const { play, ProgressBar } = useAnimate(animateProgress)

  const [userData, setUserData] = useState({ email: "", password: "" })

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

<<<<<<< HEAD
  async function handleFormSubmit(e) {
    e.preventDefault()
=======
  async function submitForm(){
>>>>>>> master
    const apiPath = (usage === "signup") ? "/" : "/auth"
    const finalPath = `/api/user${apiPath}`

    try {
      const query = await fetch(finalPath, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const response = await query.json()
<<<<<<< HEAD
      console.log(response)
=======
      // console.log(response)
>>>>>>> master
      if (response.result === "success") {
        window.location.href = "/"
      }
    } catch (err) {
<<<<<<< HEAD
      console.log(err.message)
=======
      // console.log(err.message)
>>>>>>> master
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    play();
    setTimeout(() => submitForm(), 1000)
  }

  useEffect(() => {
    setUserData({ ...userData, email: appCtx.user.email || "" })
  }, [appCtx])


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h2>{usage === "signup" ? "Signup" : "Login"}</h2>
          <div>
            <div>
              <label className="d-block">Email Address</label>
              <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">Password</label>
              <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            </div>
          </div>
          <progress id={`${usage}-progress`} value="0" max="100">
            <div  className="Progress-bar" role="presentation">
            </div>  
          </progress>

          <div className="button"> 
             <button  className="mt-2 text">Submit Info</button> 
          </div>
        </div> 
      </form>
    </div>
  )
}


