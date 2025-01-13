import '../styles/variables.scss';
import '../styles/main.scss';
import '../styles/card.scss';
import Button from './Button';
import RightArrow from '../assets/icons/Arrow.svg';

type CardProps = {
    bgColor?: string;
    heading?: string;
    descriptionText?: string;
    button?: boolean;
    btnText?: string;
    bgImage?: string;
    photo?: string;
  };

const Card = ({
  bgColor = 'white', // Default to 'white'
  heading,
  descriptionText,
  button = false,
  btnText = '',
  photo = '',
  bgImage,
}: CardProps) => {

    const cardStyle = bgImage
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: bgColor }; // Use `bgColor` if no image is provided

    return (
        <>
            {photo === '' ?
                <div className={`card ${bgColor}`} style={cardStyle}>
                            
                    <div className="card-text">
                        {heading && 
                            <span className="card-text__title">{heading}</span>
                        }
                        {descriptionText &&
                            <p className="card-text__description">{descriptionText}</p>
                        }
                        
                    </div>
                    {button &&
                        <div className="card-buttons">
                            <Button
                                text={btnText}
                                link='/'
                                style='primary'
                            />
                            <Button
                                link='/'
                                style='primary'
                                icon={RightArrow}
                            />
                        </div>
                    }
                        
                </div>
            :
                <div className={`card ${bgColor} with-photo`} style={cardStyle}>
                    
                    <img className="card-photo" src={photo} alt="photo of me:)" />
                            
                    <div className="card-text">
                        {heading && 
                            <span className="card-text__title">{heading}</span>
                        }
                        {descriptionText &&
                            <p className="card-text__description">{descriptionText}</p>
                        }
                        
                    </div>
                    {button &&
                        <div className="card-buttons">
                            <Button
                                text={btnText}
                                link='/'
                                style='primary'
                            />
                            <Button
                                link='/'
                                style='primary'
                                icon={RightArrow}
                            />
                        </div>
                    }
                        
                </div>
            }
        </>
        
    );
};

export default Card