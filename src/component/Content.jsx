import React from "react";
import "../css/Content.css";


function Content({ imgSrc, text, title }) {
    return (
        <div className="card">
            <img className="img" src={imgSrc} alt={title} />
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
        </div>
    );
}

export default Content;