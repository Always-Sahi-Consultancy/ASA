import Container from './Container';
import './Freebies.css';
import Photo1 from '../../image/1.png'
import Photo2 from '../../image/2.png'
import Photo3 from '../../image/3.png'
import Photo4 from '../../image/4.png'
const Freebies = () => {

    const DummyContainers = [
        {
            id: "1",
            image: Photo1,
            name: "Navratnas of Time Management",
        },
        {
            id: "2",
            image: Photo2,
            name: "How to find your passion & Niche",
        },
        {
            id: "3",
            image: Photo3,
            name: "Creating Professioinal LinkedIn Profile",
        },
        {
            id: "4",
            image: Photo4,
            name: "Compliance Toolkit of 18+",
        },

    ];


    return (
        <div>
            <div className="containers">
                <ul className="container-list">
                    {DummyContainers.map((item) => (
                        <Container name={item.name} image={item.image} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Freebies;
