export default function Todo({teks, sudahSelesai, sudahDihapus = false }) {
    if (sudahDihapus) {
        return null;
    }
    else {
        return (
            <li>
                {sudahSelesai ? <del>{teks}</del> : teks}
            </li>
        )
    }
}