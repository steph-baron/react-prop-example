//gives user a personalized greeting
import React from 'react'

const Hello = (props) => {
  return (
    <h1>Hello {props.fname} {props.lname}!</h1>
  )
}

export default Hello;
