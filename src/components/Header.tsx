import * as React from "react"
import Media from "react-media"
import { Link } from "react-router-dom"
import styled from "styled-components"

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
                <NavbarLogo>Engineer Live</NavbarLogo>
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
                      <Link to="/posts">NEWS</Link>
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
                      <Link to="/posts" onClick={this.closeBurgerMenu}>
                        NEWS
                      </Link>
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

const NavbarLogo = styled.div`
  height: 28px;
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
