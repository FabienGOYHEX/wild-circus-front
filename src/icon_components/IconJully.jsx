import L from 'leaflet';

const myCustomColour = '#008000';

const markerHtmlStyles = `
background-color: ${myCustomColour};
width: 1.5rem;
height: 1.5rem;
display: block;
left: -1.5rem;
top: -1.5rem;
position: relative;
border-radius: 3rem 3rem 0;
transform: rotate(45deg);
border: 1px solid #FFFFFF`;

const iconDistri = L.divIcon({
	className: 'my-custom-pin',
	iconAnchor: [0, 24],
	labelAnchor: [-6, 0],
	popupAnchor: [0, -36],
	html: `<span style="${markerHtmlStyles}" />`
});

export default iconDistri;
