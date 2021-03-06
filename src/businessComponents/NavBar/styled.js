import styled from "styled-components"

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(20, 20, 20);
  padding: 0 40px;
  position: fixed;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  z-index: 100;
  justify-content: space-between;
  box-shadow: 1px 1px 8px #0000007d;
  
  @media only screen and (max-width: 600px ){
    .nav-bar--hide-on-mobile{
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const NavListItem = styled.li`
  cursor: pointer;
  
  a{
    text-decoration: none;
    color: ${props => props.active ? "black" : "white"};
    
    &:hover {
      color: #b3b3b3;
    }
  }
  
  &:hover {
    color: #b3b3b3;
  }
`
