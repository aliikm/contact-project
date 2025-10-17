import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
  height: 25px;
  margin-left: 80px;
  margin-top: 30px;
  border: 0.5px solid;
  border-radius: 6px;
`;
const Inputs = () => {
const loginHndler = () => {
console.log(email , number , name , lastname)
}
const[email ,setEmail] =useState("");
const[number , setNumber] = useState("");
const[name , setName] = useState("");
const[lastname , setLastname] = useState("");


  const emailHnandler = (event) =>{
   setEmail(event.target.value)
  }
  const numberHndler = (event) => {
    setNumber(event.target.value)
  }
  const nameHndler = (event) => {
setName(event.target.value)
  }
  const lastnameHandler = (event )=>{
    setLastname(event.target.value)
  }
  return (
    <>
      <Input type="email" placeholder="enter email" onChange={emailHnandler}/>
      <Input type="text" placeholder="enter phone number" onChange={numberHndler}/>
      <Input type="text" placeholder="name" onChange={nameHndler}/>
      <Input type="text" placeholder="last name" onChange={lastnameHandler}/>
      <button onClick={loginHndler}>click</button>
    </>
  );
};

export default Inputs;
