
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function InputField() {

    const [value, setValue] = useState("")
    let history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem('username', value);
        const result = localStorage.getItem('username' || '');
        console.log(result);
        history.push('/translation/');
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" placeholder="What's your name?" onChange={onChange} />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default InputField