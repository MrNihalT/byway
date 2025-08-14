import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [password, setPassword] = useState("83r5^_");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = {
            username: "mor_2314",
            password: password,
        };

        try {
            const response = await axios.post(
                "https://fakestoreapi.com/auth/login",
                credentials
            );

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                setError("");
                console.log("Logged in. Token stored:", response.data.token);
                navigate("/");
            } else {
                setError("Login failed. Invalid credentials.");
            }
        } catch (err) {
            setError("Something went wrong during login.");
            console.error(err);
        }
    };

    return (
        <Container>
            <RightContainer>
                <LoginContainer>
                    <LoginHeading>Login to your Account</LoginHeading>
                    <LoginInfo>
                        Default credentials used for FakeStoreAPI
                    </LoginInfo>
                    <Form onSubmit={handleLogin}>
                        <InputContainer>
                            <TextInput type="text" value="mor_2314" />
                        </InputContainer>
                        <InputContainer>
                            <TextInput
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputContainer>

                        {error && <ErrorMessage>{error}</ErrorMessage>}

                        <LoginButton to="/auth/signup">Signup Now</LoginButton>
                        <ButtonContainer>
                            <SubmitButton type="submit">Login</SubmitButton>
                        </ButtonContainer>
                    </Form>
                </LoginContainer>
            </RightContainer>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
`;

const RightContainer = styled.div`
    background: #efefef;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 50px 30px;

    @media (max-width: 768px) {
        padding: 40px 20px;
        border-radius: 10px;
    }

    @media (max-width: 480px) {
        padding: 30px 15px;
    }
`;

const LoginContainer = styled.div`
    width: 100%;
`;

const LoginHeading = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const LoginInfo = styled.p`
    font-size: 1rem;
    margin-bottom: 35px;
    text-align: center;
`;

const Form = styled.form`
    width: 100%;
`;

const InputContainer = styled.div`
    margin-bottom: 15px;
`;

const TextInput = styled.input`
    padding: 15px 20px;
    width: 100%;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    box-sizing: border-box;

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const LoginButton = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    color: #046bf6;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const SubmitButton = styled.button`
    background: #046bf6;
    border: none;
    color: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    max-width: 200px;

    @media (max-width: 480px) {
        font-size: 0.95rem;
        padding: 12px 20px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ErrorMessage = styled.p`
    font-size: 0.95rem;
    color: red;
    margin-bottom: 25px;
    text-align: center;
`;
