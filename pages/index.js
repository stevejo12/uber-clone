import tw from "tailwind-styled-components"
import Map from './components/Map';
import Link from 'next/link';

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Jeco Star</Name>
            <UserImage 
              src="https://lh3.googleusercontent.com/ogw/ADea4I7YjN_0Jc4LDNBKsYw_TG1CtjtRT9-cK1FTew6C=s32-c-mo"   
            />
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage 
                src="https://i.ibb.co/cyvcpfF/uberx.png"
                />  
                Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage 
              src="https://i.ibb.co/n776JLm/bike.png"
            />  
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage 
              src="https://i.ibb.co/5RjchBg/uberschedule.png"
            />  
            Reserve
          </ActionButton>
        </ActionButtons>
        {/* InputButton */}
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`

const ActionItems = tw.div`
  flex-1
  p-4
`

const Header = tw.div`
  flex
  justify-between
  items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex
  items-center
`

const Name = tw.div`
  mr-4
  w-20
  text-sm
`

const UserImage = tw.img`
  h-12
  w-12
  rounded-full
  border
  border-gray-200
  p-px
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex
  flex-col
  bg-gray-200
  flex-1
  m-2
  h-32
  items-center
  justify-center
  rounded-lg
  transform
  hover:scale-105
  transition
  cursor-pointer
`

const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  flex
  items-center
  h-20
  bg-gray-200
  text-2xl
  p-4
  mt-8
`