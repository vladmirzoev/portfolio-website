import { ReactNode } from 'react';
import '../styles/main.scss';

interface StandardContainerProps {
    children: ReactNode;
}

const standardContainer = ({ children } : StandardContainerProps) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default standardContainer;