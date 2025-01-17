import pdfFile from '../../public/files/Vlad_Mirzoev_Resume.pdf';
import '../styles/downloadButton.scss'
import DOWNLOAD_ICON from '../assets/icons/download.svg';
import RESUME__ICON from '../assets/icons/resume.svg';

const DownloadButton = () => {
    return (
        <a href={pdfFile} download="Vlad_Mirzoev_Resume.pdf">
            <div className="download">
                <div className="download__icon">
                    <img src={RESUME__ICON} alt="document" />
                </div>

                <h3 className='download__heading'>CV/Resume</h3>
                <p className="download__description">Check out my resume and see whether we got a match. I am looking forward to working with you</p>
                <button className='download__button'>
                    <img src={DOWNLOAD_ICON} alt="download" />
                    Download
                </button>
            </div>
            
        </a>
    );
};

export default DownloadButton;