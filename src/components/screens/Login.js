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
`;

const RightContainer = styled.div`
    background: #efefef;
    width: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 20px;
    padding: 100px 70px;
`;
const LoginContainer = styled.div`
    padding-bottom: 70px;
    border-bottom: 1px solid #fff;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
`;
const Form = styled.form`
    width: 100%;
    display: block;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
    &:before {
    }
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 100%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
`;
const LoginButton = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    color: #046bf6;
    font-size: 20px;
`;
const SubmitButton = styled.button`
    background: #046bf6;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 25px 40px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const ErrorMessage = styled.p`
    font-size: 17px;
    color: red;
    margin-bottom: 25px;
    text-align: center;
`;
