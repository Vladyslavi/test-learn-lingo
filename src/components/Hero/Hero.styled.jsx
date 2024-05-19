import styled from "@emotion/styled";
import BackImg from '../../img/block.png'
import { NavLink } from "react-router-dom";

export const ContainerHome = styled.div`
  display: flex;
  gap: 24px;
`;


export const SectionGetStarted = styled.section`
  width: 720px;
  height: 530px;
  border-radius: 30px;
  background-color: rgba(248, 248, 248, 1);
  padding-left: 64px;
  padding-top: 98px;
  padding-bottom: 98px;
  box-sizing: border-box;
`;

export const TitelSectionHero = styled.h2`
   color: rgba(18, 20, 23, 1);
   font-weight: 550;
   font-size: 48px;
   line-height: 56px;
   text-align: left;
   margin-bottom: 32px;
`;


export const ContainerSpan = styled.div`
  display: inline-block;
  span {
    font-style: italic;
    font-weight: 400;
    display: flex;
    width: 195px;
    height: 40px;
    background: rgba(251, 233, 186, 1);
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding-right: 6px;
    padding-left: 8px;
  }
`

export const SectionImg = styled.div`
width: 568px;
height: 530px;
   display: flex;
    justify-content:center;
   
    background-image: url(${BackImg});
    background-size: auto;
    background-position:center bottom 0;
    background-repeat: no-repeat;
    background-size: 100%;  
`;


export const HeroTextScript = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    margin-bottom: 64px;
`


export const CatalogBtn = styled(NavLink)`
   
  background-color: rgba(244, 197, 80, 1);
  color: white;
  transition: background-color 500ms ease-in-out;
  border-radius: 12px;
  border: none;

  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  width: 267px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: darkblue;
  }

`