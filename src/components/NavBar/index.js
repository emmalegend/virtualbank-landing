import React from 'react';
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavItem,
  NavLinks,
  NavMenu,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const NavBar = ({toggle}) => {
    return (
       <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">BOOM!</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
       </>
    )
}

export default NavBar
