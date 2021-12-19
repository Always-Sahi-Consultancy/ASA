
import './ContainerEnroll.css';
const Container = (props) => {
    return (
        <div class="Container">
            <img src={props.image} className="Container_img"></img>
            <h4 className="Container_name">{props.name}</h4>
            <div className="price">Rs. {props.price}</div>
        </div>
    )
};

export default Container;