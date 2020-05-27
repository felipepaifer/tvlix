import styled from 'styled-components'

const TvContainer = styled.div`
    width: ${props => {
        if (props.fluid) return "100%"
        else if (props.width) return props.width
        else return null
    }};
    max-width: ${props => props.maxWidth ? props.maxWidth : null};
    min-width: ${props => props.minWidth ? props.minWidth : null};
    height: ${props => {
        if (props.fullHeight) return "100vh"
        else if (props.height) return props.height
        else return null
    }};
    max-height: ${props => props.maxHeight ? props.maxHeight : null};
    min-height: ${props => props.minHeight ? props.minHeight : null};
    margin-top: ${props => props.mt ? props.mt : null};
    margin-bottom: ${props => props.mb ? props.mb : null};
    margin-right: ${props => props.mr ? props.mr : null};
    margin-left: ${props => props.ml ? props.ml : null};
    margin: ${props => props.m ? props.m : null};
    padding: ${props => props.p ? props.p : null};
    padding-top: ${props => props.pt ? props.pt : null};
    padding-bottom: ${props => props.pb ? props.pb : null};
    padding-right: ${props => props.pr ? props.pr : null};
    padding-left: ${props => props.pl ? props.pl : null};
    border: ${props => props.border ? props.border : null};
    border-bottom: ${props => props.bb ? props.bb : null};
    border-right: ${props => props.br ? props.br : null};
    border-radius: ${props => props.radius ? props.radius : null};
    background-image: ${props => {
        if (props.bgImage && !props.linearGradient) return `url(${props.bgImage})`
        else if (props.bgImage && props.linearGradient) return `linear-gradient(0, rgba(0, 0, 0, 0.27), #00000078), url(${props.bgImage})`
        else return null
    }};
    background-position: ${props => {
        if (props.bgImage) return "center"
        else return null
    }};
    background-size: ${props => {
        if (props.bgImage) return "cover"
        else return null
    }};
    background-color: ${props => {
        if (props.whiteBg) return "white"
        else return props.bgColor
    }};
    display: ${props => {
        if (props.flex) return "flex"
        else if (props.grid) return "grid"
        else if (props.hideOnDesktop) return "none"
        else return null
    }};
    grid-template-columns: ${props => {
        if (props.gridColumns) return props.gridColumns
        else if (props.columns === 3) return "1fr 1fr 1fr"
        else return null
    }};
    grid-column-gap: ${props => {
      if (props.columnGap) return `${props.columnGap} !important`
      else if (props.grid) return "20px"
      else return null
    }};
    grid-row-gap: ${props => {
      if (props.rowGap) return `${props.rowGap} !important`
      else if (props.grid) return "20px"
      else return null
    }};
    justify-content: ${props => {
        if (props.justifyBetween) return "space-between"
        else if (props.justifyCenter) return "center"
        else if (props.justifyStart) return "flex-start"
        else if (props.justifyEnd) return "flex-end"
    }};
    align-items: ${props => {
        if (props.alignCenter) return "center"
        if (props.alignBottom) return "flex-end"
        else return null
    }};
    position: ${props => {
        if (props.absolute) return "absolute"
        else if (props.fixed) return "fixed"
        else return null
    }};
    flex-direction: ${props => {
        if (props.column) return "column"
        else return null
    }};
    box-sizing: border-box;
    overflow: ${props => {
        if (props.overflowAuto) return "auto"
        else if (props.overflowHidden) return "hidden"
        else return null
    }};
    flex: ${props => {
        if (props.flex1) return "1"
        else return null
    }};
    flex-wrap: ${props => props.wrap ? "wrap" : null};
    border-radius: ${props => {
        if (props.radius) return props.radius
        else return null
    }};
    box-shadow: ${props => {
        if (props.shadow) return "1px 8px 8px #00000014"
        else return null
    }};
    opacity: ${props => {
        if (props.opacity) return props.opacity
        else if (props.inactive) return .2 
        else return null
    }};
    cursor: ${props => props.cursor ? props.cursor : null};
    color: ${props => props.color ? props.color : null};
    overflow: ${props => props.overflowAuto ? "auto" : null};
    right: ${props => props.right ? props.right : null};
    z-index: ${props => props.zIndex ? props.zIndex : null};

    &:hover{
        background-color: ${props => props.bgColorOnHover ? props.bgColorOnHover : null};
    }

    @media only screen and (max-width: 600px){
      display: ${props => {
        if (props.hideOnMobile) return "none" 
        else if (props.hideOnDesktop) return "flex !important"
        else return null
      }};
    }
    


    //CUSTOM SCROLL BAR

    &::-webkit-scrollbar {
        width: 8px;  
        background-color: transparent;
    }
     
    &::-webkit-scrollbar-track {
        width: 1px;
        background-color: transparent;
    }
     
    &::-webkit-scrollbar-thumb {
        width: 1px;
        background-color: #ccc;
        -webkit-box-shadow: inset 1px 1px 0px #eee ;
    }


    .fade-in-enter {
        opacity: 0.01;
      }
      
      .fade-in-enter.fade-in-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in;
      }
      
      .fade-in-leave {
        opacity: 1;
      }
      
      .fade-in-leave.fade-in-leave-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
      }
      
      .fade-in-appear {
        opacity: 0.01;
      }
      
      .fade-in-appear.fade-in-appear-active {
        opacity: 1;
        transition: opacity .5s ease-in;
      }



.modal-enter {
  margin-top: 200vh;
}

.modal-enter.modal-enter-active {
  margin-top: 0;
  transition: margin-top .2s ease-in-out;
}

.modal-leave {
  margin-top: 200vh;
}

.modal-leave.modal-leave-active {
  margin-top: 200vh;
  transition: margin-top .2s ease-in-out;
}

.modal-appear {
  margin-top: 200vh;
}

.modal-appear.modal-appear-active {
  margin-top: 0;
  transition: margin-top .2s ease;
}



.overlay-enter {
  opacity: 0.01;
}

.overlay-enter.overlay-enter-active {
  opacity: 1;
  transition: opacity .4s ease-in;
}

.overlay-leave {
  opacity: 1;
}

.overlay-leave.overlay-leave-active {
  opacity: 0.01;
  transition: opacity .4s ease-in;
}

.overlay-appear {
  opacity: 0.01;
}

.overlay-appear.overlay-appear-active {
  opacity: 1;
  transition: opacity .4s ease-in;
}

@media only screen (max-width: 600px){
    max-width: ${props => props.maxWidthOnMobile ? props.maxWidthOnMobile : null};
}


`

export default TvContainer
