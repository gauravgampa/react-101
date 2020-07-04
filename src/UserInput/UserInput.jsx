import React from 'react'

function UserInput({handleChange, name}) {
    return (
        <input onChange={handleChange} value={name}/>
    )
}

export default UserInput;
