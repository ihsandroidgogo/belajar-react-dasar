export default function SayHelloForm() {

    function handleSayHello(e) {
        e.preventDefault();
        const nama = document.getElementById('input_nama').value;
        document.getElementById('output_nama').innerText = `Hello ${nama}`;
    }

    return (
        <div>
            <form style={{display: "flex", gap: "10px", marginTop: "20px"}}>
                <input id="input_nama"/>
                <button onClick={handleSayHello}>Buat Hello!</button>
            </form>
            <h1 id="output_nama">Hello World</h1>
        </div>
    )
}