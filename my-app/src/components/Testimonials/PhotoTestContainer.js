import { useState } from 'react';
import PhotoTest from './PhotoTest';
import './PhotoTestContainer.css';

function PhotoTestContainer(){
    const images=[
        {
            id:'p1',
            name:'Sejal Palkar',
            text:"Hey it's Sejal I have done the Accounts and Finance and I'm happy to say that it was very useful in my day to day job as I'm working at a CA firm. I really liked the regularity in everyday lectures conducted and also the excess knowledge is given by the tutor outside the course syllabus.",
            rating:'4.5/5',
        },
        {
            id:'p2',
            name:'Bharat Kamble',
            text:"I understand what you have taught me.The notes you provide to us are very useful.You do not need to make any changes in the course. You teach perfectly.What I have learned is very useful in the CA firm internship you have given.",
            rating:'5/5',
        },
        {
            id:'p3',
            name:'Prashant',
            text:"The information I got was helpful for me… a way of teaching is good....N ur notes are also goodyour course will help me for getting jobs n internships",
            rating:'4.5/5',
        
        }

    ]
    const [imgs, setImg]=useState(images);
    return(
        <div className='photo-test'>
            {images.map((item) => (
                        <PhotoTest name={item.name}
                                   text={item.text}
                                   rating={item.rating}
                        />
                    ))}
            
        </div>
    );
}

export default PhotoTestContainer;