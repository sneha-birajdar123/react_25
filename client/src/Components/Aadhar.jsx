import React from 'react'

const Aadhar = ({aadharNo, name, age, email}) => {
  return (
    <>
    <h1>My name is {name} and my age is {age}</h1>
    {age>18 ? <h1>You can vote</h1> : <h1>You can't vote</h1>}
    </>

  )
}

export default Aadhar


