import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { onAuthStateChanged, signInWithPopup } from '@firebase/auth'
import tw from "tailwind-styled-components"
import { auth, provider } from '../firebase';


const Login = () => {
  const router = useRouter()
  
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        router.push('/')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Logo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title>Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton 
        onClick={() => signInWithPopup(auth, provider)}
      >
        Sign In with Google
      </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
  bg-gray-200
  p-4
`

const Logo = tw.img`
  h-20
  w-auto
  object-contain
  self-start
`

const Title = tw.div`
  text-5xl
  pt-4
  text-gray-500
`
const HeadImage = tw.img`
  object-contain
  w-full
`

const SignInButton = tw.button`
  bg-black
  text-white
  text-center
  py-4
  mt-8
  self-center
  w-full
`
