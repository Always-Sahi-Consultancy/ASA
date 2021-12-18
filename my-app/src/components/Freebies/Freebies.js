import Container from './Container';
import './Freebies.css';
const Freebies = () => {

    const DummyContainers = [
        {
            id: "1",
            name: "Akhil",
        },
        {
            id: "2",
            name: "Sanket",
        },
        {
            id: "3",
            name: "Anjali",
        },
        {
            id: "4",
            name: "Atharv",
        },
        {
            id: "5",
            name: "Dhanashree",
        },

    ];


    return (
        <div>
            <ul className="Freebies_head">
                <li className="heading">Start your learning for Free with ASA</li>
            </ul>
            <div className="containers">
                <ul className="container-list">
                    {DummyContainers.map((item) => (
                        <Container name={item.name} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Freebies;
