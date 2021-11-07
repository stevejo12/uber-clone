import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

const Map = ({ pickupCoordinates = [] , dropoffCoordinates = [] }) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamNvc3Q0ciIsImEiOiJja3Zva296eXMyNXFxMnZtdGpyMjlqODd4In0.4npMSDggGtgeuVA-ZaQinA';

  // initialize map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [115.261154, -8.510403],
      zoom: 15,
    });

    if (pickupCoordinates.length) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates.length) {
      addToMap(map, dropoffCoordinates);
    }

    if (dropoffCoordinates.length && pickupCoordinates.length) {
      map.fitBounds([
        dropoffCoordinates,
        pickupCoordinates
      ], {
        padding: 60 // add spacing on the map so the marker not on the edge.
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  }

  return (
    <Wrapper id="map">
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex-1
  h-1/2
`

export default Map;
