import React, { Component } from 'react';
import ArtistElement from '../artistElements/ArtistElement';

export default class ArtistList extends Component {
    render() {
        return (
            <div className='w-75 d-flex flex-row flex-wrap align-content-start'>
                {this.props.artists.map((a, index) => (
                    <ArtistElement key={a.Name + index}
                        artist={a}
                        updateSelectedArtist={() => { this.props.updateSelectedArtist(index) }} />
                ))}
            </div>
        );
    }
}
