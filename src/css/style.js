import styled from "styled-components"; 
 
export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;
  padding: 0px 80px 0px 80px;

  div {
    height: 320px;
    width: 230px;
    border: 1px solid rgb(194,193,193);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 60px 30px 60px 30px;

    button {
      font-size: 25px;
      background: transparent;
      border: none;
      color: crimson;
    }
  }
`;