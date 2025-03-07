import { useState, useEffect } from "react";
import '../styles/custom-cursor.scss';

interface CustomCursorProps {
    active: boolean,
    text: string,
}
const CustomCursor = ({ active, text } : CustomCursorProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", updateCursor);
        return () => document.removeEventListener("mousemove", updateCursor);
    }, []);

    return (
        <div
            className={`custom-cursor ${active ? "active" : ""}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        >
            <div className="cursor-circle"></div>
            {active && <div className="cursor-text">{text}</div>}
        </div>
    );
};

export default CustomCursor;
