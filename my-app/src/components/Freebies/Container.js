import Img from '../../image/desktop.png';
import './Container.css';
const Container = (props) => {
    return (
        <div class="Container">
            <img src={props.image} className="Container_img"></img>
            <h4 className="Container_name">{props.name}</h4>
        </div>
    )
};

export default Container;