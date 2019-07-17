import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Carte.css';
import Checkbox from './CheckBox';
import IconAugust from './icon_components/IconAugust';
import IconJully from './icon_components/IconJully';
import Axios from 'axios';


class Carte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minZoom: 12,
            maxZoom: 25,
            lat: 43.4909,
            lng: -1.4748999999999342,
            zoom: 12,

            JulChecked: false,
            AugChecked: false,
            DataShows: []
        };
    }
    componentDidMount() {
        Axios
            .get("http://localhost:8000/shows/map")
            .then(response => {
                this.setState({
                    DataShows: response.data,
                });
            })
            .catch(err => console.log(err));
    }


    updateCheckedJul() {
        this.setState({ JulChecked: !this.state.JulChecked });
    }

    updateCheckedAug() {
        this.setState({ AugChecked: !this.state.AugChecked });
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png')
        });

        return (
            <div className='mt-3 d-flex flex-column align-items-center'>
                <h4 style={{ textAlign: 'center' }}>Shows Around You</h4>
                <Map center={position} zoom={this.state.zoom} className='mb-3 mt-2'>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        minZoom={this.state.minZoom}
                        maxZoom={this.state.maxZoom}
                    />

                    {this.state.JulChecked
                        ? [...this.state.DataShows.dataJully].map(July => (
                            <Marker
                                position={[
                                    parseFloat(July.Coordonnees.split(',')[1]),
                                    parseFloat(July.Coordonnees.split(',')[0])
                                ]}
                                icon={IconJully}
                            >
                                <Popup>
                                    <ul>
                                        <li>date : {July.Date}</li>
                                        <li>heure : {July.heure}</li>
                                        <li>lieu : {July.lieux}</li>
                                        <li>prix : {July.prix}</li>
                                        <li>nombre de places disponibles : {July.places}</li>
                                    </ul>
                                </Popup>
                            </Marker>
                        ))
                        : null}
                    {this.state.AugChecked
                        ? [...this.state.DataShows.dataAug].map(August => (
                            <Marker position={[August.Latitude, August.Longitude]} icon={IconAugust}>
                                <Popup>
                                    <ul>
                                        <li>date : {August.Date}</li>
                                        <li>heure : {August.heure}</li>
                                        <li>lieu : {August.lieux}</li>
                                        <li>prix : {August.prix}</li>
                                        <li>nombre de places disponibles : {August.places}</li>
                                    </ul>
                                </Popup>
                            </Marker>
                        ))
                        : null}
                </Map>
                <div className='d-flex  align-items-center'>
                    <div className='d-flex justify-content-around col-6 ' style={{ fontSize: '18px' }}>

                        <Checkbox
                            type='checkbox'
                            name='Shows In July'
                            onChange={this.updateCheckedJul.bind(this)}
                            defaultChecked={this.state.JulChecked}
                            style={{ color: 'green' }}
                        />
                    </div>
                    <div className='mb-3 d-flex justify-content-around col-6' style={{ fontSize: '18px' }}>
                        <Checkbox
                            type='checkbox'
                            name='Shows In August'
                            onChange={this.updateCheckedAug.bind(this)}
                            defaultChecked={this.state.AugChecked}
                            style={{ color: 'blue' }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carte;