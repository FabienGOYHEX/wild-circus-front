import React, { Component } from 'react';
import Style from './ArtistElement.module.scss'

export default class ArtistElement extends Component {
	mouseEnter = () => {
		this.props.updateSelectedArtist(this.props.artist.Name);
	};
	render() {
		return (
			<div >
				<div onMouseEnter={this.mouseEnter} className={"bg-light d-flex flex-row " + Style.container}>
					<img className='w-50' alt="film" src={this.props.artist.img} />
					<div className=' flex-fill d-flex flex-column p-3'>
						<h5>{this.props.artist.Name} </h5>
						<hr className='w-100' />
						<p>{this.props.artist.Cath}</p>
					</div>
				</div>
			</div>
		);
	}
}
