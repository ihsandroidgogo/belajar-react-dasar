import {useState} from 'react';

export default function Counter() {
    let [counterNya, setCounterNya] = useState(0);

    console.info(`Render Counter ${counterNya}`)

    function handleClick() {
        setCounterNya(counterNya + 1)
        console.log(counterNya)
    }

    return (
        <div>
            <p>You clicked {counterNya} times</p>
            <button onClick={handleClick} style={{backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", outline: "none", border: "none", cursor: "pointer" }}
                >Click me </button>
        </div>
    );
}
