import React, { useEffect, useState } from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import Seller from "../../Seller.json";
import styled from "styled-components";

import Customer from "./Customer";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import FaceBook from "../assets/images/facebook.png";
import GitHub from "../assets/images/github.png";
import Google from "../assets/images/google.png";
import Twitter from "../assets/images/twitter.png";
import Microsoft from "../assets/images/microsoft.png";
import star from "../assets/icons/star.svg";
import wstar from "../assets/icons/white star.svg";

export default function ProductSingle() {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [productt, setProductt] = useState({});
    const [product, setProduct] = useState([]);
    const [seller, setSeller] = useState({});
    const [reviewers, setReviewers] = useState([]);
    const [activeButton, setActiveButton] = useState("");
    const [showAllReviews, setShowAllReviews] = useState(false);
    useEffect(() => {
        axios
            .get(`${BaseUrl}products`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        let random = Math.floor(Math.random() * Seller.length);
        setSeller(Seller[random]);
    }, []);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`${BaseUrl}products/${id}`)
            .then((response) => {
                setProductt(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        window.scrollTo(0, 0);
    }, [id]);
    useEffect(() => {
        setReviewers(Seller);
    }, []);
    const categories = [
        {
            img: require("../assets/icons/binocooler.svg").default,
            title: "Astrology",
            detail: "11 Courses",
        },
        {
            img: require("../assets/icons/code.svg").default,
            title: "Development",
            detail: "14 Courses",
        },
        {
            img: require("../assets/icons/bag.svg").default,
            title: "Marketing",
            detail: "12 Courses",
        },
        {
            img: require("../assets/icons/neela_kalli.svg").default,
            title: "Physics",
            detail: "14 Courses",
        },
        {
            img: require("../assets/icons/binocooler.svg").default,
            title: "Astrology",
            detail: "11 Courses",
        },
        {
            img: require("../assets/icons/code.svg").default,
            title: "Development",
            detail: "14 Courses",
        },
        {
            img: require("../assets/icons/bag.svg").default,
            title: "Marketing",
            detail: "12 Courses",
        },
        {
            img: require("../assets/icons/neela_kalli.svg").default,
            title: "Physics",
            detail: "14 Courses",
        },
    ];
    return (
        <>
            <Header />
            {/* spotlight section */}
            <SectionProduct>
                <Wrapper className="wrapper">
                    <ProductLeft>
                        <ProductPath>
                            <PathUl>
                                <PathLi>
                                    <LiLink>
                                        <Path>Home</Path>
                                        <RightIcon
                                            src={
                                                require("../assets/icons/Vector.svg")
                                                    .default
                                            }
                                        />
                                    </LiLink>
                                </PathLi>
                                <PathLi>
                                    <LiLink to={"/"}>
                                        <Path>Products</Path>
                                        <RightIcon
                                            src={
                                                require("../assets/icons/Vector.svg")
                                                    .default
                                            }
                                        />
                                    </LiLink>
                                </PathLi>
                                <PathLi>
                                    <LiLink>
                                        <Path>{product.title}</Path>
                                    </LiLink>
                                </PathLi>
                            </PathUl>
                        </ProductPath>
                        <ProductDetals>
                            <ProductNamee>{productt.title}</ProductNamee>
                            <ProductDesc>{productt.description}</ProductDesc>
                            <ProductRatingg>
                                <ProductRate>
                                    {productt.rating?.rate}
                                </ProductRate>
                                {Array.from({ length: 5 }).map((_, i) => {
                                    const roundedRating = Math.round(
                                        productt.rating?.rate
                                    );
                                    if (i < roundedRating) {
                                        return (
                                            <ProductRateImg
                                                key={i}
                                                src={
                                                    require("../assets/icons/star.svg")
                                                        .default
                                                }
                                            />
                                        );
                                    } else {
                                        return (
                                            <ProductRateImg
                                                key={i}
                                                src={
                                                    require("../assets/icons/white star.svg")
                                                        .default
                                                }
                                            />
                                        );
                                    }
                                })}

                                <ProductRateCount>
                                    ({productt.rating?.count} rating)
                                </ProductRateCount>
                            </ProductRatingg>
                            <ProductSeller>
                                <ProductSellerImg src={seller.image} />
                                <ProductSellerName>
                                    {seller.seller_name}
                                </ProductSellerName>
                            </ProductSeller>
                        </ProductDetals>
                    </ProductLeft>
                    <ProductRight>
                        <ProductCard>
                            <ProductImg src={productt.image} />
                            <ProductPriceSection>
                                <ProductPricee>$49.5</ProductPricee>
                                <ProductOriginalPrice>
                                    $99.5
                                </ProductOriginalPrice>
                                <ProductOffer>50% Off</ProductOffer>
                            </ProductPriceSection>
                            <AddtoCartButton>Add To Cart</AddtoCartButton>
                            <BuyNowButtton>Buy Now</BuyNowButtton>
                            <CardBottom>
                                <Share>Share</Share>
                                <SocialMedia>
                                    <SocialMediaLink
                                        href="#"
                                        aria-label="Facebook"
                                    >
                                        <SocialMediaImg src={FaceBook} />
                                    </SocialMediaLink>
                                    <SocialMediaLink
                                        href="#"
                                        aria-label="GitHub"
                                    >
                                        <SocialMediaImg src={GitHub} />
                                    </SocialMediaLink>
                                    <SocialMediaLink
                                        href="#"
                                        aria-label="Google"
                                    >
                                        <SocialMediaImg src={Google} />
                                    </SocialMediaLink>
                                    <SocialMediaLink
                                        href="#"
                                        aria-label="Twitter"
                                    >
                                        <SocialMediaImg src={Twitter} />
                                    </SocialMediaLink>
                                    <SocialMediaLink
                                        href="#"
                                        aria-label="Microsoft"
                                    >
                                        <SocialMediaImg src={Microsoft} />
                                    </SocialMediaLink>
                                </SocialMedia>
                            </CardBottom>
                        </ProductCard>
                    </ProductRight>
                </Wrapper>
            </SectionProduct>
            {/* spotlight ending */}

            {/* descriptio startgin */}
            <ProductDescription>
                <Wrapperr className="wrapper">
                    <ProductDescriptionTop>
                        <ProductTopUl>
                            <ProductTopLi>
                                <ButtonDescription
                                    onClick={() =>
                                        setActiveButton("description")
                                    }
                                    active={activeButton === "description"}
                                    to="desc"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Description
                                </ButtonDescription>
                            </ProductTopLi>
                            <ProductTopLi>
                                <ButtonDescription
                                    onClick={() => setActiveButton("seller")}
                                    active={activeButton === "seller"}
                                    to="sell"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Seller
                                </ButtonDescription>
                            </ProductTopLi>

                            <ProductTopLi>
                                <ButtonDescription
                                    onClick={() => setActiveButton("reviews")}
                                    active={activeButton === "reviews"}
                                    to="rev"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Reviews
                                </ButtonDescription>
                            </ProductTopLi>
                        </ProductTopUl>
                    </ProductDescriptionTop>
                    <ProductDescriptionBottom>
                        <ProductDescriptionArea>
                            <ProductDescriptionDiv>
                                <DescriptinHeading>
                                    Product Description
                                </DescriptinHeading>
                                <ProductDescriptionText>
                                    {product.description}
                                </ProductDescriptionText>
                            </ProductDescriptionDiv>
                            <ProductDescriptionDiv id="desc">
                                <DescriptinHeading>
                                    Product Verification
                                </DescriptinHeading>
                                <ProductDescriptionText>
                                    At Byway, we understand the significance of
                                    formal recognition for your hard work and
                                    dedication to continuous learning. Upon
                                    successful completion of our courses, you
                                    will earn a prestigious certification that
                                    not only validates your expertise but also
                                    opens doors to new opportunities in your
                                    chosen field.
                                </ProductDescriptionText>
                            </ProductDescriptionDiv>
                        </ProductDescriptionArea>
                        <ProductSellerArea id="sell">
                            <SellerHeading>Seller</SellerHeading>
                            <SellerType>
                                <SellerName>{seller.seller_name}</SellerName>
                                <SellerCategory>
                                    {seller.product_type}
                                </SellerCategory>
                            </SellerType>
                            <SellerDetails>
                                <SellerImg src={seller.image} />
                                <SellerDetailsRight>
                                    <SellerDetailSpan>
                                        <SImg
                                            src={
                                                require("../assets/icons/badge.svg")
                                                    .default
                                            }
                                        />
                                        <SText>{seller.reviews} Reviews</SText>
                                    </SellerDetailSpan>
                                    <SellerDetailSpan>
                                        <SImg
                                            src={
                                                require("../assets/icons/badge.svg")
                                                    .default
                                            }
                                        />
                                        <SText>
                                            {seller.total_customers} customers
                                        </SText>
                                    </SellerDetailSpan>
                                    <SellerDetailSpan>
                                        <SImg
                                            src={
                                                require("../assets/icons/play.svg")
                                                    .default
                                            }
                                        />
                                        <SText>
                                            {seller.total_products} products
                                        </SText>
                                    </SellerDetailSpan>
                                </SellerDetailsRight>
                            </SellerDetails>
                            <SellerQuote>{seller.quote}</SellerQuote>
                        </ProductSellerArea>
                    </ProductDescriptionBottom>
                </Wrapperr>
            </ProductDescription>
            {/* descriptio ending */}

            {/* product reviews */}
            <ReviewContainer id="rev">
                <Wrapperr className="wrapper">
                    <ReviewTop>
                        <ReviewHeading>Learner Reviews</ReviewHeading>
                    </ReviewTop>
                    <ReviewBottom>
                        <ReviewBottomLeft>
                            <RatingTop>
                                <RatingImg src={star} />
                                <TotalRating>
                                    {productt.rating?.rate}
                                </TotalRating>
                                <TotalReviews>
                                    {productt.rating?.count} reviews
                                </TotalReviews>
                            </RatingTop>
                            <RatingBottom>
                                <RatingSection>
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartPercentage>80%</StartPercentage>
                                </RatingSection>
                                <RatingSection>
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={wstar} />
                                    <StartPercentage>10%</StartPercentage>
                                </RatingSection>
                                <RatingSection>
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={wstar} />
                                    <StartImg src={wstar} />
                                    <StartPercentage>5%</StartPercentage>
                                </RatingSection>
                                <RatingSection>
                                    <StartImg src={star} />
                                    <StartImg src={star} />
                                    <StartImg src={wstar} />
                                    <StartImg src={wstar} />
                                    <StartImg src={wstar} />
                                    <StartPercentage>3%</StartPercentage>
                                </RatingSection>
                                <RatingSection>
                                    <StartImg src={star} />
                                    <StartImg src={wstar} />
                                    <StartImg src={wstar} />
                                    <StartImg src={wstar} />
                                    <StartImg src={wstar} />
                                    <StartPercentage>2%</StartPercentage>
                                </RatingSection>
                            </RatingBottom>
                        </ReviewBottomLeft>
                        <ReviewBottomRight>
                            <ReviewsSection>
                                {reviewers
                                    .slice(
                                        0,
                                        showAllReviews ? reviewers.length : 3
                                    )
                                    .map((rev, index) => (
                                        <ReviewCard key={index}>
                                            <ReviewCardLeft>
                                                <ReviewerImg src={rev.image} />
                                                <ReviewerName>
                                                    {rev.seller_name}
                                                </ReviewerName>
                                            </ReviewCardLeft>
                                            <ReviewCardRight>
                                                <ReviewCardRightTop>
                                                    <ReviewerStarImg
                                                        src={star}
                                                    />
                                                    <ReviewerRating>
                                                        5
                                                    </ReviewerRating>
                                                    <ReviewedDate>
                                                        Reviewed on 22nd March,
                                                        2024
                                                    </ReviewedDate>
                                                </ReviewCardRightTop>
                                                <ReviewCardRightBottom>
                                                    <ReviewDescription>
                                                        I was initially
                                                        apprehensive, having no
                                                        prior design experience.
                                                        But the instructor, John
                                                        Doe, did an amazing job
                                                        of breaking down complex
                                                        concepts into easily
                                                        digestible modules. The
                                                        video lectures were
                                                        engaging, and the
                                                        real-world examples
                                                        really helped solidify
                                                        my understanding.
                                                    </ReviewDescription>
                                                </ReviewCardRightBottom>
                                            </ReviewCardRight>
                                        </ReviewCard>
                                    ))}

                                <ViewMoreButton
                                    onClick={() =>
                                        setShowAllReviews(!showAllReviews)
                                    }
                                >
                                    {showAllReviews
                                        ? "View less Reviews "
                                        : "View more Reviews"}
                                </ViewMoreButton>
                            </ReviewsSection>
                        </ReviewBottomRight>
                    </ReviewBottom>
                </Wrapperr>
            </ReviewContainer>
            {/* product reviews ending */}

            {/* customer   */}
            <Customer />
            {/* customer  ending */}

            {/* Top Course */}
            <TopProductContainer id="products">
                <Wrapperr className="wrapper">
                    <CategorieTop>
                        <CatogeryHeading>
                            More Product Like This
                        </CatogeryHeading>
                        <CategorySeeAll
                            onClick={() => setShowAllProducts(!showAllProducts)}
                        >
                            {showAllProducts ? "See Less" : "See All"}
                        </CategorySeeAll>
                    </CategorieTop>

                    <ProductBottom>
                        <ProductUl>
                            {product
                                .slice(
                                    0,
                                    showAllProducts ? categories.length : 4
                                )
                                .map((prdt) => (
                                    <ProductLi id={prdt.id}>
                                        <Link to={`/product/${prdt.id}`}>
                                            <ProdcutImageDiv>
                                                <ProductImage
                                                    src={prdt.image}
                                                />
                                            </ProdcutImageDiv>

                                            <ProductName>
                                                {prdt.title}
                                                {/* {prdt.title.length > 45
                                                    ? prdt.title.substring(
                                                          0,
                                                          40
                                                      ) + ".........."
                                                    : prdt.title} */}
                                            </ProductName>
                                            <ProductCatogery>
                                                {prdt.category}
                                            </ProductCatogery>
                                            <ProductRating>
                                                <ProductRatingImg>
                                                    {Array.from({
                                                        length: 5,
                                                    }).map((_, i) => {
                                                        const roundedRating =
                                                            Math.round(
                                                                prdt.rating.rate
                                                            );

                                                        if (i < roundedRating) {
                                                            return (
                                                                <RatingSvg
                                                                    key={i}
                                                                    src={
                                                                        require("../assets/icons/star.svg")
                                                                            .default
                                                                    }
                                                                />
                                                            );
                                                        } else {
                                                            return (
                                                                <RatingSvg
                                                                    key={i}
                                                                    src={
                                                                        require("../assets/icons/white star.svg")
                                                                            .default
                                                                    }
                                                                />
                                                            );
                                                        }
                                                    })}

                                                    <RatingCount>
                                                        ({prdt.rating.count}
                                                        ratings)
                                                    </RatingCount>
                                                </ProductRatingImg>
                                            </ProductRating>
                                            <ProductPrice>
                                                ${prdt.price}
                                            </ProductPrice>
                                        </Link>
                                    </ProductLi>
                                ))}
                        </ProductUl>
                    </ProductBottom>
                </Wrapperr>
            </TopProductContainer>
            {/* Top Course Ending */}
            <Footer />
        </>
    );
}

const SectionProduct = styled.section`
    background: #f8fafc;
    height: 441px;
    padding: 40px 0;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
        height: auto;
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
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
        flex-direction: column-reverse;
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
const ProductLeft = styled.div``;
const ProductPath = styled.div`
    height: 24px;
    margin-bottom: 40px;
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
        position: absolute;
        top: 75px;
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
const PathUl = styled.ul`
    display: flex;
    gap: 8px;
    align-items: center;
`;
const PathLi = styled.li``;
const LiLink = styled(Link)`
    display: flex;
    align-items: center;
`;
const Path = styled.span`
    margin-right: 15px;
    font-weight: 400;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    color: #334155;
`;
const RightIcon = styled.img`
    margin-right: 15px;
    width:4px
    height:8px
`;
const ProductDetals = styled.div`
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
        margin-top: 20px;
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
const ProductNamee = styled.h3`
    font-weight: 700;
    font-size: 40px;

    line-height: 140%;
    letter-spacing: -2%;
    color: #0f172a;
    margin-bottom: 10px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
        max-width: 500px;
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        font-size: 36px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
        font-size: 34px;
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
const ProductDesc = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0%;
    color: #334155;
    max-width: 700px;
    margin-bottom: 15px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
        max-width: 600px;
    }
    @media all and (max-width: 1080px) {
        max-width: 500px;
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
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
const ProductRating = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductRate = styled.p`
    font-weight: 500;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    color: #fec84b;
    align-self: end;
`;
const ProductRateImg = styled.img`
    width: 15px;
    height: 15px;
`;
const ProductRateCount = styled.p`
    font-weight: 400;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    color: #334155;
`;
const ProductSeller = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const ProductSellerImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const ProductSellerName = styled.p``;
const ProductRight = styled.div``;
const ProductCard = styled.div`
    padding: 24px 22px;
    border-radius: 16px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    box-shadow: 0px 0px 8px 0px #3b82f61f;
    height: 588px;
    position: absolute;
    right: 5%;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        position: relative;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
        width: auto;
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
const ProductImg = styled.img`
    width: 356px;
    height: 200px;
    border-radius: 8px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
        width: 270px;
        height: 200px;
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        width: 220px;
        height: 200px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
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
const ProductPriceSection = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 15px;
    align-items: center;
`;
const ProductPrice = styled.h3`
    font-weight: 600;
    font-size: 24px;
    leading-trim: NONE;
    line-height: 140%;
    letter-spacing: 0%;
    color: #0f172a;
`;
const ProductOriginalPrice = styled.h4`
    font-weight: 600;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: 0%;
    color: #94a3b8;
    text-decoration: line-through;
`;
const ProductOffer = styled.h3`
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #16a34a;
`;
const AddtoCartButton = styled.button`
    margin-top: 20px;
    display: block;
    width: 90%;
    height: 48px;
    angle: 0 deg;
    opacity: 1;
    border-radius: 8px;
    gap: 6px;
    padding: 10px 24px;
    background: #020617;
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: 0%;
    margin-bottom: 20px;
`;
const BuyNowButtton = styled.button`
    width: 90%;
    height: 48px;
    angle: 0 deg;
    opacity: 1;
    border-radius: 8px;
    border-width: 1px;
    gap: 6px;
    padding-top: 10px;
    padding-right: 24px;
    padding-bottom: 10px;
    padding-left: 24px;
    background: #ffffff;
    color: #0f172a;
    font-family: Inter;
    font-weight: 500;
    border: 1px solid #020617
    font-size: 14px;
    line-height: 160%;
    letter-spacing: 0%;
    margin-bottom:20px
`;
const CardBottom = styled.div`
    border-top: 1px solid #e2e8f0;
    padding: 24px;
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
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
        // border-width: auto;
        width: 100%;
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Share = styled.h3`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #0f172a;
`;
const SocialMedia = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
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
        gap: 25px;
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
        gap: 10px;
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const SocialMediaLink = styled.a`
    background: #ffffff;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 8px 0px #3b82f61f;
    border: 1px solid #e2e8f0;
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
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
        width: 40px;
        height: 40px;
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const SocialMediaImg = styled.img`
    width: 28px;
    height: 28px;
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
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
        width: 25px;
        height: 25px;
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const ProductDescription = styled.section`
    background: #ffffff;
    // height: 1952px;
    padding: 20px 0;
    width: 70%;
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
        width: 100%;
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
const ProductDescriptionTop = styled.div`
    padding: 40px 0 40px 0;
    border-bottom: 1px solid #e2e8f0;
    width: 100%;
`;
const ProductTopUl = styled.ul`
    display: flex;
    gap: 24px;
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
        gap: 10px;
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
        gap: 5px;
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
        gap: 1px;
    }
    @media all and (max-width: 320px) {
    }
`;
const ProductTopLi = styled.li`
    display: flex;
    width: 148px;

    border: 1px solid #e2e8f0;
    border-radius: 8px;
    height: 57px;
    opacity: 1;
    gap: 8px;
    text-align: center;
    margin-right: 24px;
    &:last-child {
        margin-right: 0;
    }
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
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
        width: auto;
        min-width: 80px;
        margin-right: 18px;
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
        min-width: 80px;
        margin-right: 10px;
    }
    @media all and (max-width: 320px) {
    }
`;
const ButtonDescription = styled(ScrollLink)`
    width: 100%;
    cursor: pointer;
    padding-top: 18px;
    padding-right: 21px;
    padding-bottom: 18px;
    padding-left: 21px;
    ${(props) => props.active && `background:#EFF6FF;`}
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
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
        font-size: 12px;
        padding: 5px 10px;
    }
    @media all and (max-width: 320px) {
    }
`;
const ProductDescriptionBottom = styled.div`
    padding: 25px 0;
    width: 100%;
`;
const Wrapperr = styled.div``;
const ProductDescriptionArea = styled.div`
    border-bottom: 1px solid #e2e8f0;
    width: 100%;
    padding: 0 0 25px 0;
`;
const ProductDescriptionDiv = styled.div`
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
`;
const DescriptinHeading = styled.h3`
    font-weight: 600;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #0f172a;
    margin-bottom: 5px;
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
const ProductDescriptionText = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: 0%;
    color: #334155;
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
const ProductSellerArea = styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #e2e8f0;
`;
const SellerHeading = styled.h3`
    margin-bottom: 25px;
`;
const SellerType = styled.div``;
const SellerName = styled.h3`
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 20px;
    leading-trim: NONE;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #2563eb;
`;
const SellerCategory = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #334155;
`;
const SellerDetails = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;
    align-items: center;
`;
const SellerImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    angle: 0 deg;
    opacity: 1;
`;
const SellerDetailsRight = styled.div`
    gap: 5px;
    display: flex;
    flex-direction: column;
`;
const SellerDetailSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
`;
const SImg = styled.img`
    width: 24px;
    height: 24px;
    angle: 0 deg;
    opacity: 1;
`;
const SText = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #0f172a;
`;
const SellerQuote = styled.p`
    margin-top: 20px;
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #334155;
`;

const ReviewContainer = styled.section`
    background: #ffffff;
    width: 100%;
    padding: 0 0 20px 0;
`;
const ReviewTop = styled.div`
    margin-bottom: 10px;
`;
const ReviewHeading = styled.h3`
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #0f172a;
`;
const ReviewBottom = styled.div`
    display: flex;
    justify-content: flex-start;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        justify-content: space-between;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
        flex-direction: column;
        gap: 30px;
        align-items: center;
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
const ReviewBottomLeft = styled.div`
    width: 100%;
`;
const RatingTop = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;
const RatingImg = styled.img`
    width: 20px;
    height: 20px;
    angle: 0 deg;
    opacity: 1;
`;
const TotalRating = styled.h3`
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 140%;
    letter-spacing: 0%;
    color: #0f172a;
    margin-right: 3px;
`;
const TotalReviews = styled.p`
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 20px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #334155;
`;
const RatingBottom = styled.div`
    margin-top: 12px;
`;
const RatingSection = styled.div`
    display: flex;
    gap: 2px;
    margin-bottom: 8px;
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
        gap: 5px;
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
    &:last-child {
        margin-bottom: 0;
    }
`;
const StartImg = styled.img`
    width: 20px;
    height: 20px;
    angle: 0 deg;
    opacity: 1;
`;
const StartPercentage = styled.p`
    margin-left: 5px;
`;
const ReviewBottomRight = styled.div`
    width: 67%;
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
        width: 100%;
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
const ReviewsSection = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;
const ReviewCard = styled.div`
    height: 190px;
    justify-content: flex-start;

    border: 1px solid #e2e8f0;
    padding: 25px;
    border-radius: 16px;
    display: flex;
    gap: 15%;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
        height: auto;
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        gap: 7%;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 420px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const ReviewCardLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: baseline;
`;
const ReviewerImg = styled.img`
    width: 60px;
    height: 60px;
    angle: 0 deg;
    opacity: 1;
    border-radius: 50%;
`;
const ReviewerName = styled.h3`
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #0f172a;
`;
const ReviewCardRight = styled.div``;
const ReviewCardRightTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;
const ReviewerStarImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;
const ReviewerRating = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #0f172a;
    margin-right: 30px;
`;
const ReviewedDate = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: right;
    vertical-align: middle;
    color: #334155;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        font-size: 12px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
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
const ReviewCardRightBottom = styled.div``;
const ReviewDescription = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: 0%;
    vertical-align: middle;
    max-width: 800px;
    color: #334155;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        font-size: 14px;
        line-height: 130%;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
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
const ViewMoreButton = styled.button`
    width: 185px;
    height: 48px;
    angle: 0 deg;
    opacity: 1;
    gap: 6px;
    border-radius: 8px;
    border-width: 1px;
    padding: 10px 24px;
    border: 1px solid #0f172a;
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: 0%;
    color: #0f172a;
    background: #ffffff;
`;

let CategorieTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

let CatogeryHeading = styled.h3`
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: #0f172a;
`;

let CategorySeeAll = styled.span`
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #3b82f6;
    cursor: pointer;
`;

let TopProductContainer = styled.div`
    padding: 115px 0;
`;

let ProductBottom = styled.div``;
let ProductUl = styled.ul`
    display: flex;
    justify-content: space-between;
    row-gap: 30px;
    flex-wrap: wrap;
    transition: all 1s ease-in-out;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;

    animation-delay: 0.5s;

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
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
    }
    @media all and (max-width: 480px) {
        justify-content: center;
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
let ProductLi = styled.li`
    max-width: 350px;
    width: 23%;
    gap: 8px;
    border-radius: 16px;
    border-width: 1px;
    padding: 18px 25px;
    border: 1px solid #e2e8f0;
    box-shadow: 0px 0px 8px 0px #3b82f61f;
    display: flex;
    flex-direction: column;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        max-width: 350px;
        width: 40%;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
        max-width: 400px;
        width: 44%;
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
        align-items: center;
        text-align: center;
        width: 80%;
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
let ProdcutImageDiv = styled.div`
    display: flex;
    justify-content: center;
`;
let ProductImage = styled.img`
    width: 110px;
    height: 110px;
    angle: 0 deg;
    opacity: 1;
    border-radius: 8px;
    margin-bottom: 20px;
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
        width: 130px;
        height: 130px;
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
let ProductName = styled.h3`
    font-family: Inter;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0%;
    margin-bottom: 2px;
    color: #0f172a;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
        font-size: 16px;
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
let ProductCatogery = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    margin-bottom: 3px;
    color: #334155;
`;
let ProductRatingg = styled.div`
    margin-bottom: 10px;
`;
let ProductRatingImg = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
        gap: 1px;
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
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
let RatingSvg = styled.img`
    width: 20px;
    height: 20px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
        width: 15px;
        height: 15px;
        gap: 1px;
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
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
let RatingCount = styled.p`
    margin-left: 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #334155;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
        margin-left: 5px;
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
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
let ProductPricee = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #0f172a;
`;
