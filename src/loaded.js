import React, { Component } from 'react';

export default class Loaded extends Component {
    render() {
        return (

            <div style={{ minHeight: '100vh' }} className="d-flex flex-row justify-content-center align-items-center">
                <img alt='loading gif' src='https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif'></img>
            </div>

        );
    }
}
