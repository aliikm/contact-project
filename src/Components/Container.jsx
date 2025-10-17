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
const Button = styled.button`
  width: 890px;
  height: 30px;
  background-color: #4752f2;
  border: solid 1px #4752f2;
  border-radius: 5px;
  margin-left: 80px;
  margin-top: 20px;
  color: white;
`

const Container = () => {
  
  return (
 <>
 <Div>
    <Inputs/>
    <Button>AddContact</Button>
 </Div>
 </>
  )
}

export default Container