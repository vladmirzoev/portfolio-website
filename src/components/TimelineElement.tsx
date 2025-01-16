import StandardContainer from './StandardContainer';
import '../styles/timeline.scss';
interface TimelineElementProps {
    institution: string,
    yearStart: number,
    yearFinish?: number,
    program: string,
    duration?: string
}
const Timeline = ( {yearStart = 2003, yearFinish = 2025, institution = "university", program= "program", duration = ""} : TimelineElementProps) => {
    return (
        <div className="education-wrapper__row">
            <StandardContainer>
                <div className="container-wrapper__row">
                    <div className="container-wrapper__row--period">
                        <span className="container-wrapper__row--period_years">{yearStart} - {yearFinish}</span>
                        <span className="container-wrapper__row--period_total">{duration}</span>
                    </div>
                    <div className="container-wrapper__row--institution">
                        <h3 className="container-wrapper__row--institution_name">{institution}</h3>
                        <span className="container-wrapper__row--institution_program">{program}</span>
                    </div>
                </div>
                
            </StandardContainer>
        </div>  
    )
}

export default Timeline;