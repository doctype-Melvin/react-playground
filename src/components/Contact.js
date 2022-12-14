import React from "react";

export default function Contact(props){
    console.log(props.img)
    return (
        <div className="contact-card">
        <img className="image" src={props.img}/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <p> {props.phone} </p>
        </div>
        <div className="info-group">
            <p> {props.email} </p>
        </div>
    </div>
    )
}