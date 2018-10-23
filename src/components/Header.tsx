import * as React from "react"
import Media from "react-media"
import { HashLink as Link } from "react-router-hash-link"
import styled from "styled-components"

interface StateType {
  isNavbarMenuOpen: boolean
}

class Header extends React.Component<{}, StateType> {
  public state = { isNavbarMenuOpen: false }

  public componentDidMount() {
    let prevOffset = 0
    let ticking = false
    const header = document.getElementsByClassName("header")![0]
    header.classList.add("show")

    document.addEventListener("scroll", () => {
      if (ticking) {
        return
      }
      window.requestAnimationFrame(() => {
        if (window.pageYOffset < 160) {
          header.classList.add("show")
        } else if (prevOffset < window.pageYOffset) {
          header.classList.remove("show")
          prevOffset = window.pageYOffset
        } else if (prevOffset > window.pageYOffset) {
          header.classList.add("show")
          prevOffset = window.pageYOffset
        }
        ticking = false
      })
      ticking = true
    })
  }

  public handleBurgerClick = (event: any) => {
    event.preventDefault()
    this.setState(prevState => ({
      isNavbarMenuOpen: !prevState.isNavbarMenuOpen
    }))
  }

  public closeBurgerMenu = (event: any) => {
    this.setState({ isNavbarMenuOpen: false })
  }

  public render() {
    return (
      <header className="header">
        <HeaderWrapper>
          <Navbar>
            <NavbarItem style={{ marginRight: "auto" }}>
              <Link to="/">
                <NavbarLogo>EngineerLive</NavbarLogo>
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
                      <Link to="/#about">ABOUT</Link>
                    </NavbarItem>
                    <NavbarItem>
                      <Link to="/#lineup">LINEUP</Link>
                    </NavbarItem>
                    <NavbarItem>
                      <Link to="/#news">NEWS</Link>
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
                      <Link to="/#about" onClick={this.closeBurgerMenu}>
                        ABOUT
                      </Link>
                    </BurgerMenuLinkWrapper>
                    <BurgerMenuLinkWrapper>
                      <Link to="/#lineup" onClick={this.closeBurgerMenu}>
                        LINEUP
                      </Link>
                    </BurgerMenuLinkWrapper>
                    <BurgerMenuLinkWrapper>
                      <Link to="/#news" onClick={this.closeBurgerMenu}>
                        NEWS
                      </Link>
                    </BurgerMenuLinkWrapper>
                  </BurgerMenu>
                ) : null}
              </React.Fragment>
            ) : null
          }
        </Media>
      </header>
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
  color: #fff;
  font-family: "Press Start 2P";
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
  background: #dad74c;
  border-radius: 2px;
`

const BurgerMenu = styled.div`
  background: #1a1a1a;
  color: #0a0a0a;
  line-height: 3em;
  text-align: center;
  position: fixed;
  width: 100%;
`

const BurgerMenuLinkWrapper = styled.div`
  border-bottom: solid 1px #0a0a0a;
`

export default Header
