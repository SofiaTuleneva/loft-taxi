import React, {useEffect, useRef} from "react";
import mapboxgl from "mapbox-gl";
import {mapboxToken} from "../../constants/tokens";

const Map = () => {
	const mapRef = useRef();
	mapboxgl.accessToken = mapboxToken;

	useEffect(() => {
		new mapboxgl.Map({
			container: mapRef.current,
			style: "mapbox://styles/mapbox/light-v10",
			center: [30.2656504, 59.8029126],
			zoom: 15
		});
	}, []);

	return <div className="mapbox" ref={mapRef}/>;
};

export default Map;