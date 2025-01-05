import React from "react";
import Button from "./Button";
import '../styles/socialLinks.scss';

interface Link {
    platform?: string; // Platform name
    url?: string; // URL
    icon?: JSX.Element; // Optional icon
  }
  
interface SocialLinksProps {
    links: Link[]; // Array of link objects
};

const SocialLinks = ( { links } : SocialLinksProps ) => {
    return (
        <div className="links-container">
            {links.map((link) => (
                <Button
                    key={link.platform}
                    text={link.platform}
                    style="secondary"
                    link={link.url}
                    icon={link.icon}
                />
                    
            ))}
        </div>     
    );
};

export default SocialLinks;