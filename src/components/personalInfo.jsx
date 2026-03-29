function PersonalInfo(props) {

    return <div className="info">
            <h2>Personal Information</h2>
            <label htmlFor="">Name</label>
            <input type="text" value = {props.name} onChange = {(e) => (props.onInfoChange({...props, name : e.target.value}))}/>
            <label htmlFor="">Email</label>
            <input type="text" email = {props.email} onChange = {(e) => (props.onInfoChange({...props, email: e.target.value}))}/>
            <label htmlFor="">Phone</label>
            <input type="tel" value= {props.phone} onChange = {(e) => (props.onInfoChange({...props, phone: e.target.value}))}/>
            <div className="buttons">
                <button type="submit">Submit</button>
                <button>Edit</button>
            </div>
        </div>
}

export default PersonalInfo