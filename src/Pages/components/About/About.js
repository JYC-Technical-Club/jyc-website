import React from 'react';
import './About.css';
import { useEffect } from 'react';
function About() {
    useEffect(() => {
        window.scrollTo(0, 500)
      }, [])
    return(
        <div className='about-section' id='about-hp'>
        <div className='about-us-heading'>
            About Us
            <div className='about-heading-underline'></div>
        </div>
        <div className='about-us-content'>
            <div className='about-jyc-data'>JUIT Youth Club (JYC) is the name of enthusiasm, development, consistency and effort. It is the body which
                widens student's view from academics to various fields such as sports, literary, cultural and technical and provides opportunity to explore
                them. It encourages in student's expression, celebration, recognition and integration. It helps students acquire qualities like team work,
                sportsmanship and leadership. Not only this, it retreats students from academics load by organizing events, fests and other extra-curricular
                activities. Focusing on technical, literary, sports, and cultural scopes these competitive activities, apart from serving as a relief from
                intense academic load, present an opportunity to instill confidence, encourage teamwork and give students a strong sense of achievement and
                belonging.
            </div>
            <div className='about-member'>
                <div className='about-become-member'>How a student becomes a member?</div>
                <ul className='become-member-items'>
                    <li className='become-member-item'>For holistic development of students, they can join 2 clubs and 1 committee.</li>
                    <li className='become-member-item'>Interested students are required to fill a form on the basis of which a brief interview is conducted.</li>
                    <li className='become-member-item'>Students exclusively in the 1st and 2nd year of their academic programmes can be general body members.</li>
                    <li className='become-member-item'>Students of third and fourth year work as coordinators and mentors respectively for successful completion of events.</li>
                    <li className='become-member-item'>Since JYC is a student's body, therefore, it runs primarily with the small contribution of Rs 900/- per annum with the students. However, sometimes, depending on the requirements, JUIT may also support it.</li>
                </ul>
            </div>         
        </div>
        <div className='about-stats'>
            <div className='about-stat'><span className='about-stat-data'>400+</span><br/>Members</div>
            <div className='about-stat'><span className='about-stat-data'>10+</span><br/>Events</div>
            <div className='about-stat'><span className='about-stat-data'>6</span><br/>Clubs</div>
            <div className='about-stat'><span className='about-stat-data'>6</span><br/>Committees</div>
        </div>
    </div>
    )}

export default About;