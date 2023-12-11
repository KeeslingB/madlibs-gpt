import anime from 'animejs/lib/anime.es.js';





export default function Animejs() {


  return (

    <main>
      <div className="button">
        <div className="text">Submit</div>
      </div>
      <div className="progress-bar mt-2 text"></div>
      <svg x="0px"
        y="0px"
        viewBox="0 0 25 30"
        //  style="enable-background:new 0 0 25 30;"
         >
        <path className="st0 check" 
          d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"
           />
      </svg>
    </main>
  )
}

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
    backgroundColor: "#2B2D2F", // need to change to V styles
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
    backgroundColor: "#71DFBE"  // need to change also
  })
  .add({
    targets: '.button',  
    strokeDashoffset: ['.check', 0],
    duration: 200,
    easing: "easeInOutSine"
  });

 
  // var pathEls = ".check";
  // for (var i = 0; i < pathEls.length; i++) {
  //   var pathEl = pathEls[i];
  //   var offset = anime.setDashoffset(pathEl);
  //   pathEl.setAttribute("stroke-dashoffset", offset);
  // }



  // (".text").click(function() {
  //   basicTimeline.play();
  // });
  
  
  // (".button").click(function() {
  //   basicTimeline.play();
  // });

  // console.log(basicTimeline);




