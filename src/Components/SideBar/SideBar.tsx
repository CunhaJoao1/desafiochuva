import { useState, useEffect } from "react";
import styled from "styled-components"
import { UserInfo } from "../Header/UserInfo";
import { Section } from "./Sections";


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



const titleFont = "700 30px Roboto";


const Header = styled.div`
    width: 100%;
    height: 4.25rem;
    background-image: linear-gradient(to top, #ee7a3a, #f3893f, #f79745, #fba54c, #ffb354);
    box-shadow: 8px 2px 8px -3px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: white;
        font: ${titleFont} ;
    }
    
`
const Div = styled.div`
    position: fixed;
    width: 17rem;
    height: 100%;
    box-shadow: 8px 2px 8px -3px rgba(0,0,0,0.1);
    background-color: white;
    .image{
        img{
            width: 100%;
        }
    }
    @media screen and (max-width: 895px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        height: 100vh;
    }

`
type SideProps = {
    openMenu: boolean;
}

export function SideBar(props: SideProps){
    const [isOpen, setIsOpen] = useState(props.openMenu)
    const {height, width} = useWindowDimensions()
    const max_width = 896;
    
    return(
        <>
        {   width < max_width && props.openMenu===true? 
            <Div open-data={isOpen}>
                <Header>
                    <h1>SLACA 2019</h1>
                </Header>
                <div className="image">
                    <img src="..\assets\dewey 4.png" alt="" />
                </div>
                <Section sections={["Apresentação", "Comitês", "Autores", "Eixos temáticos", "Trabalhos", "Contato"]}/>
                <UserInfo/>
            </Div>
       :
       ''}
       {
           width > max_width? 
           <Div open-data={isOpen}>
                <Header>
                    <h1>SLACA 2019</h1>
                </Header>
                <div className="image">
                    <img src="..\assets\dewey 4.png" alt="" />
                </div>
                <Section sections={["Apresentação", "Comitês", "Autores", "Eixos temáticos", "Trabalhos", "Contato"]}/>
            </Div>
       :''}
        </>
    )
}