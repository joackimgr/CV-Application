function Experience(props) {

    return <div className="experience">
            <h2>Experience</h2>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" value={props.company} onChange = {(e) => (props.onExpChange({...props, company : e.target.value}))}/>
            <label htmlFor="position">Position</label>
            <input type="text" id="position" value={props.position} onChange = {(e) => (props.onExpChange({...props, position: e.target.value}))}/>
            <label htmlFor="responsibilities">Responsibilities</label>
            <textarea name="responsibilities" id="responsibilities" value={props.responsibilities} onChange={(e) => (props.onExpChange({...props, responsibilities : e.target.value}))}></textarea>
            <label htmlFor="dateFrom">From:</label>
            <input type="Date" id="dateFrom" value={props.dateFrom} onChange={(e) => (props.onExpChange({...props, dateFrom : e.target.value}))}/>
            <label htmlFor="dateTo">To:</label>
            <input type="Date" id="dateTo" value={props.dateTo} onChange={(e) => (props.onExpChange({...props, dateTo: e.target.value}))}/>
        </div>
}

export default Experience