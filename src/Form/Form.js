import React, {useState} from "react";

export function SubscribeForm() {
    const [email, setEmail] = useState("");

    function updateEmail(event){
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        alert("Thanks for signing up.");
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email: 
                <input type="email" value={email} onChange={updateEmail}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
};