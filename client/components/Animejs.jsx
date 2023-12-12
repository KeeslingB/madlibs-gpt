import anime from 'animejs/lib/anime.es.js';
import '../../assets/css/style.css';


export default function Animejs() {

  return (
    <main>
      <div id="anime-demo">
    <progress value="0" max="100">
             <div  className="Progress-bar" role="presentation">
             {/* <span className="Progress-value" style="width: 80%;">&nbsp;</span>  */}
         </div>  
     </progress> 
 </div>
<div className="controls">
  <button className="play-progress" onClick={animateProgress.play()}>Submit</button>  
 </div>
{/* <div className="button ">
<div className="text" onClick={basicTimeline.play()}>Submit</div>
</div>
<div className="progress-bar mt-2 text"></div>
<svg 
x="0px" y="0px"
viewBox="0 0 25 30" 
style={{enableBackground:'new 0 0 25 30'}}
>
<path className="st0" id="check" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/> 
</svg>  */}
</main>
)}

var animateProgress = anime({
  targets: 'progress',
  value: 100,
  easing: 'linear',
  autoplay: false
});


// ('.play-progress').onclick(function () {
//   animateProgress.play();
// })




// document.querySelector('#play-progress').onclick = animateProgress.restart;

var basicTimeline = anime.timeline({
  autoplay: false
});

basicTimeline
  .add({
    targets: ".text",
    duration: 1,
    opacity: "0"
  })
  .add({
    targets: ".button",
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".progress-bar",
    duration: 2000,
    width: 300,
    easing: "linear"
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1
  })
  .add({
    targets: ".progress-bar",
    width: 80,
    height: 80,
    delay: 500,
    duration: 750,
    borderRadius: 80,
    backgroundColor: "#71DFBE"
  })
  .add({
    targets: pathEl,
    // strokeDashoffset: [, 0],
    duration: 200,
    easing: "easeInOutSine"
  });

  
  console.log(basicTimeline)
  
  var pathEls = "#check";
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    // var offset = anime.setDashoffset(pathEl);
    // pathEl.setAttribute("#check", );
  }


  // $(".button").click(function() {
  //   basicTimeline.play();
  // });
  
  // $(".text").click(function() {
  //   basicTimeline.play();
  // });
  



