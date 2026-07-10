import { useState } from "react";

const initialData = {
    nama: "",
    pesan: ""
}

export default function ContactForm() {
    
    const [contact, setContact] = useState(initialData);

    function handleNameChange(e) {
        setContact({
            ...contact,
            nama: e.target.value
        });
    }

    function handleMessageChange(e) {
        setContact({
            ...contact,
            pesan: e.target.value
        });
    }
    
    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Nama" value={contact.nama} onChange={handleNameChange} style={{ marginBottom: "10px" }} />
                <br />
                <input type="text" placeholder="Pesan" value={contact.pesan} onChange={handleMessageChange} style={{ marginBottom: "10px" }} />
            </form>
            <h1>Contact Details</h1>
            <p>Nama: {contact.nama}</p>
            <p>Pesan: {contact.pesan}</p>
        </div>
    )
}