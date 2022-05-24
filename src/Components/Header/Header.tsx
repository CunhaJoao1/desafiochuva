import styled from "styled-components"
import {FaGlobe} from "react-icons/fa"
import {IoMdArrowDropdown} from "react-icons/io"
import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react'
import { UserInfo } from "./UserInfo";

const titleColor = "#725C5C";
const titleFont = "Roboto";
const infoTitle = "Quicksand";
const infoColor = "#333333";

const Div = styled.div`
    height: 4.25rem;
    width: 100%;
    background-color: #FDF1EB;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .hamburguer-menu{
        display: none;
        position: fixed;
        z-index: 101;
        @media screen and (max-width: 895px) {
            display: flex;
        }
    }
    
    .titles{
        margin-left: 2rem;
        @media screen and (max-width: 895px) {
            margin-left: 3rem;
        }
        .sub-title{
        color: ${titleColor};
        font: 400 14px ${titleFont};
        @media screen and (max-width: 1373px) {
            font-size: 12px;
        }
        @media screen and (max-width: 728px) {
            font-size: 11px;
        }
        
        }
    .title{
        color: ${titleColor};
        font: 400 22px ${titleFont};  
        line-height: 25.78px;
        @media screen and (max-width: 1373px) {
            font-size: 16px;
            line-height: 15px;

        }
        @media screen and (max-width: 728px) {
            font-size: 14px;
        }
        }
    .code{
        color: ${titleColor};
        font: 400 14px ${titleFont};
        @media screen and (max-width: 1373px) {
            font-size: 12px;
        }
        }
    }

    
`

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
   
  
type HeaderProps = {
    openMenu : Function;
}
export function Header(props: HeaderProps){
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(0)
    const {width, height} = getWindowDimensions()

    const OpenMenu = () =>{
        setIsOpen(!isOpen)
        props.openMenu(isOpen)
    }
    return(
        <Div>
            
            <div className="hamburguer-menu" onClick={OpenMenu}>
                <Hamburger color="#ED7839" direction="right"/>
            </div>
            <div className="titles">
                <h4 className="sub-title">Anais do Simpósio Latino Americano de Ciências de Alimentos</h4>
                <h2 className="title">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </h2>
                <p className="code">ISSN: 1234-5678</p>
            </div>
            {
                width > 895? <UserInfo/> : ''
            }
            
        </Div>
    )
}
