import React from 'react';
import Axios from 'axios';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        };
    }
    // get artists data from api
    componentDidMount() {
        Axios.get('http://localhost:8080/home')
            .then(response => {
                this.setState({ artists: response.data });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <>
                {this.state.artists.map((artist, i) => {
                    return (
                        <tr key={i}>
                            <td>{artist.Name}</td>
                            <td>{artist.Cath}</td>
                            <td>{artist.img}</td>
                            <td>{artist.description}</td>
                        </tr>
                    );
                })}
            </>
        );
    }
}