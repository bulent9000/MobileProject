import React,{useState} from 'react'
import ForgotPasswordComponent from './ForgotPasswordComponent'

export default function ForgotPasswordContainer() {
  const [email,setEmail]=useState<string>("");
  return (
  <ForgotPasswordComponent email={email} setEmail={setEmail}/>
  )
}