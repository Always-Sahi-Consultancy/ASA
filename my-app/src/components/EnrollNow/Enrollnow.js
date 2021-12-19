import Container from './ContainerEnroll';
import './Enrollnow.css';
import Photo1 from '../../image/1.png'
import Photo2 from '../../image/2.png'
import Photo3 from '../../image/3.png'
import Photo4 from '../../image/4.png'
const Enrollnow = () => {

    const DummyContainersEnroll = [
        {
            id: "1",
            image: Photo1,
            name: "Navratnas of Time Management",
            price: "200",
        },
        {
            id: "2",
            image: Photo2,
            name: "How to find your passion & Niche",
            price: "600",
        },
        {
            id: "3",
            image: Photo3,
            name: "Creating Professioinal LinkedIn Profile",
            price: "5",
        },
        {
            id: "4",
            image: Photo4,
            name: "Compliance Toolkit of 18+",
            price: "50",
        },

    ];


    return (
        <div>
            <div className="containers">
                <ul className="container-list">
                    {DummyContainersEnroll.map((item) => (
                        <Container name={item.name} image={item.image} price={item.price} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Enrollnow;
