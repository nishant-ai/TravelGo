import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navigation from "./Navigations";
import { AiOutlineStar } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import MobileNavigation from "./MobileNavigation";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickHandler = () => {
    setOpenNav(!openNav);
  };
  return scrollPosition < 400 ? (
    <Nav>
      <Left>
        <a href="/">
          <Logo src={require("../../assets/TravelGo.png")} />
        </a>
      </Left>
      <Navigation />
      {openNav && <MobileNavigation />}
      <Right>
        <FavIcon size="42" />
        <Profile src={require("../../assets/Profile.png")} alt="Profile" />
        <Login href="/signin" style={{ textDecoration: "none" }}>
          Login
        </Login>
      </Right>
      <MenuIconCon>
        {openNav ? (
          <CrossIcon onClick={clickHandler} size="29" />
        ) : (
          <MenuIcon onClick={clickHandler} size="37" />
        )}
      </MenuIconCon>
    </Nav>
  ) : (
    <FixedNav>
      <Left>
        <a href="/">
          <Logo src={require("../../assets/TravelGo.png")} />
        </a>
      </Left>
      <Navigation />
      {openNav && <MobileNavigation />}
      <Right>
        <FavIcon size="42" />
        <Profile src={require("../../assets/Profile.png")} alt="Profile" />
        <Login href="/signin" style={{ textDecoration: "none" }}>
          Login
        </Login>
      </Right>
      <MenuIconCon>
        {openNav ? (
          <CrossIcon onClick={clickHandler} size="29" />
        ) : (
          <MenuIcon onClick={clickHandler} size="37" />
        )}
      </MenuIconCon>
    </FixedNav>
  );
}

export default Navbar;

const Nav = styled.div`
  padding: 0 5rem;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  backdrop-filter: blur(5px);
  box-shadow: -2px 2px 10px -3px #fff;
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
  @media (max-width: 480px) {
    width: 100vw;
    }
`;
const FixedNav = styled.div`
  padding: 0 5rem;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  backdrop-filter: blur(5px);
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const MenuIconCon = styled.div`
  display: none;
  width: 4rem;

  @media (max-width: 600px) {
    display: flex;
  }
`;

const MenuIcon = styled(MdMenu)`
      cursor:pointer;
   
      color:white

`;
const CrossIcon = styled(ImCross)`
  cursor: pointer;
  color: white;
`;

const FavIcon = styled(AiOutlineStar)`
  color: orangered;
  cursor: pointer;
  margin: 0 0.6rem;

  :hover {
    transform: scale(1.01);
    color: orange;
  }
`;
const Left = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const Logo = styled.img`
  height: 50%;
  cursor: pointer;


  @media (max-width:600px) {
      height: 20%;
  }
`;

const Right = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Profile = styled.img`
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

const Login = styled.a`
  background-color: #00a651;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: white;
    color: #00a651;
    transition: 0.3s;
  }
  @media (max-width: 480px) {
    margin: 0 2vw;
  }
`;
