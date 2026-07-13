import { useState } from "react";

export default function TaskForm({setItems}) {
    const [item,setItem] = useState('');

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setItems((draft) => {
            draft.push(item);
        })
        setItem('');
    }

    return (
        <>
            <h1>Task Form</h1>
            <form>
                <input
                    value={item}
                    onChange={handleChange}
                    placeholder="Enter a new task"
                />
                <button onClick={handleClick}>Add Task</button>
            </form>
        </>
    )
}