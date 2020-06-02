import styled from "styled-components"


export const TvSelectAnchor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    max-width: 16em;
    padding: 0 20px;
    border: 1px solid white;
    cursor: pointer;
`

export const TvSelectAnchorIconContainer = styled.div`
  display: flex;
  
  .tv-select--select-anchor__icon{
    transform: rotate(${props => props.active ? "180deg" : "0"});
  }
`

export const TvSelectAnchorPlaceholder = styled.label`
  color: white;
  font-size: 14px;
  cursor: pointer;
`

export const TvSelectDropdown = styled.div`
  width: 100%;
  max-width: 16em;
  background-color: white;
  padding: 10px;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity .2s ease;
  margin-top: 10px;
  position: absolute;
  overflow: auto;
  max-height: 24vh;
  pointer-events: ${props => props.active ? "all" : "none"};
`


export const TvSelectDropdownItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #eee;
  }
`

export const TvSelectDropdownItemLabel = styled.label`
  font-size: 14px;
  color: #333;
`

export const TvSelectContainer = styled.div`
  width: 100%;
  max-width: 16em;
`
