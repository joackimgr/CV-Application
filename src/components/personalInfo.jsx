function PersonalInfo(props) {

    return <>
            <h2>Personal Information</h2>
            <label htmlFor="">Name</label>
            <input type="text" value = {props.name} onChange = {(e) => (props.onInfoChange({...props, name : e.target.value}))}/>
            <label htmlFor="">Email</label>
            <input type="text" value = {props.email} onChange = {(e) => (props.onInfoChange({...props, email: e.target.value}))}/>
            <label htmlFor="">Phone</label>
            <input type="text" value= {props.phone} onChange = {(e) => (props.onInfoChange({...props, phone: e.target.value}))}/>
        </>
}

export default PersonalInfo