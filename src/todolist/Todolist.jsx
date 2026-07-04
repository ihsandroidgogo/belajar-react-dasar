import Todo from "./Todo";

export default function TodoList(){
    return (
        <ul>
            <Todo sudahSelesai={true} teks="Belajar HTML" sudahDihapus={true}/>
            <Todo sudahSelesai={true} teks="Belajar CSS"/>
            <Todo sudahSelesai={true} teks="Belajar Javascript"/>
            <Todo sudahSelesai={false} teks="Belajar ReactJS"/>
        </ul>
    )
}