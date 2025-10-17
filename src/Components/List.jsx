import styled from "styled-components";
import styles from "../Components/List.module.css"

const Div = styled.div`
  width: 70%;
  height: 300px;
  border: 1px solid red;
  background-color: cornflowerblue;
  margin: auto;
  margin-top: 70px;
  border-radius: 15px;
`;
function List() {
  return (
    <>
      <Div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>name</th>
              <th>family</th>
              <th>phone number</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </Div>
    </>
  );
}

export default List;
