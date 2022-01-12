import React from 'react';
import './Subheader.css';

const College = () => {
    const College_Image = [
        {
            Name: "Modern College"
        },
        {
            Name: "Aissms Coe"
        },
        {
            Name: "Mit Alandi"
        },
        {
            Name: "Usdc"
        },
        {
            Name: "The Light House"
        }
    ];
    return (
        <div className="College">
            <h2 className="College_heading">Training at: </h2>
            <div className="College_Training">
                {College_Image.map((col) => {
                    return (
                        <h2 className="College_Name">{col.Name}</h2>
                    )
                })}
            </div>
        </div>
    )
};

export default College;