import pdfFile from '../../public/files/Vlad_Mirzoev_Resume.pdf';
import '../styles/downloadButton.scss'

const DownloadButton = () => {
    return (
        <a href={pdfFile} download="Vlad_Mirzoev_Resume.pdf">
            <button className='resume'>Download my Resume</button>
        </a>
    );
};

export default DownloadButton;