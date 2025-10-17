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


  const emailHnandler = (event) =>{
   setEmail(event.target.value)
    
  }
  return (
    <>
      <Input placeholder="enter email" onChange={emailHnandler}/>
      <Input placeholder="enter phone number" />
      <Input placeholder="name" />
      <Input placeholder="last name" />
    </>
  );
};

export default Inputs;
