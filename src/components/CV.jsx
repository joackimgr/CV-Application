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
            <PersonalInfo name = {info.name} email = {info.email} phone = {info.phone} onInfoChange = {setInfo}/>
            <Education school = {edu.school} title = {edu.title} date = {edu.date} onEduChange = {setEdu}/>
            <Experience company = {exp.company} position = {exp.position} responsibilities = {exp.responsibilities} dateFrom = {exp.dateFrom} dateTo = {exp.dateTo} onExpChange = {setExp}/>
        </>
    );
}

export default CV;