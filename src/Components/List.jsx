import styled from "styled-components";
import styles from "../Components/List.module.css"
import { useState } from "react";

const Div = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
  background-color: #8c9fc2;
  margin: auto;
  margin-top: 70px;
  border-radius: 15px;
  
  
`;

function List({contacts}) {
  console.log(contacts)
  
 
  return (
    <>
      <Div className={styles.container}>
        {contacts.length ?(  <ul className={styles.li}>{
          contacts.map((contact ) => (
            <li key={contact.id} >
              <p>{contact.name} {contact.lastName}</p>
              <p><span>📧</span> {contact.email}</p>
              <p><span>📲</span> {contact.phone}</p>
              <button>🗑️</button>
            </li>
          ))}
          </ul>) : <p>no contact yet</p> }
      
      </Div> 
   
 

 </>
 );
}
export default List;
