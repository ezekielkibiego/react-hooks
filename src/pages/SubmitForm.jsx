import { useState } from "react";

function SubmitForm() {
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault(); // Prevents page reload
        console.log("Form Submitted:", email);
        alert(`Submitted Email: ${email}`);
    }

    return (
        <form onSubmit={handleSubmit} className='h-screen'>
            <label>
                Email:
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubmitForm;