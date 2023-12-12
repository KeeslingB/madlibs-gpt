import '../../assets/css/style.css';
import { useState, useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

export default function useAnimate(config){
  const [ triggerAnimate, setTriggerAnimate ] = useState(false)

  
  function play(){
    setTriggerAnimate(true)
    console.log("play")
  }

  useEffect(() => {
    if( triggerAnimate ) {
      console.log("triggerAnimate")
      config.play()
      setTriggerAnimate(false)
    }
  }, [triggerAnimate]);

  return {
    play
  }
}