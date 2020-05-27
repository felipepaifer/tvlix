import React from "react"
import { Link } from "react-router-dom"

// ASSETS
import {NavBarContainer, NavItem, NavList, NavListItem} from "./styled"
import TvLabel from "../../structureComponents/modules/TvLabel";
import TvContainer from "../../structureComponents/modules/TvContainer";
import TvButton from "../../components/TvButton/TvButton";


export default function NavBar() {
    return (
        <NavBarContainer>
            <TvContainer flex alignCenter>
                <TvLabel style={{ fontSize: "32px" }} color="#e50914" white bold>Tvlix</TvLabel>
                <TvContainer flex alignCenter ml="40px">
                   <NavList>
                       <NavListItem>
                           <Link to="/tv-shows">TV Shows</Link>
                       </NavListItem>
                   </NavList>
                </TvContainer>
            </TvContainer>
            <TvContainer flex alignCenter>
                <TvContainer>
                    <TvButton transparent color="white">Login</TvButton>
                </TvContainer>
                <TvContainer ml="20px">
                    <TvButton bgColor="#e50914" color="white">Sign up</TvButton>
                </TvContainer>
            </TvContainer>
        </NavBarContainer>
    )
}
