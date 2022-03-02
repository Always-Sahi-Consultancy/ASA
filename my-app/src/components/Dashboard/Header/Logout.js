import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    // const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            // dispatch({type: "USER", payload: false});
            localStorage.setItem('logUser', false);
            navigate('/');
            window.location.reload();
            if(res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <div>
        </div>
    );
};

export default Logout;