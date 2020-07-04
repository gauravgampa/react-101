import React from 'react'

function UserOutput({name, handleClick}) {
    return (
        <div>
            <p onClick={handleClick}>Username: {name}</p>
            <p>Testing react</p>
        </div>
    )
}

export default UserOutput
