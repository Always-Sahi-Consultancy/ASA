import defaultProps from 'react-slick/lib/default-props';
import './Highlight.css';
import Greentick from '../../../image/greenTick.png';

const Highlights = (props) => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 100;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

    const data = props.highlights;

    const HighlightContent = (props) => {
        return(
            <div className='Highlights__content'>
                
                <h4><img src={Greentick}></img>{props.content}</h4>
            </div>
        );
    }
    
    return (
        <div className='Highlights__container reveal'>
            <div className='Highlights__title'>Course Highlights:</div>
            {data.map((item) => <HighlightContent content={item} />)}
        </div>
    )
};

export default Highlights;