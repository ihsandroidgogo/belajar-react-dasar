import Todo from "./Todo";

export default function TodoList(){


    const data = [
        {
            id:0,
            teks : "Belajar HTML",
            sudahSelesai : true,
        },
          {
            id:1,
            teks : "Belajar CSS",
            sudahSelesai : true,
        },
          {
            id:2,
            teks : "Belajar Javascript",
            sudahSelesai : true,
        },
          {
            id:3,
            teks : "Belajar ReactJS",
            sudahSelesai : false,
        },

    ]

    return (
        <ul>
            {data.map((todo) => {
                return <Todo key={todo.id} {...todo}/>
            })}
        </ul>
    )
}