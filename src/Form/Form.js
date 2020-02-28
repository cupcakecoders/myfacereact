import React, {useState} from "react";

export function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");

    // function createNewUser(event){
    //     setEmail(event.target.value);
    //}

    function handleSubmit(event) {
        event.preventDefault();
        const signupEmail = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            username: username
        };
        fetch("https://localhost:5001/users/create", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(signupEmail), 
        })
        .then(response => response.json())
        .then(data => alert(`Thanks ${data.firstName} for signing up!`))
        //.then(() => setEmail(''));
        .then(resetForm);
    };


    function resetForm(){
        setFirstName('');
        setLastName('');
        setUsername('');
        setEmail('');
    }

    return (
        <form className="inline-form" onSubmit={handleSubmit}>
            <label>
                Email: 
                <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
            </label>
            <label>
                First Name: 
                <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)}/>
            </label>
            <label>
                Last Name: 
                <input type="text" value={lastName} onChange={event => setLastName(event.target.value)}/>
            </label>
            <label>
                Username: 
                <input type="text" value={username} onChange={event => setUsername(event.target.value)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
};