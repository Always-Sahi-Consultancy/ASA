import { useEffect, useState } from "react";

const FooterForm = () => {

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
            if (!res.status === 200) {
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

    return (
        <div className="form-container">
            <div className="form__heading">ENQUIRE</div>
            <div className="row_flex">
                <input type="text" required placeholder='Name' value={userData.userFirstName + " " + userData.userLastName} className="footer__name"></input>
                <input type="email" placeholder='Email' required value={userData.userEmail} className="form__email"></input>
            </div>
            <textarea placeholder='Message' className="form__message" rows="5"></textarea>
            <div className="row">
                <button type='submit' className='form__button'>Message</button>
            </div>
        </div>
    );
}

export default FooterForm;