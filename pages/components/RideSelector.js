import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState();
  const url = "https://api.mapbox.com";

  // get ride duration from mapbox api
  // needed => pickup and dropoff coordinate
  // [0] [1] represent Lng and Lat
  useEffect(() => {
    fetch(`${url}/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiamNvc3Q0ciIsImEiOiJja3Zva296eXMyNXFxMnZtdGpyMjlqODd4In0.4npMSDggGtgeuVA-ZaQinA`)
      .then(res => res.json())
      .then(data => {
        if (data.code === 'Ok') {
          setRideDuration(data.routes[0].duration / 100)
        }
      })
  }, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, key) => {
          return (
            <Car key={key}>
              <CarImage src={car.imgUrl} />
              <CarDetail>
                <Service>{car.service}</Service>
                <Time>5 mins away</Time>
              </CarDetail>
              <CarPrice>${Math.round(car.multiplier * rideDuration *100) / 100}</CarPrice>
            </Car>
          )
        })

        }
      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
  flex-1
  overflow-y-scroll
`

const Title = tw.div`
  text-center
  text-gray-500
  text-xs
  py-2
  border-b
`

const CarList = tw.div`
  overflow-y-scroll
`

const Car = tw.div`
  flex
  items-center
  p-4
`

const CarImage = tw.img`
  h-14
  mr-4
`

const CarDetail = tw.div`
  flex-1
`

const Service = tw.div`
  font-medium
`

const Time = tw.div`
  text-xs
  text-blue-500
`

const CarPrice = tw.div`
  text-sm
`