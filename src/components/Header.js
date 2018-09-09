import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";
import styled from "styled-components";

import nabvarLogo from "./navbar-logo.png";

const HeaderWrapper = styled.div`
  height: 3rem;
  padding: 0 0.5rem;
`;

const Navbar = styled.nav`
  display: flex;
`;

const NavbarItem = styled.div`
  padding: 0.5rem 1rem;
`;

const NavbarLogoImage = styled.img`
  height: 28px;
  width: 112px;
`;

const Burger = styled.a`
  cursor: pointer;
  display: block;
  height: 1.5rem;
  width: 1.5rem;
`;

const BurgerLine = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  margin-bottom: 4px;
  position: relative;
  background: #cdcdcd;
  border-radius: 2px;
`;

const BurgerMenu = styled.div`
  background: #1a1a1a;
  color: #0a0a0a;
  line-height: 3em;
  text-align: center;
`;

const BurgerMenuLinkWrapper = styled.div`
  border-bottom: solid 1px #0a0a0a;
`;

class Header extends Component {
  state = { isNavbarMenuOpen: false };

  handleBurgerClick = event => {
    event.preventDefault();
    this.setState(prevState => ({
      isNavbarMenuOpen: !prevState.isNavbarMenuOpen
    }));
    console.log(this.state.isNavbarMenuOpen);
  };

  closeBurgerMenu = event => {
    this.setState({ isNavbarMenuOpen: false });
  };

  render() {
    return (
      <Fragment>
        <HeaderWrapper>
          <Navbar>
            <NavbarItem style={{ marginRight: "auto" }}>
              <Link to="/">
                <NavbarLogoImage src={nabvarLogo} />
              </Link>
            </NavbarItem>
            <Media query="(max-width: 768px)">
              {matches =>
                matches ? (
                  <NavbarItem style={{ marginTop: "0.5rem" }}>
                    <Burger onClick={this.handleBurgerClick}>
                      <BurgerLine aria-hidden="true" />
                      <BurgerLine aria-hidden="true" />
                      <BurgerLine aria-hidden="true" />
                    </Burger>
                  </NavbarItem>
                ) : (
                  <Fragment>
                    <NavbarItem>
                      <Link to="/posts">お知らせ</Link>
                    </NavbarItem>
                    <NavbarItem>
                      <Link to="/lineup">LINEUP</Link>
                    </NavbarItem>
                  </Fragment>
                )
              }
            </Media>
          </Navbar>
        </HeaderWrapper>
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <Fragment>
                {this.state.isNavbarMenuOpen ? (
                  <BurgerMenu>
                    <BurgerMenuLinkWrapper>
                      <Link to="/posts" onClick={this.closeBurgerMenu}>
                        お知らせ
                      </Link>
                    </BurgerMenuLinkWrapper>
                    {/* <BurgerMenuLinkWrapper>
                      <Link to="#">hoge</Link>
                    </BurgerMenuLinkWrapper> */}
                  </BurgerMenu>
                ) : null}
              </Fragment>
            ) : null
          }
        </Media>
      </Fragment>
    );
  }
}

export default Header;
