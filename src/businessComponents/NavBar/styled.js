import styled from "styled-components"

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #383838;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  z-index: 100;
  justify-content: space-between;
  box-shadow: 1px 1px 8px #0000007d;
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
