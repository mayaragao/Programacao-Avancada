import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { RightContainer} from './styles';
import LoginImage from '../../assets/images/login_image.svg'


const LoginPage = () => {
    return(
    <Container>
        <Row>
          <Col></Col>
          <Col><RightContainer>        
            <img src={LoginImage} alt="Imagem de Login" id="loginImage" />
          </RightContainer></Col>
        </Row>       
    </Container>)
 
};

export default LoginPage;
