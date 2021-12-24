import "./PhotoTest.css";
import desktop from '../../image/desktop.png';
import Button from "./Button";

function PhotoTest(props) {
  return (
    <div className="upper-container">
      <div className="container">
        <div className="card">
          <div className="main-container">
            <img src={desktop} className='main-container__image'></img>
            <div className="main-container__name">{props.name}</div>
            <div className="main-container__rating">{props.rating}⭐️</div>
          </div>
          <div className="content">
            <div className="content__text">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default PhotoTest;
