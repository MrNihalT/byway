import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        try {
            const response = await axios.post(
                "https://fakestoreapi.com/users",
                {
                    username,
                    email,
                    password,
                }
            );
            console.log("User created:", response.data);
            setSuccess("User created successfully!");
        } catch (err) {
            console.error("Signup failed", err);
            setError("Signup failed. Try again.");
        }
    };

    return (
        <Container>
            <RightContainer>
                <LoginContainer>
                    <LoginHeading>Register into Account</LoginHeading>
                    <LoginInfo>
                        Create an account to access all the features
                    </LoginInfo>
                    <Form onSubmit={handleSignup}>
                        <InputContainer>
                            <TextInput
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <TextInput
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <TextInput
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </InputContainer>

                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        {success && <SuccessMessage>{success}</SuccessMessage>}

                        <LoginButton to="/auth/login/">Login Now</LoginButton>
                        <ButtonContainer>
                            <SubmitButton type="submit">
                                Create an Account
                            </SubmitButton>
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
        font-size: 0.95rem;
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
    max-width: 220px;

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

const SuccessMessage = styled.p`
    font-size: 0.95rem;
    color: green;
    margin-bottom: 25px;
    text-align: center;
`;
