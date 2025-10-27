import styled from "styled-components"
import Inputs from "./Inputs"

const Div = styled.div`
    width: 70%;
    height: 23vh;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #ffffff;
    margin: auto;
    margin-top: 150px;
    box-shadow: 5px 5px 20px 10px silver;
    
`


const Container = () => {

  return (
 <>
 <Div>
    <Inputs/>
    
 </Div>
 </>
  )
}

export default Container