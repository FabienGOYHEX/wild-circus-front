import React, { Component } from 'react';
import Showss from './showss';
import Header from './header';
import Carte from './map'

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Header></Header>
                <Showss></Showss>
                <Carte></Carte>
            </>
        );
    }
}

export default Info;