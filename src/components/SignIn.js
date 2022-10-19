import React from 'react';
import styled from 'styled-components';
import cover from '../assets/cover.png';
import GoogleIcon from '@mui/icons-material/Google';
const SignIn = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    <LoginContainer>
                        <Heading>Welcome back to <TitleName>TravelGo</TitleName></Heading>
                        <EmailInput placeholder='Enter your email'/>
                        <PasswordInput placeholder='Enter your password'/>
                        <LoginButton>LOGIN</LoginButton>
                        <p style={{margin:'0px'}}>or</p>
                        <GoogleLogin>Login with <GoogleIcon/></GoogleLogin>
                        <SignInOption>Don't have an account?<a href='/' style={{color:'#035d2f', textDecoration: 'none'}}> Sign Up</a></SignInOption>
                    </LoginContainer>
                    <BackGround style={{backgroundImage:`url(${cover})`}} />
                </InnerContainer>
            </Container>
        </>
    )
}


export default SignIn;
const Container = styled.div`
    background:#cccccc;
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
`
const InnerContainer = styled.div`
    width:50vw;
    height:70vh;
    border-radius:10px;
    box-shadow:0px 0px 10px #111;
    display:flex;
    
`
const BackGround = styled.div`
    width: 50%;
    height: 100%;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    background-size:cover;
    background-position:center;

`
const TitleName = styled.div`
    font-family: "Acme", sans-serif;
    color:#035d2f;

`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#fff;
    width:50%;
    backdrop-filter:blur(20px);
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    gap:15px;
`
const Heading = styled.p`
    font-size:22px;
    color:#000;
    font-weight:bold;
    font-family: "Acme", sans-serif;
    display:flex;
    gap:6px;
`
const EmailInput = styled.input`
    background-color:rgba(0,0,0,0.2);
    border:none;
    outline:none;
    width:80%;
    padding:10px;
    border-radius:8px;
    &:focus{
        box-shadow:1px 1px 8px #00000044;
    }
    &::placeholder{
        color:#000
    }
`
const PasswordInput = styled.input`
    background-color:rgba(0,0,0,0.2);
    border:none;
    outline:none;
    width:80%;
    padding:10px;
    border-radius:8px;
    &:focus{
        box-shadow:1px 1px 10px #00000030;
    }
    &::placeholder{
        color:#000
    }

`
const LoginButton = styled.button`
    border:none;
    outline:none;
    padding:8px 10px;
    font-weight:bold;
    text-decoration:none;
    width:50%;
    border-radius:6px;
    background-color:#00A651;
    color:white;
    cursor:pointer;
    &:hover{
        transform:scale(1.04)
    }
`
const GoogleLogin = styled.a`
    border:1px solid #00A651;
    border-radius:8px;
    text-decoration:none;
    padding:8px 10px;
    display:flex;
    width:50%;
    font-weight:600;
    gap:5px;
    justify-content:center;
    align-items:center;
    color:#000;
    &:hover{
        background-color:#00A651;
        color:white;
        transition:.4s;
    }
`

const SignInOption = styled.p``