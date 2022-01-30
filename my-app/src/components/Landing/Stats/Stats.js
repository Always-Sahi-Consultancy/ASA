import "./stats.css";
import { useRef,useState } from "react";
import { initialState } from "../../../reducer/UseReducer";

const Stats = () => {
    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function () {
          var context = this, args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };
      const [count,setCount]=useState(0);
    function Number() {
        const achievement = document.getElementById("Stats");
        const SlideInAt = (window.scrollY + window.innerHeight) - achievement.offsetHeight ;
        // const imageBottom = achievement.offsetTop + achievement.offsetHeight;
        const isHalfShown = SlideInAt > achievement.offsetTop;
        const isNotScrolledPast = window.scrollY + window.innerHeight < (achievement.offsetTop + achievement.offsetHeight);
        const reference = useRef(0);
        
        if (isHalfShown && isNotScrolledPast) {
          function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (time) => {
              if (!startTimestamp) {
                startTimestamp = time;
              }
              console.log('sanket');
              const progress = Math.min((time - startTimestamp) / duration, 1);
              obj.innerHTML = Math.floor(progress * (end - start) + start);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
              else {
                  if(reference.current){return;}
                  reference.current = setCount(Math.floor(progress * (end - start) + start) + "+");
                  console.log("penguin");
                // reference.current = Math.floor(progress * (end - start) + start) + "+";
                // obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
              }
            };
      
            window.requestAnimationFrame(step);
          }
      
          const obj1 = document.getElementById("stat-box1");
          const obj2 = document.getElementById("stat-box2");
          const obj3 = document.getElementById("stat-box3");
          animateValue(obj1, 0, 7, 2000);
          animateValue(obj2, 0, 400, 2000);
          animateValue(obj3, 0, 4.5, 1500);
        }
      }
      
      window.addEventListener("scroll", debounce(Number));
    return(
        <div className="Stats" id="Stats">
            <div className="Stats__Container" >
                <h1 id="stat-box1">{count}</h1>
                <p>Institutes Covered</p>
            </div>
            <div className="Stats__Container">
                <h1 id="stat-box2">{count}</h1>
                <p>Students Trained</p>
            </div>
            <div className="Stats__Container">
                <h1 id="stat-box3">{count}</h1>
                <p>Average Rating</p>
            </div>
        </div>
    );
}

export default Stats;