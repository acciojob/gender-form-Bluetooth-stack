import React, { useState } from "react";


const Form = () => {
    let [g, setG] = useState("");
    function gender(e) {
        if (e.target.checked) {
            setG(e.target.value);
        }
    }

    return (
        <div>
            <h2>Select your gender:</h2>
            <input type="radio" value={"male"} onClick={gender} name="gender"></input><label>Male</label>
            <input type="radio" value={"female"} onClick={gender} name="gender"></input><label>Female</label>
            {
                g === "male" ?
                    <div>
                        <h2>Select your shirt size:</h2>
                        <select>
                            <option>Select size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>:g==="female"?
                    <div>
                    <h2>Select your dress size:</h2>
                    <select>
                        <option>Select size</option>
                        <option>2</option>
                        <option>4</option>
                        <option>6</option>
                    </select>
                </div>:<span></span>

            }
        </div>
    )
}

export default Form;