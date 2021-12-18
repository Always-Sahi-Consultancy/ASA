import "./PhotoTest.css";
import desktop from '../../image/desktop.png';

function PhotoTest(props) {
  return (
    <div className="main">
      <div className="photoTest">
        <div className="main-container">
          <div><img src={desktop} className='main-container__image'></img></div>
          <div className="main-container__name">{props.name}</div>
          <div className="main-container__text">{props.text}</div>
        </div>
      </div>
    </div>
  );
}

export default PhotoTest;
