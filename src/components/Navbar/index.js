import React from 'react';
import { FaBars } from "react-icons/fa"
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements"
import logo from "./logo.svg"
import jadwal from './schedule.svg'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <div >
                            <img src={logo} style={{ height: "60px" }} />
                            <img src={jadwal} style={{ height: "60px" }} />
                        </div>

                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem >
                            <NavLinks to="about">
                                Teguh
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">
                                Jazreel
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">
                                Fauzan
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">
                                Pelayanan
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
>               </NavbarContainer>
            </Nav >
        </>
    )
}

export default Navbar
