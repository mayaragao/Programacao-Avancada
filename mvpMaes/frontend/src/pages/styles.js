import styled from "styled-components";

export const Container = styled.div`
  width: 98.9vw; 


`;

export const RightContainer = styled.div`
  background-color: #90ab9b;
  width: 44%;
  height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center;


  #image {
    width: 35vw;
    background-color: #90ab9b;
  }
`;

export const LeftContainer = styled.div`
  width: 80%;
  padding-top: 20%;
  padding-left: 10vw;
 
`;

export const Title = styled.h1`
  color: #7b7872;
  font-weight: 600;
  font-size: 2vw;
  padding-bottom: 1vw;
  padding-left: 3px;
`;

export const Button = styled.button`
  color: white;
  background-color: #90ab9b;
  width: 100%;
  height: 40px;
  border: #90ab9b;
  border-radius: 5px;
  margin-top: 0.5vw;
`;

export const InlineButton = styled.h5`
  padding-top: 1vw;
  font-size: 1vw;
  text-align: center;
  color: #7b7872;
  text-decoration: underline;
  cursor: pointer;  
  }
`;
