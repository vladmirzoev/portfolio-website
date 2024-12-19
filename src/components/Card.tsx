import '../styles/variables.scss';
import '../styles/card.scss';
import Button from './Button';
import RightArrow from '../assets/icons/Arrow.svg';

type CardProps = {
    bgColor?: string;
    heading?: string;
    descriptionText?: string;
    button?: boolean;
    btnText?: string;
  };

const Card = ({
  bgColor = 'white', // Default to 'white'
  heading,
  descriptionText,
  button = false,
  btnText = '',
  image = null
}: CardProps) => (
    <div className={`card ${bgColor}`}>
            <div className="card-text">
                {heading && 
                    <h3 className="card-text__title">{heading}</h3>
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
)

export default Card