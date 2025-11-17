import React, { useReducer, useState } from "react";
import { createContext } from "react";
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
  @media (max-width: 600px) {
    width: 70%;
  }
`;
const intialState = {
  formdata: {
    id: "",
    email: "",
    phone: "",
    name: "",
    lastName: "",
  },
  contacts: [],
  alert: "",
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ALERT":
      return { ...state, alert: action.payload };
    case "SET":
      return {
        ...state,
        contacts: action.payload,
      };
    case "EMPTYINPUT":
      return {
        ...state,
        formdata: action.payload,
      };
    case "CHANGE":
      return {
        ...state,
        formdata: {
          ...state.formdata,
          ...action.payload,
        },
      };
  

    default:
      return state;
  }
};

export const DataContext = createContext();
function Inputs() {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { formdata, contacts, alert } = state;

  const loginHndler = () => {
    const { name, lastName, email, phone } = formdata;

    if (
      !formdata.name ||
      !formdata.lastName ||
      !formdata.email ||
      !formdata.phone
    ) {
      dispatch({ type: "ALERT", payload: "please write filds" });
      return;
    }
    dispatch({ type: "ALERT", payload: "" });

    const newcontact = { ...formdata, id: v4() };
    dispatch({
      type: "SET",
      payload: [...contacts, newcontact],
    });
    dispatch({
      type: "EMPTYINPUT",
      payload: {
        id: "",
        email: "",
        phone: "",
        name: "",
        lastName: "",
      },
    });
  };

  const changeHnandler = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "CHANGE", payload: { [name]: value } });
  };

  return (
    <>
      <Input
        type="email"
        placeholder="enter email"
        name="email"
        value={formdata.email}
        onChange={changeHnandler}
      />
      <Input
        type="text"
        placeholder="enter phone number"
        name="phone"
        value={formdata.phone}
        onChange={changeHnandler}
      />
      <Input
        type="text"
        placeholder="name"
        name="name"
        value={formdata.name}
        onChange={changeHnandler}
      />
      <Input
        type="text"
        placeholder="last name"
        name="lastName"
        value={formdata.lastName}
        onChange={changeHnandler}
      />
      <Button onClick={loginHndler}>click</Button>
      <div>
        <div></div>
      </div>

      <DataContext.Provider value={{ state, dispatch }}>
        <List />
      </DataContext.Provider>
    </>
  );
}

export default Inputs;
