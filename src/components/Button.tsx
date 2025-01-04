import React from "react";
import '../styles/main.scss';

const Button = ({ text = "", link, icon = '', style }) => {
    let buttonClass = "btn";
    if (style === "primary") {
        buttonClass += " btn-primary";
    } else {
        buttonClass += " btn-secondary"
    }
    if (icon !== '' && style === "primary") {
        buttonClass += " btn-primary__round"
    }

    // Handle scrolling to the block using the link (anchor)
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(link); // Find the section by link
        if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll
        }
    };


    return (
        <a href={link} className={buttonClass} onClick={handleClick}>
            {icon &&
                <span className="btn__icon">
                    <img src={icon} alt="" />
                </span>
            }
            {text &&
                <span className="btn__text">{text}</span>
            }
        </a>
    )
}

export default Button;