import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../assets/icons/left.svg";
import RightArrowIcon from "../assets/icons/right.svg";
import UserReview from "../../Reviwer.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../App.css";
export default function Customer() {
    const [reviews, setReviews] = useState([]);
    const carouselRef = useRef();

    useEffect(() => {
        setReviews(UserReview);
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1080, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 548, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const handlePrev = () => {
        if (carouselRef.current) carouselRef.current.previous();
    };

    const handleNext = () => {
        if (carouselRef.current) carouselRef.current.next();
    };

    return (
        <CustomerFeedbackSection>
            <Wrapper className="wrapper">
                <CustomerTop>
                    <CustomerTopUl>
                        <CustomerTopLi>
                            <Heading>What Our Customer Say About Us</Heading>
                        </CustomerTopLi>
                        <CustomerTopLi>
                            <ButtonGroupWrapper>
                                <LeftButton onClick={handlePrev}>
                                    <LeftArrow
                                        src={LeftArrowIcon}
                                        alt="Previous"
                                    />
                                </LeftButton>
                                <RightButton onClick={handleNext}>
                                    <RightArrow
                                        src={RightArrowIcon}
                                        alt="Next"
                                    />
                                </RightButton>
                            </ButtonGroupWrapper>
                        </CustomerTopLi>
                    </CustomerTopUl>
                </CustomerTop>

                <CustomerBottom>
                    <Carousel
                        className="CustomerBottomUl"
                        ref={carouselRef}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        arrows={false}
                        ssr={true}
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {reviews.map((r, index) => (
                            <CustomerBottomLi key={index}>
                                <QuoteImg
                                    src={
                                        require("../assets/icons/double_quots.svg")
                                            .default
                                    }
                                />
                                <CustomerQuote>{r.review_text}</CustomerQuote>
                                <CustomerQuoteBottom>
                                    <CustomerImg
                                        src={require(`../assets/icons/${r.reviewer_image_url}.svg`)}
                                    />
                                    <CustomerName>
                                        {r.reviewer_name}
                                    </CustomerName>
                                </CustomerQuoteBottom>
                            </CustomerBottomLi>
                        ))}
                    </Carousel>
                </CustomerBottom>
            </Wrapper>
        </CustomerFeedbackSection>
    );
}

// Styled components

const CustomerFeedbackSection = styled.section`
    background: #f8fafc;
    height: auto;
    padding: 80px 0;
`;

const Wrapper = styled.div``;

const CustomerTop = styled.div`
    margin-bottom: 30px;
`;

const CustomerTopUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CustomerTopLi = styled.li``;

const Heading = styled.h3`
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    max-width: 300px;
`;
//
const ButtonGroupWrapper = styled.li`
    display: flex;
    gap: 24px;
    margin-top: 16px;
    justify-content: flex-end;
`;

const LeftButton = styled.button`
    width: 56px;
    height: 40px;
    border-radius: 8px;
    border: none;
    background: #94a3b8;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;

const RightButton = styled.button`
    width: 56px;
    height: 40px;
    border-radius: 8px;
    border: none;
    background: #94a3b8;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;

const LeftArrow = styled.img`
    width: 6px;
    height: 12px;
`;

const RightArrow = styled.img`
    width: 6px;
    height: 12px;
`;

const CustomerBottom = styled.div`
    overflow: hidden;
`;

const CustomerBottomLi = styled.li`
    width: 380px;

    height: 276px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px #3b82f61f;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
        width: 300px;
        height: 350px;
    }
    @media all and (max-width: 1080px) {
        width: 42vw;
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
        height: 380px;
    }
    @media all and (max-width: 548px) {
        width: 90vw;
    }
    @media all and (max-width: 480px) {
        height: auto;
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

const QuoteImg = styled.img`
    width: 35px;
    height: 27px;
    margin-bottom: 12px;
`;

const CustomerQuote = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #000000;
    margin-bottom: 8px;
`;

const CustomerQuoteBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const CustomerImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`;

const CustomerName = styled.h3`
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    color: #000000;
`;
