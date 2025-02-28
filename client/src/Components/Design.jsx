import React from 'react'

const Design = () => {

    let h1Style =  {
        color: "red",
        padding: "10px",
        margin: "10px"
    }
  return (
    <h1 style={h1Style}>helloooo</h1>
  )
}

export default Design

/*There are 4 ways to use css in React
1. Global css
2. Inline css
3. Module css
4. Styled Framework css

example: Bootstrap, tailwind, materialUI

1. Global css :
where the styling gets applied to complete project using index.css

2. Inline:
applying to a component using inline tag with a object of css

let style = {
backgroundColor: "red",
}


3. Module css:
Navbar.jsx 
Navcar.module.css


*/

