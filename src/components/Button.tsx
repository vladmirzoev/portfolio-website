// import React from "react";
import '../styles/main.scss';

interface ButtonProps {
    isLink?: boolean,
    text?: string,
    link?: string,
    icon?: JSX.Element,
    style: string
}

const Button = ({ isLink = true, text = "", link, icon, style } : ButtonProps) => {
    let buttonClass = "btn";
    if (style === "primary") {
        buttonClass += " btn-primary";
    } else {
        buttonClass += " btn-secondary"
    }
    if (icon !== undefined && style === "primary") {
        buttonClass += " btn-primary__round"
    }

    // Handle scrolling to the block using the link (anchor)
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const target = document.querySelector(link); // Find the section by link
    //     if (target) {
    //     target.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll
    //     }
    // };


    return (
        <>
        {isLink &&
            <a href={link} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                {icon &&
                    <span className="btn__icon">
                        {icon}
                    </span>
                }
                {text &&
                    <span className="btn__text">{text}</span>
                }
            </a>
        }
        {!isLink && 
            <div className={`${buttonClass} skill`}>
                {text &&
                    <span className="btn__text-caps">{text}</span>
                }
            </div>
        }
        </>
    )
}

export default Button;