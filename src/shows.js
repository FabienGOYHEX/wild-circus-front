import React from 'react';
import Axios from 'axios';


export default class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: []
        };
    }
    // get shows data from api
    componentDidMount() {
        Axios.get('http://localhost:8000/shows')
            .then(response => {
                this.setState({ shows: response.data });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <>
                {this.state.shows.map((show, i) => {
                    return (
                        <tr class="table-active" key={i}>
                            <td>{show.Date}</td>
                            <td>{show.lieux}</td>
                            <td>{show.heure}</td>
                            <td>{show.prix}</td>
                        </tr>
                    );
                })}
            </>
        );
    }
}
