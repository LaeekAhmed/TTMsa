import React, { useState } from 'react';

function StudentForm(props) {
    const rank=0,wins=0,loses=0;
    const [name, setName] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    };

    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            rank,
            name,
            wins,
            loses
        };
        
        props.func(val);
        clearState();
    };

    const clearState = () => {
        setName('');
    };

    return (
        <div>
        <input className="form-control w-50" type="text" value={name} onChange={changeName} />
        <button className='btn btn-primary m-2' onClick={transferValue}> Add Player + </button>
        </div>
    );
}

export default StudentForm;
