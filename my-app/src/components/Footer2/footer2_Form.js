import { useEffect, useState } from "react";

const FooterForm = () =>{

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
    <div className="form-container">
        <div className="form__heading">ENQUIRE</div>
        <div className="row_flex">
            <input type="text" placeholder='Name' value={userData.userFirstName + " " + userData.userLastName} className="footer__name"></input>
            <input type="number" placeholder='Phone Number' type="number" className="form__phone"></input>
        </div>
        <input type ="email" placeholder='Email' value={userData.userEmail} className="form__email"></input>
        <textarea placeholder='Message' className="form__message" rows="5"></textarea>
        <div className="row">
        <button type='submit' className='form__button'>Message</button>
        </div>
    </div>
    );
}

export default FooterForm;