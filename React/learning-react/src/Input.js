import { useState } from "react";
import React from "react";

export function Input(){
    const [ inputValue, setInputValue] = useState("");
return (
    <div>

        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
    </div>
    
)

}