import React, {useState, useEffect} from 'react';

class MyComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Mike",
        }
    }

    componentWillMount() {
        fetch("https://my-api/get-data")
            .then(response => response.json())
            .then(jsonResponse => this.setState({name: jsonResponse}));
    }

    render() {
        return <div>Hello {this.state.name}</div>
    }
}


function MyComponent(props) {
    const [name, setName] = useState(["Mike"]);

    useEffect(() => {
        fetch("https://my-api/get-data")
            .then(response => response.json())
            .then(jsonResponse => setName(jsonResponse));
    }, [])

    
    return <div>Hello {name}</div>
}