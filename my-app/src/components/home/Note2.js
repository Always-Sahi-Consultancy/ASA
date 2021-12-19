import AtharvSawant from '../../image/MeetOurFounder.jpg';
import Discription from './discription';
import Introduction from './Introduction';


const Note2 = () => {
    const introduction = ["Young 6 Figure Entrepreneur | ", "Guest Speaker at Reputed Colleges | ", "Certified Trainer & Leadership Coach"];
    const discription = ["Atharv always believes in doing things in a different way and works to bring a change in society. He is an Army Brat who has always been Patriotic towards the Nation.", 
        "Watching his father serve the country since his childhood, he always wanted to do the same, so he started preparing for several Exams since his Childhood. Which he was not able to achieve, due to some Medical Issues.",         
        "Despite that he never stopped doing good for the Nation and Started an NGO just after 12th, a Volunteering Platform to Motivate youth towards Volunteering named “Bondsocially Foundation”.",
        "Where there’s a package that is followed, to climb the ladder of corporate structure, Atharv believes in starting something new & Leading by an Example. He is someone who does not believe in Acquiring a Job, but creating more Opportunities for Young champs to Grow into future Leaders & great Entrepreneurs who can serve the Nation in their own Ways.",
        "With this Idea, he started “Always Sahi Academy” a Platform to Nurture Young Leaders to Start their Own Side Hustles & become Successful Earners."
    ];
    return (
        <div className="meet">
            <div className="meet__sections">    
            <div  className="meet__section">
                <div className="meet__title">Meet our Founder</div>
                <img src={AtharvSawant} alt="Atharv Sawant"  className="meet__image" />
            </div>
            <div className="meet__section meet__details"> 
                <div  className="meet__name">Atharv Sawant </div>
                <div className="meet__intro">
                    {introduction.map((intro) => 
                        <Introduction IntroInfo={intro}/>
                    )}
                </div>
                <div className="meet_des">
                    {discription.map((des) => 
                        <Discription discription={des}/>
                    )}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Note2;