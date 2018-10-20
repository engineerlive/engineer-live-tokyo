import * as React from "react"
import Media from "react-media"
import { Link } from "react-router-dom"
import styled from "styled-components"

import nabvarLogo from "./navbar-logo.png"

interface StateType {
  isNavbarMenuOpen: boolean
}

class Header extends React.Component<{}, StateType> {
  public state = { isNavbarMenuOpen: false }

  public handleBurgerClick = (event: any) => {
    event.preventDefault()
    this.setState(prevState => ({
      isNavbarMenuOpen: !prevState.isNavbarMenuOpen
    }))
    console.log(this.state.isNavbarMenuOpen)
  }

  public closeBurgerMenu = (event: any) => {
    this.setState({ isNavbarMenuOpen: false })
  }

  public render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          <Navbar>
            <NavbarItem style={{ marginRight: "auto" }}>
              <Link to="/">
                <NavbarLogoImage src={nabvarLogo} />
              </Link>
            </NavbarItem>
            <Media query="(max-width: 768px)">
              {(matches: any) =>
                matches ? (
                  <NavbarItem style={{ marginTop: "0.5rem" }}>
                    <Burger onClick={this.handleBurgerClick}>
                      <BurgerLine aria-hidden="true" />
                      <BurgerLine aria-hidden="true" />
                      <BurgerLine aria-hidden="true" />
                    </Burger>
                  </NavbarItem>
                ) : (
                  <React.Fragment>
                    <NavbarItem>
                      <a href="#about">ABOUT</a>
                    </NavbarItem>
                    <NavbarItem>
                      <a href="#lineup">LINEUP</a>
                    </NavbarItem>
                    <NavbarItem>
                      <a href="#news">NEWS</a>
                    </NavbarItem>
                  </React.Fragment>
                )
              }
            </Media>
          </Navbar>
        </HeaderWrapper>
        <Media query="(max-width: 768px)">
          {(matches: any) =>
            matches ? (
              <React.Fragment>
                {this.state.isNavbarMenuOpen ? (
                  <BurgerMenu>
                    <BurgerMenuLinkWrapper>
                      <a href="#about" onClick={this.closeBurgerMenu}>
                        ABOUT
                      </a>
                    </BurgerMenuLinkWrapper>
                    <BurgerMenuLinkWrapper>
                      <a href="#lineup" onClick={this.closeBurgerMenu}>
                        LINEUP
                      </a>
                    </BurgerMenuLinkWrapper>
                    <BurgerMenuLinkWrapper>
                      <a href="#news" onClick={this.closeBurgerMenu}>
                        NEWS
                      </a>
                    </BurgerMenuLinkWrapper>
                  </BurgerMenu>
                ) : null}
              </React.Fragment>
            ) : null
          }
        </Media>
      </React.Fragment>
    )
  }
}

const HeaderWrapper = styled.div`
  height: 3rem;
  padding: 0 0.5rem;
`

const Navbar = styled.nav`
  display: flex;
`

const NavbarItem = styled.div`
  padding: 0.5rem 1rem;
`

const NavbarLogoImage = styled.img`
  height: 28px;
  width: 112px;
`

const Burger = styled.a`
  cursor: pointer;
  display: block;
  height: 1.5rem;
  width: 1.5rem;
`

const BurgerLine = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  margin-bottom: 4px;
  position: relative;
  background: #cdcdcd;
  border-radius: 2px;
`

const BurgerMenu = styled.div`
  background: #1a1a1a;
  color: #0a0a0a;
  line-height: 3em;
  text-align: center;
`

const BurgerMenuLinkWrapper = styled.div`
  border-bottom: solid 1px #0a0a0a;
`

export default Header
