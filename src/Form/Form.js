import React, {useState} from "react";

export function SubscribeForm() {
    const [email, setEmail] = useState("");

    function updateEmail(event){
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const signupEmail = {
            email: email,
            firstName: "mike",
            lastName: "walker",
            username: "mike1"
        };
        fetch("https://localhost:5001/users/create", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(signupEmail), 
        })
        .then(response => response.json())
        .then(data => alert(`Thanks ${data.firstName} for signing up!`));
    };

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