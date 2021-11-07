import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';

const Search = () => {
  const [pickupLocation, setPickupLocation] = useState();
  const [dropoffLocation, setDropoffLocation] = useState();

  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href="/">
          <BackButton
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
          />
        </Link>
      </ButtonContainer>
      {/* Input Container */}
      <InputContainer>
        {/* Left icons */}
        <FromToIcons>
          <Circle 
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
          />
          <Line 
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
          />
          <Square 
            src="https://img.icons8.com/windows/50/000000/square-full.png" 
          />
        </FromToIcons>
        {/* Input boxes */}
        <InputBoxes>
          <Input 
            value={pickupLocation}
            placeholder="Enter pickup location"
            onChange={e => setPickupLocation(e.target.value)}
          />
          <Input 
            value={dropoffLocation}
            placeholder="Where to?"
            onChange={e => setDropoffLocation(e.target.value)}
          />
        </InputBoxes>
        {/* Add Button */}
        <PlusIcon 
          src="https://img.icons8.com/ios/50/000000/plus-math.png" 
        />
      </InputContainer>
      {/* Saved Places */}
      <SavedPlaces>
        <StarIcon 
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
        />
        Saved Places
      </SavedPlaces>
      {/* Confirm Places */}
      <Link href={{
        pathname: "/confirm",
        query: {
          pickup: pickupLocation,
          dropoff: dropoffLocation
        }
      }}>
        <ConfirmPlaces>
          Confirm Locations
        </ConfirmPlaces>
      </Link>
    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div`
  bg-gray-200
  h-screen
`

// px => padding x-axis (left & right)
const ButtonContainer = tw.div`
  bg-white
  px-4
`

const BackButton = tw.img`
  h-12
  cursor-pointer
`

const InputContainer = tw.div`
  flex
  bg-white
  items-center
  px-4
  mb-2
`

const FromToIcons = tw.div`
  w-10
  flex
  flex-col
  mr-2
  items-center
`

const Circle = tw.img`
  h-2.5
`

const Line = tw.img`
  h-10
`

const Square = tw.img`
  h-3
`

const InputBoxes = tw.div`
  flex
  flex-col
  flex-1
`

const Input = tw.input`
  h-10
  bg-gray-200
  my-2
  rounded-lg
  p-2
  outline-none
  border-none
`

const PlusIcon = tw.img`
  w-10
  h-10
  bg-gray-200
  rounded-full
  ml-3
`

const SavedPlaces = tw.div`
  flex
  items-center
  bg-white
  px-4
  py-2
`

const StarIcon = tw.img`
  bg-gray-400
  w-10
  h-10
  p-2
  rounded-full
  mr-2
`

const ConfirmPlaces = tw.div`
  text-white
  bg-black
  flex
  justify-center
  items-center
  text-xl
  p-4
  m-4
`