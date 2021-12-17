import { useState } from 'react';
import PhotoTest from './PhotoTest';
import './PhotoTestContainer.css';

function PhotoTestContainer(){
    const images=[
        {
            id:'p1',
            name:'Sejal Palkar',
            text:"Hey it's Sejal I have done the Accounts and Finance and I'm happy to say that it was very useful in my day to day job as I'm working at a CA firm. I really liked the regularity in everyday lectures conducted and also the excess knowledge is given by the tutor outside the course syllabus So overall I would like to give it 4.5 stars😊",
        },
        {
            id:'p2',
            name:'Sejal Palkar',
            text:"Hey it's Sejal I have done the Accounts and Finance and I'm happy to say that it was very useful in my day to day job as I'm working at a CA firm. I really liked the regularity in everyday lectures conducted and also the excess knowledge is given by the tutor outside the course syllabus So overall I would like to give it 4.5 stars😊",
        
        },
        {
            id:'p3',
            name:'Sejal Palkar',
            text:"Hey it's Sejal I have done the Accounts and Finance and I'm happy to say that it was very useful in my day to day job as I'm working at a CA firm. I really liked the regularity in everyday lectures conducted and also the excess knowledge is given by the tutor outside the course syllabus So overall I would like to give it 4.5 stars😊",
        
        }

    ]
    const [imgs, setImg]=useState(images);
    return(
        <div className='photo-test'>
            <PhotoTest imgs={imgs}/>
        </div>
    );
}

export default PhotoTestContainer;