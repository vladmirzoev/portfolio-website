import React from "react";
import '../styles/main.scss';


interface DoubleHeadingProps {
    firstText: string;
    secondText: string;
}

const DoubleHeading = ( { firstText, secondText } : DoubleHeadingProps ) => {
    const containerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column", 
        margin: "30px 0",
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
        <h1 style={firstHeadingStyle}>{firstText}</h1>
        <h1 style={secondHeadingStyle}>{secondText}</h1>
        </div>
    );
};

export default DoubleHeading;
