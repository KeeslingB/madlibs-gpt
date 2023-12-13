import '../../assets/css/style.css';
import { useState, useEffect } from "react";

export default function useAnimate(config){
  const [ triggerAnimate, setTriggerAnimate ] = useState(false)

  
  function play(){
    setTriggerAnimate(true)
  }

  useEffect(() => {
    if( triggerAnimate ) {
      config.play()
      setTriggerAnimate(false)
    }
  }, [triggerAnimate]);

  return {
    play
  }
}