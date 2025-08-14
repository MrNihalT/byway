import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "../assets/icons/menu.png";

export default function Header() {
    let user = localStorage.getItem("token");
    const menuRef = useRef();
    let [menu, setMenu] = useState(false);
    const MenuToggle = () => {
        setMenu((prev) => !prev);
    };
    useEffect(() => {
        const handleclickoutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        };
        if (menu) {
            document.addEventListener("mousedown", handleclickoutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleclickoutside);
        };
    }, [menu]);
    return (
        <>
            <HeaderContainer>
                <Wrapper className="wrapper">
                    <NavContainer>
                        <NavLeftContainer>
                            <Link className="NavLeft" to={"/"}>
                                <h3>
                                    <Logo
                                        src={
                                            require("../assets/icons/logo.svg")
                                                .default
                                        }
                                        alt="Byway"
                                    />
                                </h3>
                                <BrandName>Byway</BrandName>
                            </Link>
                        </NavLeftContainer>
                        <NavRightContainer>
                            {user ? (
                                <Link to={"/wishlist"} className="icons">
                                    <WishListIcon
                                        src={
                                            require("../assets/icons/favorate.svg")
                                                .default
                                        }
                                    />
                                </Link>
                            ) : null}

                            <Link to={"/cart"} className="icons">
                                <CartIcon
                                    src={
                                        require("../assets/icons/cart.svg")
                                            .default
                                    }
                                />
                            </Link>
                            {user ? (
                                <>
                                    <Link to={"/notfication"} className="icons">
                                        <NotificationIcon
                                            src={
                                                require("../assets/icons/bell.svg")
                                                    .default
                                            }
                                        />
                                    </Link>
                                    <Link>
                                        <AccoutLogo>J</AccoutLogo>
                                    </Link>
                                </>
                            ) : null}

                            {user ? (
                                <Link
                                    className="LogOutBtn"
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        window.location.reload();
                                    }}
                                >
                                    Log Out
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to={"/auth/login"}
                                        className="LogInBtn"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        to={"/auth/signup"}
                                        className="SignUpBtn"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </NavRightContainer>
                        <NavRightMobileContainer>
                            <ButtonMenu onClick={MenuToggle}>
                                <MenuImg src={MenuIcon} />
                            </ButtonMenu>

                            <MobileMenuItems
                                ref={menuRef}
                                className={menu ? "open" : ""}
                            >
                                {user ? (
                                    <Link to={"/wishlist"} className="icons">
                                        <WishListIcon
                                            src={
                                                require("../assets/icons/favorate.svg")
                                                    .default
                                            }
                                        />
                                    </Link>
                                ) : null}

                                <Link to={"/cart"} className="icons">
                                    <CartIcon
                                        src={
                                            require("../assets/icons/cart.svg")
                                                .default
                                        }
                                    />
                                </Link>
                                {user ? (
                                    <>
                                        <Link
                                            to={"/notfication"}
                                            className="icons"
                                        >
                                            <NotificationIcon
                                                src={
                                                    require("../assets/icons/bell.svg")
                                                        .default
                                                }
                                            />
                                        </Link>
                                        <Link>
                                            <AccoutLogo>J</AccoutLogo>
                                        </Link>
                                    </>
                                ) : null}

                                {user ? (
                                    <Link
                                        className="LogOutBtn"
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            window.location.reload();
                                        }}
                                    >
                                        Log Out
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            to={"auth/login"}
                                            className="LogInBtn"
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            to={"auth/signup"}
                                            className="SignUpBtn"
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </MobileMenuItems>
                        </NavRightMobileContainer>
                    </NavContainer>
                </Wrapper>
            </HeaderContainer>
        </>
    );
}

//
let HeaderContainer = styled.header`
    display: flex;
    height: 65px;
    background: #ffffff;
    align-items: center;
    width: 100%;
    border: 1px solid #e2e8f0;
`;
let Wrapper = styled.div``;
let NavContainer = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;
let NavLeftContainer = styled.div`
    display: felx;
    align-items: center;
    justify-content: space-between;
`;
let Logo = styled.img`
    width: 31px;
    height: 40px;
`;
let BrandName = styled.h3`
    font-weight: 500;
    font-size: 16px;
    color: #334155;
`;
let NavRightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: center;
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
        display: none;
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
let WishListIcon = styled.img`
    height: 24px;
    width: 24px;
`;
let CartIcon = styled.img`
    height: 24px;
    width: 24px;
`;
let NotificationIcon = styled.img`
    height: 24px;
    width: 24px;
`;
let AccoutLogo = styled.h3`
    background: #334155;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: #ffffff;
    font-weigh: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
let NavRightMobileContainer = styled.div`
    display: none;
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
        display: block;
        transition: transform 0.5s ease-in-out;
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
let ButtonMenu = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;
let MenuImg = styled.img`
    width: 20px;
    height: 20px;
`;
let MobileMenuItems = styled.div`
    position: fixed;
    // background: #ffd7d7;
    background: #8dd8fbff;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    padding: 80px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 5%;
    color: #ffffff;
    z-index: 1000;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.5s ease-in-out;
    border: 2px solid #acd8ecff;

    &.open {
        transform: translateX(0);
        transition: transform 0.5s ease-in-out;
    }
`;
