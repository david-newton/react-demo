import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let name = 'David';

        return (
            <h1>Hello {name}</h1>
        )
    }
}

export default Application;