import styled from 'styled-components'

export const SeasonItemContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #2d2d2d;
    max-width: 18em;
    padding: 0 20px;
    margin-right: 10px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
    a{
      display: flex;
      align-items: center;
      width: 100%;
      text-decoration: none;
    }

    &:hover{
      background-color: #424242;
    }

`

