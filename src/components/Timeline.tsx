import StandardContainer from './StandardContainer';

const Timeline = () => {
    return (
        <>
            <section>
                <StandardContainer>
                    <h1>Education</h1>
                </StandardContainer>
                   <div className="education-wrapper__row">
                        <StandardContainer>
                            <div className="container-wrapper__row">
                                <div className="container-wrapper__row--period">
                                    <span className="container-wrapper__row--period_years">2022 -</span>
                                    <span className="container-wrapper__row--period_total">2 years 6 months</span>
                                </div>
                                <div className="container-wrapper__row--institution">
                                    <h3 className="container-wrapper__row--institution_name">University of Twente</h3>
                                    <span className="container-wrapper__row--institution_program">Business Information Technology</span>
                                </div>
                            </div>
                            
                        </StandardContainer>
                   </div>
                   
               </section>
               
        </>
    )
}

export default Timeline;