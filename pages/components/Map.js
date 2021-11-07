import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

const Map = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamNvc3Q0ciIsImEiOiJja3Zva296eXMyNXFxMnZtdGpyMjlqODd4In0.4npMSDggGtgeuVA-ZaQinA';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [115.261154, -8.510403],
      zoom: 9,
    });
  });

  return (
    <Wrapper id="map">
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex-1
`

export default Map;
