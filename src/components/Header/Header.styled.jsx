import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";




export const Container = styled.header`
 margin-top: 20px;
 border-radius: 8px;
 padding-left: 126px;
 padding-right: 126px;
 max-height: 48px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 z-index: 999;
`;

export const Logo = styled(NavLink)`
     display: flex;
     align-items: center;
     text-decoration: none;
 p {
  transition: color 500ms ease-in-out;
    font-weight: 500;
    font-family: inherit;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    color: rgba(18, 20, 23, 1);
    &.active {
    color: #F4C550;
  }

  &:hover {
    color: blue;
  }
      }
`



export const LogoImg = styled.img`
  margin-right: 8px;
  width: 100%;
  max-height: 100%;
`;



