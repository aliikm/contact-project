import styled from "styled-components";
import styles from "../Components/List.module.css"


const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border: 1px solid #d2d3d6;
  background-color: #d2d3d6;
  margin: auto;
  margin-top: 120px;
  border-radius: 0px 0px 20px 20px;
  
`;
const Img = styled.img`
  width: 16px;
  height: 16px;
  margin: auto;
  
`

function List() {
  const deletHandler = (id)=> {

  }
  return (
    <>
      <Div className={styles.container}>
        {/* {contacts.length ?(  <ul className={styles.li}>{
          contacts.map((contact ) => (
            <li key={contact.id} >
              <p><span><Img src="../../rename_6077150.png"/></span>{contact.name} {contact.lastName}</p>
              <p><span><Img src="../../sign_5825936.png"/> :</span> {contact.email}</p>
              <p><span><Img src="../../phone_4639549.png"/></span> {contact.phone}</p>
              <button onClick={deletHandler}><Img src="../../delete_11540608.png"/></button>
            </li>
          ))}
          </ul>) : <p>no contact yet</p> }
       */}
      </Div> 
   
 

 </>
 );
}
export default List;
