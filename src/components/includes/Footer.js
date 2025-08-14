import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSvg from "../assets/icons/logo.svg";
import FaceBook from "../assets/images/facebook.png";
import GitHub from "../assets/images/github.png";
import Google from "../assets/images/google.png";
import Twitter from "../assets/images/twitter.png";
import Microsoft from "../assets/images/microsoft.png";

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <Wrapper className="wrapper">
                    <FooterUl>
                        <FooterLi>
                            <LogoLink to="/">
                                <LogoImg src={LogoSvg} />
                                <LogoName>Byway</LogoName>
                            </LogoLink>
                            <BywayDescription>
                                Empowering learners through accessible and
                                engaging online education.
                                <br /> Byway is a leading online learning
                                platform dedicated to providing high-quality,
                                flexible, and affordable educational
                                experiences.
                            </BywayDescription>
                        </FooterLi>
                        <FooterLi>
                            <Heading>Get Help</Heading>

                            <LiItems href="#">Contact Us</LiItems>
                            <LiItems href="#">Latest Articles</LiItems>
                            <LiItems href="#">FAQ</LiItems>
                        </FooterLi>
                        <FooterLi>
                            <Heading>Products</Heading>

                            <LiItems href="#">Laptop</LiItems>
                            <LiItems href="#">Furniture</LiItems>
                            <LiItems href="#">Smart Phone</LiItems>
                            <LiItems href="#">Accessories</LiItems>
                            <LiItems href="#">TVs & Appliances</LiItems>
                        </FooterLi>
                        <FooterLi>
                            <Heading>Contact Us</Heading>

                            <AddressItem>
                                Address: 123 Main Street, Anytown, CA 12345
                            </AddressItem>

                            <LiItems href="tel:+(123) 456-7890">
                                Tel: +(123) 456-7890
                            </LiItems>
                            <LiItems href="mailto:bywayedu@webkul.in">
                                Mail: bywayedu@webkul.in
                            </LiItems>
                            <SocialMedia>
                                <SocialMediaLink href="#" aria-label="Facebook">
                                    <SocialMediaImg src={FaceBook} />
                                </SocialMediaLink>
                                <SocialMediaLink href="#" aria-label="GitHub">
                                    <SocialMediaImg src={GitHub} />
                                </SocialMediaLink>
                                <SocialMediaLink href="#" aria-label="Google">
                                    <SocialMediaImg src={Google} />
                                </SocialMediaLink>
                                <SocialMediaLink href="#" aria-label="Twitter">
                                    <SocialMediaImg src={Twitter} />
                                </SocialMediaLink>
                                <SocialMediaLink
                                    href="#"
                                    aria-label="Microsoft"
                                >
                                    <SocialMediaImg src={Microsoft} />
                                </SocialMediaLink>
                            </SocialMedia>
                        </FooterLi>
                    </FooterUl>
                </Wrapper>
            </FooterContainer>
        </>
    );
}

const FooterContainer = styled.footer`
    background: #1e293b;
    height: auto;
`;
const Wrapper = styled.div``;
const FooterUl = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 80px 0;
    gap: 20px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
    }
    @media all and (max-width: 548px) {
        justify-content: center;
        text-align: center;
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const FooterLi = styled.li`
    display: flex;
    flex-direction: column;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
        width: 40%;
    }
    @media all and (max-width: 548px) {
        width: 80%;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: center;
    text-align: center;
`;
const LogoImg = styled.img`
    display: block;
`;
const LogoName = styled.h3`
    color: #f1f5f9;
    font-weight: 400;
    font-size: 26px;
`;
const BywayDescription = styled.p`
    color: #cbd5e1;
    max-width: 420px;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        max-width: 300px;
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
    }
    @media all and (max-width: 548px) {
        max-width: 100%;
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Heading = styled.h3`
    color: #f1f5f9;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0%;
`;
const LiItems = styled.a`
    color: #cbd5e1;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: 0%;
    margin-bottom: 8px;
    &:last-item {
        margin-bottom: 0;
    }
`;
const AddressItem = styled.p`
    color: #cbd5e1;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: 0%;
    margin-bottom: 8px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        max-width: 200px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
    }
    @media all and (max-width: 548px) {
        max-width: 300px;
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const SocialMedia = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 10px;
    justify-content: space-between;
`;
const SocialMediaLink = styled.a`
    background: #ffffff;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        width: 35px;
        height: 35px;
    }
    @media all and (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
    @media all and (max-width: 680px) {
        width: 35px;
        height: 35px;
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const SocialMediaImg = styled.img`
    width: 30px;
    height: 30px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        width: 25px;
        height: 25px;
    }
    @media all and (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
    @media all and (max-width: 680px) {
        width: 25px;
        height: 25px;
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
