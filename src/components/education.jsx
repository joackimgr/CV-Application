function Education(props) {

    return <>
            <h2>Education</h2>
            <label htmlFor="">School</label>
            <input type="text" value={props.school} onChange = {(e) => (props.onEduChange({...props, school : e.target.value}))}/>
            <label htmlFor="">Title</label>
            <input type="text" value={props.title} onChange = {(e) => (props.onEduChange({...props, title : e.target.value}))}/>
            <label htmlFor="">Date</label>
            <input type="date" value={props.date} onChange = {(e) => (props.onEduChange({...props, date : e.target.value}))}/>
        </>
}

export default Education