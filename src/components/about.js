import React from 'react';
import ReactPlayer from 'react-player'

function AboutEvent () {
    return(
        <div className="about" id="about">
            <div className="about__event">
                <h1><span className="summer">SUMMER</span>   <span className="fest">FESTIVAL</span></h1>
                <p>Summer Festival is the largest music and arts festival in <span>HØJE-TAASTRUP</span>. 
                All age groups people are welcome to this event, and an exciting matter is free entry for unlimited time. 
                A great opportunity to taste the multi cuisine food(it's not free). 
                The volunteers provide camping security, build stages, staff the festival stalls etc. </p>
            </div>
            <div className="about__video">
                <ReactPlayer url='https://www.youtube.com/watch?v=1-UieP5WY_M' />
            </div>
        </div>
    )
}

export default AboutEvent;