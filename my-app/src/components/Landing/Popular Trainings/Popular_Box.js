import './Landing.css';

const Popular_Box = (props) => {
    return (
        <div className="Popular_Box">
            <img src={props.image} alt="courses" ></img>
        </div>
    )
};

export default Popular_Box;