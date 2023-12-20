import anime from 'animejs/lib/anime.es.js';
import '../../assets/css/style.css';
import React, { useEffect, useState } from "react";



export default function Animejs(props) {

  const [ triggerAnimate, setTriggerAnimate ] = useState(false)
  
  const animateProgress = anime({
    targets: 'progress',
    value: 100,
    easing: 'linear',
    autoplay: false
  });

  useEffect(() => {
    if( triggerAnimate ) {
      console.log(triggerAnimate)
      animateProgress.play()
      setTriggerAnimate(false)
    }
  
  }, [triggerAnimate]);

  function animate(){

    animateProgress.play();
    // console.log('here');
  }
  return (
    <main>
      <div id="anime-demo">
    <progress value="0" max="100">
             <div  className="Progress-bar" role="presentation">
         </div>  
     </progress> 
 </div>
<div className="controls">
  <button  onClick={() => setTriggerAnimate(true)} className="play-progress mt-2 text" >Submit</button>  
 </div>
</main>
)}



