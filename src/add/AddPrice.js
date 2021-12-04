import React, {useState} from "react";

function AddPrice({onCreate}){
    const [value, setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        if (value.trim()){
            onCreate(value)
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit">Додати ціну</button>
        </form>
    )
}

export default AddPrice