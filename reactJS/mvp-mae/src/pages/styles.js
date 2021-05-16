import styled from "styled-components";

export const RightContainer = styled.div`
  background-color: #90ab9b;
  width: 45vw;;
  height: 100vh;
  margin-right: -8.2vw;
  display: flex;
  justify-content: center;

  #image {
    width: 35vw;
    background-color: #90ab9b;
  }
`;

export const LeftContainer = styled.div`
  width: 30vw;
  padding-top: 23%;
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
  width: 30vw;
  height: 40px;
  border: #90ab9b;
  border-radius: 5px;
`;

export const InlineButton = styled.h5`
  padding-top: 1vw;
  font-size: 1.1vw;
  text-align: center;
  color: #7b7872;
  text-decoration: underline;
  cursor: pointer;  
  }
`;
