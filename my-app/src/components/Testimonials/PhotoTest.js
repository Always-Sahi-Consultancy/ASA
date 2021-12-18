import "./PhotoTest.css";
import desktop from '../../image/desktop.png';
import Button from "./Button";

function PhotoTest(props) {
  return (
    <div>
      <div className="main">
      <div className="photoTest">
        <div className="main-container">
          <div className="container">
            <img src={desktop} className='main-container__image'></img>
            <div className="main-container__name">{props.name}</div>
          </div>
          <div className="overlay">
            <div className="main-container__text">{props.text}</div>
            <div className="main-container__rating">{props.rating}⭐️</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default PhotoTest;
