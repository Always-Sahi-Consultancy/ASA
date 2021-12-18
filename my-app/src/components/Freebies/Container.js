import Img from '../../image/desktop.png';
import './Container.css';
const Container = (props) => {
    return (
        <div class="Container">
            <img src={Img} className="Container_img"></img>
            <h2 className="Container_name">{props.name}</h2>
        </div>
    )
};

export default Container;