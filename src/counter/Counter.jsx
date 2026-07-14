import { useState } from "react";

export default function Counter({nama}) {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter {nama}: {count}</h1>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}