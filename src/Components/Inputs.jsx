import React, { useState } from "react";
import styled from "styled-components";
import List from "./List";
import { v4 } from "uuid";

const Input = styled.input`
  width: 400px;
  height: 25px;
  margin-left: 80px;
  margin-top: 30px;
  border: 0.5px solid;
  border-radius: 6px;
`;
const Button = styled.button`
  width: 890px;
  height: 30px;
  background-color: #4752f2;
  border: solid 1px #4752f2;
  border-radius: 5px;
  margin-left: 80px;
  margin-top: 20px;
  color: white;
   @media (max-width : 600px){
    width: 70%;
   };
    
`;
function Inputs() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    phone: "",
    name: "",
    lastName: "",
  });
  const [alert, setAlert] = useState("");

  const loginHndler = () => {
    if (!formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone) {
      setAlert("empty");
      return;
    }
    setAlert("");
    const newContact = { ...formData, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setFormData({ email: "", phone: "", name: "", lastName: "" });
  };

  const changeHnandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };


  return (
    <>
      <Input
        type="email"
        placeholder="enter email"
        name="email"
        value={formData.email}
        onChange={changeHnandler} />
      <Input
        type="text"
        placeholder="enter phone number"
        name="phone"
        value={formData.phone}
        onChange={changeHnandler} />
      <Input
        type="text"
        placeholder="name"
        name="name"
        value={formData.name}
        onChange={changeHnandler} />
      <Input
        type="text"
        placeholder="last name"
        name="lastName"
        value={formData.lastName}
        onChange={changeHnandler} />
      <Button onClick={loginHndler}>click</Button>
      <div>
        <div>{alert && <p>{alert}</p>}</div>
        
      </div>
    
        <List contacts={contacts} value={setFormData} setContacts={setContacts}/>
      
    </>
  );
}

export default Inputs;
