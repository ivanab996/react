import { useState } from "react";

export function Counter(props) {
    const [count, setCount] = useState(props.initialValue);

    function handleClickAdd(){
        setCount(count + props.step);
        console.log(count);
    }

    function handleClickSubtract(){
        setCount(count - props.step);
        console.log(count);
    }

    return (
    <div>
        <button className="counter" onClick={handleClickAdd}>+</button>
        {count.toFixed(props.precision || 0)}
        <button className="counter" onClick={handleClickSubtract}>-</button>
    </div>
    );
    
    
    
}

