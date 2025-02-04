import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";



export const Nav = styled.nav`
    background:#000;
    height:100px;
    display:flex;
    justify-content:center;
    letter-spacing:1.8;
    font-weight:bold;
    font-size:1rem;
    position:sticky;
    top:0;
    align-items:center;
    z-index:10;

    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:1360px;
    z-index:1;
    width:100%;
    padding:  10px;
    max-width:1100px;
    font-size:21px;
   
`
export const NavLogo = styled(LinkR)`
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;

    @media screen and (max-width:760px){
        margin-lefth:-800px;
    }
`;

export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0px;
        right:0;
        transform:translate(-100%,90%);
        font-size:1.8rem;
        cursor:pointer;
        color:#fff;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;

    @media screen and (max-width:760px){
        display:none;
    }
`;

export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(LinkS)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    &.active{
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav`
display:flex;
align-items:center;
justify-content:flex-end;

@media screen and (max-width:760px){
    display:none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background:#01bf71;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
font-size:22px;
color:white;
padding:20px;
padding-left:38px;
padding-right:38px;
&:hover{
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`