import React from 'react';


export default function MemberForm(props) {
    const { value, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target;
        update (name, value);
    }
    const onSubmit =evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <label> Username
                <input 
                    name='username'
                    type= 'text'
                    placeholder= 'Type in your username dewd'
                    maxLength='30'
                    value={value.username}
                    onChange={onChange}
                    />
            </label>
            <label> Email
                <input 
                    name='email'
                    type= 'email'
                    placeholder= 'Type in your email dewd'
                    value={value.email}
                    onChange={onChange}
                    />
            </label>
            <label> Role
                <select value={value.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a role --</option>
                    <option value='New/Emerging'>New/Emerging Developer</option>
                    <option value='Junior'>Junior Developer</option>
                    <option value='Senior'>Senior Developer</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}