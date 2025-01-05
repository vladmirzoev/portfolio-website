import '../styles/main.scss'
import ArrowRight from '../assets/icons/Arrow.svg'

const ArrowButton = () => {
    return (
        
        <a href='#' className="btn btn-primary btn-primary__round">
            <span className="btn__icon">
                <img src={ArrowRight} alt="Go" />
            </span>
        </a>
        
    );
}

export default ArrowButton;