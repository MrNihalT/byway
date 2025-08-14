import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import styled from "styled-components";
import Header from "../includes/Header";
import { Link } from "react-router-dom";

import FrontImage from "../assets/images/shutter-speed-BQ9usyzHx_w-unsplash.jpg";

// import thoppi from "../assets/images/thopii.png";
// import graduate from "../assets/images/graduate.png";
// import bookkayyil from "../assets/images/bookkayil.png";
// import kuth from "../assets/images/Frame 427318996.png";
// import { style } from "motion/react-client";
import Seller from "../../Seller.json";
import Customer from "./Customer";
import Sellerr from "./Sellerr";
import Footer from "../includes/Footer";

export default function Product() {
    // const user = localStorage.getItem("token");
    const [product, setProduct] = useState([]);
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [showAllSellers, setShowAllSellers] = useState(false);
    const [seller, setSeller] = useState([]);
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
        console.log("loaded seller json", Seller);
        setSeller(Seller);
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

            {/* Spotlight */}
            <SpotlightContainer>
                <Wrapper className="wrapper">
                    <SpotlightContent>
                        <SpotlightHeading>
                            Unlock Your Potential with Byway
                        </SpotlightHeading>
                        <SpotlightDescription>
                            Welcome to Byway, where learning knows no bounds. We
                            believe that education is the key to personal and
                            professional growth, and we're here to guide you on
                            your journey to success.
                        </SpotlightDescription>
                        <SpotlightButton>
                            Start your instructor journey
                        </SpotlightButton>
                    </SpotlightContent>
                </Wrapper>
            </SpotlightContainer>
            {/* Sptlight endings */}

            {/* Course Summary */}
            <CourseDetails>
                <Wrapper className="wrapper">
                    <CourseUl>
                        <CourseLi>
                            <CourseHeading>250+</CourseHeading>
                            <CourseDetail>
                                Courses by our best mentors
                            </CourseDetail>
                        </CourseLi>
                        <CourseLi>
                            <CourseHeading>1000+</CourseHeading>
                            <CourseDetail>
                                Courses by our best mentors
                            </CourseDetail>
                        </CourseLi>
                        <CourseLi>
                            <CourseHeading>15+</CourseHeading>
                            <CourseDetail>
                                Courses by our best mentors
                            </CourseDetail>
                        </CourseLi>
                        <CourseLi>
                            <CourseHeading>2400+</CourseHeading>
                            <CourseDetail>
                                Courses by our best mentors
                            </CourseDetail>
                        </CourseLi>
                    </CourseUl>
                </Wrapper>
            </CourseDetails>
            {/* Course Summery ending */}

            {/* Course Categories */}
            <CourseCategories>
                <Wrapper className="wrapper">
                    <CategorieTop>
                        <CatogeryHeading>Top Categories</CatogeryHeading>
                        <CategorySeeAll
                            onClick={() =>
                                setShowAllCategories(!showAllCategories)
                            }
                        >
                            {showAllCategories ? "See Less" : "See All"}
                        </CategorySeeAll>
                    </CategorieTop>
                    <CategorieBottom>
                        <CatogoryUl>
                            {categories
                                .slice(
                                    0,
                                    showAllCategories ? categories.length : 4
                                )
                                .map((category, index) => (
                                    <CategoryLi key={index}>
                                        <CatogoryImgDiv>
                                            <CatogoryImg src={category.img} />
                                        </CatogoryImgDiv>
                                        <CategoryHeading>
                                            {category.title}
                                        </CategoryHeading>
                                        <CategoryDetail>
                                            {category.detail}
                                        </CategoryDetail>
                                    </CategoryLi>
                                ))}
                        </CatogoryUl>
                    </CategorieBottom>
                </Wrapper>
            </CourseCategories>
            {/* Course Categoreis ending */}

            {/* Top Course */}
            <TopProductContainer id="products">
                <Wrapper className="wrapper">
                    <CategorieTop>
                        <CatogeryHeading>Top Products</CatogeryHeading>
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
                </Wrapper>
            </TopProductContainer>
            {/* Top Course Ending */}

            {/* Top sellers */}
            <TopSellerContainer>
                <Wrapper className="wrapper">
                    <CategorieTop>
                        <CatogeryHeading>Top Sellers</CatogeryHeading>
                        <CategorySeeAll
                            onClick={() => setShowAllSellers(!showAllSellers)}
                        >
                            {showAllSellers ? "See less" : "See All"}
                        </CategorySeeAll>
                    </CategorieTop>
                    <TopSellerBottom>
                        <SellerUlContainer>
                            {seller
                                .slice(0, showAllSellers ? seller.length : 5)
                                .map((sell) => (
                                    <SellerLiContainer>
                                        <SellerLink>
                                            <SellerImg src={sell.image} />
                                            <SellerName>
                                                {sell.seller_name}
                                            </SellerName>
                                            <SellerCategoryL>
                                                {sell.product_type}
                                            </SellerCategoryL>
                                            <SellerDetails>
                                                <SellerRating>
                                                    <StarIconSeller
                                                        src={
                                                            require("../assets/icons/star.svg")
                                                                .default
                                                        }
                                                    />
                                                    {sell.total_rating}
                                                </SellerRating>
                                                <SellerProducts>
                                                    {sell.total_customers}{" "}
                                                    customer
                                                </SellerProducts>
                                            </SellerDetails>
                                        </SellerLink>
                                    </SellerLiContainer>
                                ))}
                        </SellerUlContainer>
                    </TopSellerBottom>
                </Wrapper>
            </TopSellerContainer>
            {/* Top sellers ending */}

            {/* Customer Page */}
            <Customer />
            {/* Customer Page ending */}

            {/* Seller Page Starting */}
            <Sellerr />
            {/* Seller Page Ending */}

            {/* Footer Starting */}
            <Footer />
            {/* Footer Ending */}
        </>
    );
}
//  @media all and (max-width: 1465px) {
//     }
//     @media all and (max-width: 1280px) {
//     }
//     @media all and (max-width: 1080px) {
//     }
//     @media all and (max-width: 980px) {
//     }
//     @media all and (max-width: 768px) {
//     }
//     @media all and (max-width: 680px) {
//     }
//     @media all and (max-width: 548px) {
//     }
//     @media all and (max-width: 480px) {
//     }
//     @media all and (max-width: 420px) {
//     }
//     @media all and (max-width: 380px) {
//     }
//     @media all and (max-width: 360px) {
//     }
//     @media all and (max-width: 320px) {
//     }
// Styled Components
let Wrapper = styled.div``;

let SpotlightContainer = styled.section`
    height: 600px;
    display: flex;
    align-items: center;
    background-image: url(${FrontImage});
    background-size: cover;
    background-position: 380px bottom;

    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
        height: 500px;
        background-position: 280px bottom;
    }
    @media all and (max-width: 980px) {
        height: 450px;
        background-position: 200px bottom;
    }
    @media all and (max-width: 768px) {
        background-position: 100px bottom;
    }
    @media all and (max-width: 680px) {
        background-position: 80px bottom;
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
        text-align: center;
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

let SpotlightContent = styled.div`
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
    }
    @media all and (max-width: 548px) {
        align-items: center;
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

let SpotlightHeading = styled.h3`
    max-width: 450px;
    font-weight: 700;
    font-size: 40px;
    color: #0f172a;

    margin-bottom: 20px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        font-size: 32px;
    }
    @media all and (max-width: 768px) {
        font-size: 28px;
        max-width: 300px;
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

let SpotlightDescription = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #181c20ff;
    max-width: 600px;
    line-height: 160%;
    margin-bottom: 35px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        font-size: 14px;
        max-width: 460px;
    }
    @media all and (max-width: 768px) {
        font-size: 14px;
        max-width: 400px;
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

let SpotlightButton = styled(Link)`
    padding: 15px 20px;
    background: #3b82f6;
    max-width: 240px;
    text-align: center;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        padding: 14px 15px;
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

let CourseDetails = styled.div`
    background: #f8fafc;
    height: 149px;
    width: 100%;
    align-content: center;
    margin-bottom: 70px;
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
        padding: 30px 0;
        height: auto;
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

let CourseUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        gap: 20px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
        flex-wrap: wrap;
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
        text-align: center;
        row-gap: 30px;
    }
    @media all and (max-width: 320px) {
    }
`;

let CourseLi = styled.li`
    padding-right: 80px;
    border-right: 4px solid #e2e8f0;
    &:last-child {
        border: 0;
        padding-right: 0;
    }
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
        padding-right: 50px;
    }
    @media all and (max-width: 1080px) {
        padding-right: 20px;
    }
    @media all and (max-width: 980px) {
        padding-right: 80px;
    }
    @media all and (max-width: 768px) {
        padding-right: 45px;
    }
    @media all and (max-width: 680px) {
        border: 0;

        &:nth-child(even) {
            border: 0;
            padding-right: 0;
        }
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
        padding: 0;
        width: 40%;
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
        padding: 0;

        width: 100%;
    }
    @media all and (max-width: 320px) {
    }
`;

let CourseHeading = styled.h1`
    font-size: 32px;
    font-weight: 600;
    line-height: 130%;
    color: #0f172a;
    @media all and (max-width: 1465px) {
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
        font-size: 30px;
    }
    @media all and (max-width: 980px) {
        font-size: 28px;
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

let CourseDetail = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: #0f172a;
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

let CourseCategories = styled.div`
    margin: 0 0 60px 0;
`;

let CategorieTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

let CategorieBottom = styled.div`
    transition: all 1s ease-in-out;
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

let CatogoryUl = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
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
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
        justify-content: center;
    }
    @media all and (max-width: 320px) {
    }
`;

let CategoryLi = styled.li`
    width: 23%;
    max-width: 350px;
    height: 224px;
    border: 1px solid #e2e8f0;
    box-shadow: 0px 0px 8px 0px #3b82f61f;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;

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
        width: 40%;
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
        width: 48%;
    }
    @media all and (max-width: 420px) {
    }
    @media all and (max-width: 380px) {
    }
    @media all and (max-width: 360px) {
        width: 80%;
    }
    @media all and (max-width: 320px) {
    }
`;

let CatogoryImgDiv = styled.div`
    width: 100px;
    height: 100px;
    background: #e0f2fe;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

let CatogoryImg = styled.img`
    width: 60%;
    height: auto;
    opacity: 1;
`;

let CategoryHeading = styled.h3`
    margin-bottom: 5px;
`;

let CategoryDetail = styled.p``;

let TopProductContainer = styled.div``;
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
let ProductRating = styled.div`
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
let ProductPrice = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #0f172a;
`;
let TopSellerContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`;
let TopSellerBottom = styled.div``;
let SellerUlContainer = styled.ul`
    display: flex;
    row-gap: 30px;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 40px;
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
        column-gap: 10px;
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
let SellerLiContainer = styled.li`
    max-width: 212px;
    width: 16%;
    height: 281px;
    opacity: 1;
    gap: 16px;
    border-radius: 16px;
    border-width: 1px;
    box-shadow: 0px 0px 8px 0px #3b82f61f;
    border: 1px solid #e2e8f0;
    padding: 16px;
    text-align: center;
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
        column-gap: 10px;
        width: 18%;
        max-width: 200px;
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        width: 32%;
        max-width: 230px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 680px) {
        width: 40%;
        max-width: 230px;
    }
    @media all and (max-width: 548px) {
    }
    @media all and (max-width: 480px) {
        width: 80%;
        max-width: 240px;
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
let SellerLink = styled(Link)``;
let SellerImg = styled.img`
    width: 100%;

    height: 132px;
    overflow: hidden;
    angle: 0 deg;
    opacity: 1;
    border-radius: 8px;
    margin-bottom: 12px;
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
let SellerName = styled.h3`
    font-family: Inter;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0%;
    color: #0f172a;
`;
let SellerCategoryL = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #334155;
    letter-spacing: 0%;
    margin-bottom: 10px;
`;
let SellerDetails = styled.div`
    display: flex;
    border-top: 1px solid #e2e8f0;
    padding: 15px 0 0 0;
    align-items: center;
    justify-content: space-between;
`;
let SellerRating = styled.span`
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 5px;
`;
let StarIconSeller = styled.img`
    width: 20px;
    height: 20px;
`;
let SellerProducts = styled.span`
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #334155;
`;
