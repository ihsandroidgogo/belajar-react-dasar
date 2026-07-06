export default function TombolAlert({teks,pesan}){
    function handleClick(e){
        console.info(e.target)
        alert(pesan)
    }

    return  (
        <button onClick={handleClick} style={{margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px'}}>
            {teks}
        </button>
    )
}