import React, {useEffect, useRef} from "react";
import {useSelector} from 'react-redux';
import mapboxgl from "mapbox-gl";
import {mapboxToken} from "../../constants/Tokens";
import Header from '../Header';
import OrderPanel from "./OrderPanel";
import {drawRoute} from "./DrawRoute";

const Map = () => {
	const mapRef = useRef();
	mapboxgl.accessToken = mapboxToken;
	const route = useSelector(state => state.route.route);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapRef.current,
			style: "mapbox://styles/mapbox/light-v10",
			center: [30.2656504, 59.8029126],
			zoom: 15
		});

		map.on("load", () => {
			if (route.status) drawRoute(map, route.coordinates);
		});

	}, [route]);

	return (
		<>
			<Header/>
			<OrderPanel/>
			<div className="mapbox" ref={mapRef}/>
		</>);
};

export default Map;