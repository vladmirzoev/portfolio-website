import React from "react";
import '../styles/main.scss';
import InfoGreen from "./InfoGreen";


interface DoubleHeadingProps {
    firstText: string;
    secondText: string;
    isInfo?: boolean;
}

const DoubleHeading = ( { firstText, secondText, isInfo } : DoubleHeadingProps ) => {
    const containerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column", 
        margin: "3rem 0",
        maxWidth: "700px"
    };

    const firstHeadingStyle: React.CSSProperties = {
        margin: "0",
    };

    const secondHeadingStyle: React.CSSProperties = {
        margin: "0",
        textAlign: "end", 
    };

    return (
        <div style={containerStyle}>
            <h1 style={firstHeadingStyle}>{firstText}
                
            </h1>
            <h1 style={secondHeadingStyle}>{secondText}</h1>
            {isInfo &&
                <InfoGreen />
            }
        </div>
    );
};

export default DoubleHeading;
