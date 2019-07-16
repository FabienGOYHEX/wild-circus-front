import React, { Component } from 'react';

export default class ArtistDetails extends Component {
    render() {
        return (
            <div className='w-25 bg-light p-4 d-flex flex-column'>
                <h5>{this.props.artist.Name}</h5>
                <hr className='w-100' />
                <div >
                    <img className='mx-auto d-block w-100 ' alt='Artist poster' src={this.props.artist.img} />
                </div>
                <hr className='w-100' />
                <span className='text-secondary'>{this.props.artist.Cath}</span>
                <hr className='w-100' />
                <span>{this.props.artist.description}</span>
            </div>
        );
    }
}