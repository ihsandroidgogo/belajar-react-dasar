import Row from "./Row"

export default function Table(){
    return (
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Teks</th>
                </tr>
            </thead>
            <tbody>
                <Row id="1" teks="Satu" />
                <Row id="2" teks="Dua" />
                <Row id="3" teks="Tiga" />
            </tbody>
        </table>
    )
}