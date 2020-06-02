import styled from 'styled-components';

export const InlineLoadingContainer = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    height: 30px;
    justify-content: center;
`;

export const Point = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: ${props => props.color ? props.color : "white"};
    animation: animatedDots 1.5s infinite ease-in-out;

    &:not(:first-child){
        margin-left: .5em;
    }

    &:nth-child(2) {
      animation-delay: .5s;
    }
    
    &:nth-child(3) {
      animation-delay: 1s;
    }

    @keyframes animatedDots {  
        0% {
            opacity: .4;
            transform: scale(1, 1);
        }

        50% {
            opacity: 1;
            transform: scale(1.2, 1.2);
        }

        100% {
            opacity: .4;
            transform: scale(1, 1);
        }
    }
`;