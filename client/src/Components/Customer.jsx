import React from 'react'

const Customer = ({name, email, phone}) => {
  return (
    <>
    <h1>Name: {name} </h1>
    <p>Email: {email}</p>
    <p>Phone: {phone} </p>
    <br />
    <hr />
    </>
  )
}

export default Customer