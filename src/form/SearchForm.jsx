export default function SearchForm() {
    return(
        <form style={{display: "flex", gap: "10px", marginTop: "20px"}}>
            <input type="text" placeholder="Mengirim.." />
            <button onClick={(e) => {
                e.preventDefault();
                alert("Mengirim..");
            }}>Cari</button>
        </form>
    )
}