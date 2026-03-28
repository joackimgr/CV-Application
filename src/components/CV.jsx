import { useState } from 'react'
import PersonalInfo from './personalInfo'
import Education from './education'
import Experience from './experience'

function CV() {
    const [info, setInfo] = useState({name:"", email:"", phone:""})
    const [edu, setEdu] = useState({school:"", title:"", date:""})
    const [exp, setExp] = useState({company:"", position:"", responsibilities:"", dateFrom:"", dateTo:""})

    return (
        <>  
            <div className='left'>
                <PersonalInfo name = {info.name} email = {info.email} phone = {info.phone} onInfoChange = {setInfo}/>
                <Education school = {edu.school} title = {edu.title} date = {edu.date} onEduChange = {setEdu}/>
                <Experience company = {exp.company} position = {exp.position} responsibilities = {exp.responsibilities} dateFrom = {exp.dateFrom} dateTo = {exp.dateTo} onExpChange = {setExp}/>
            </div>
            <div className='right'>
                <div className='infoDisplay'>
                    <h1>{info.name}</h1>
                    <div className='contact'>
                        <p>Email: {info.email}</p>
                        <p>Phone: {info.phone}</p>
                    </div>
                </div>
                <div className="educationDisplay">
                    <h2>Education</h2>
                    <div className="school">
                        <h4>{edu.school}, {edu.title}</h4>
                        <p>{edu.date}</p>
                    </div>
                </div>
                <div className="experienceDisplay">
                    <h2>Experience</h2>
                    <div className="company">
                        <div className="companyLeft">
                            <h3>{exp.position}</h3>
                            <h4>{exp.company}</h4>
                            <p>{exp.responsibilities}</p>
                        </div>
                        <div className="companyRight">
                            <p>{exp.dateFrom} - {exp.dateTo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CV;