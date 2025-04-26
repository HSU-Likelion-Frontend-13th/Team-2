import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6vw;
  background-color: #ffffff;
  height: 120px;
  position: sticky;
  top: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
`;

const Logo = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: #5e94ff;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1rem;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.75rem;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo href="index.html">PORTFOLIO.</Logo>
      <Nav>
        <NavList>
          <li><NavItem href="#about">ABOUT</NavItem></li>
          <li><NavItem href="#hobby">HOBBY</NavItem></li>
          <li><NavItem href="#contact">CONTACT</NavItem></li>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
}