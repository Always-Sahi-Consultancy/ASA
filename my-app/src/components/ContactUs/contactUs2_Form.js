import { useEffect, useState } from "react";

const ContactUsForm = () =>{

    const [userData, setuserData] = useState({});

    const userContact = async () => {
        try {
            const res = await fetch("/contact", { 
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            // console.log(data);
            setuserData(data);
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userContact();
    }, []);

    return(
    <div className="contactUsform-container">
        <div className="contactUsform__heading">Enquire</div>
        <div className="row_flex">
            <input type="text" required placeholder='Name' value={userData.userFirstName + " " + userData.userLastName} className="contactUsform__name"></input>
            <input type ="email" required placeholder='Email' value={userData.userEmail} className="contactUsform__email"></input>
        </div>
        <textarea placeholder='Message' className="contactUsform__message" rows="5"></textarea>
        <div className="rowButton">
        <button type='submit' className='contactUsform__button'>Message</button>
        </div>
    </div>
    );
}

export default ContactUsForm;