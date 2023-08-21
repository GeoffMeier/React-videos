import React, {useState} from "react";

export function Counter(){
    // const [ state, setState ] = useState(defaultValue)
    const [ count, setCount ] = useState(0);

    return(
        <div>
            <h3>{count}</h3>
            <button
            onClick={() => setCount(count + 1)}
            >+</button>
        </div>
    )
}