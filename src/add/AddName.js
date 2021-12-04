import React, {useState} from "react";

function AddName({onCreate}){
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
            <button type="submit">Додати товар</button>
        </form>
    )
}

export default AddName