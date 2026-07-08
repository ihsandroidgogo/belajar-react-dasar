import {useState} from 'react';

export default function Counter() {
    let [counterNya, setCounterNya] = useState(0);

    function handleClick() {
        setCounterNya(counterNya + 1)
        console.log(counterNya)
    }

    return (
        <div>
            <p>You clicked {counterNya} times</p>
            <button onClick={handleClick()} style={
                {
                    backgroundColor:'red',
                    padding: '20px 20px',
                    margin: '20px 20px',
                }
                }>Click me </button>
        </div>
    );
}
