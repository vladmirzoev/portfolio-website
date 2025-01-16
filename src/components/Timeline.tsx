import StandardContainer from './StandardContainer';
import '../styles/timeline.scss';
import TimelineElement from './TimelineElement';

const Timeline = () => {
    return (
        <>
            <section>
                <StandardContainer>
                    <h1>Education</h1>
                </StandardContainer>
                <div className="education-table">
                    <TimelineElement
                        institution='University of Twente'
                        yearStart={2022}
                        yearFinish={2025}
                        program='BSc | Business IT'
                        duration='2 years 6 months'
                    />
                    <TimelineElement
                        institution='Twente Pathway'
                        yearStart={2021}
                        yearFinish={2022}
                        program="Pre-bachelor's | Engineering"
                        duration='1 year'
                    />
                    <TimelineElement
                        institution='IT Academy Step'
                        yearStart={2020}
                        yearFinish={2021}
                        program='Course | WEB development'
                        duration='1 year'
                    />
                    
                </div>
                   
                   
               </section>
               
        </>
    )
}

export default Timeline;