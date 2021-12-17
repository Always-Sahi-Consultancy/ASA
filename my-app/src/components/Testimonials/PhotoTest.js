import "./PhotoTest.css";
import desktop from '../../image/desktop.png';

function PhotoTest(props) {
  return (
    <div className="photoTest">
      <div className="main-container">
        <div><img src={desktop} className='main-container__image'></img></div>
        <div className="main-container__name">{props.imgs[0].name}</div>
        <div className="main-container__text">{props.imgs[0].text}</div>
      </div>
      <div className="main-container">
        <div><img src={desktop}  className="main-container__image"></img></div>
        <div className="main-container__name">{props.imgs[1].name}</div>
        <div className="main-container__text">{props.imgs[1].text}</div>
      </div>
      <div className="main-container">
        <div ><img src={desktop}className="main-container__image"></img></div>
        <div className="main-container__name">{props.imgs[2].name}</div>
        <div className="main-container__text">{props.imgs[2].text}</div>
      </div>
    </div>
  );
}

export default PhotoTest;
