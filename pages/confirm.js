import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link';
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'

const Confirm = () => {
  const router = useRouter();
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places";
  const { pickup, dropoff } = router.query;
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
  const [ride, setRide] = useState('UberX');

  const getCoordinates = (placeName, type) => {
    fetch(`${url}/${placeName}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiamNvc3Q0ciIsImEiOiJja3Zva296eXMyNXFxMnZtdGpyMjlqODd4In0.4npMSDggGtgeuVA-ZaQinA",
        limit: 1
      })
    )
      .then(response => response.json())
      .then(data => {
        if (type === 'up') setPickupCoordinates(data.features[0].center);
        if (type === 'off') setDropoffCoordinates(data.features[0].center);
      })
  }

  useEffect(() => {
    getCoordinates(pickup, 'up');
    getCoordinates(dropoff, 'off');
  }, [])

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
          />
        </Link>
      </ButtonContainer>
      <Map 
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        {/* Choose Ride Text */}
        {/* Ride Choices */}
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        {/* Confirm Button */}
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm {ride}
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`

// px => padding x-axis (left & right)
const ButtonContainer = tw.div`
  bg-white
  absolute
  z-10
  top-5
  left-5
  rounded-full
`

const BackButton = tw.img`
  h-10
  cursor-pointer
`

const RideContainer = tw.div`
  flex
  flex-col
  flex-1
  h-1/2
`

const ConfirmButtonContainer = tw.div`
  border-t-2
`

const ConfirmButton = tw.div`
  bg-black
  text-white
  m-4
  py-4
  text-center
  text-xl
`
