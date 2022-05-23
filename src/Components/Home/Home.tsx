import { useState } from "react"
import styled from "styled-components"
import { Bottom } from "../Bottom/Bottom"
import { Header } from "../Header/Header"
import { SideBar } from "../SideBar/SideBar"
import { Trabalhos } from "../Trabalhos/Trabalhos"


const Div = styled.div`
    display: grid;
    grid-template-columns: 17rem 1fr ;
    grid-template-rows: 4.25rem auto 11.3125rem;
    grid-template-areas: 
    "side navbar"
    "side main"
    "side footer";
    @media screen and (max-width: 895px) {
        grid-template-areas: 
        "navbar navbar"
        "main main"
        "footer footer";
    }
    .sidebar{
        grid-area: side;
    }
    .header{
        grid-area: navbar;
    }
    .content{
        grid-area: main;
        padding: 1.25rem 2rem;

    }
    .bottom{
        grid-area: footer;
        padding: 1.25rem 2rem;
        

    }
`
export function Home(){
    const [isOpen, setIsOpen] = useState(false)
    const OpenMenu = (data: boolean) =>{
        setIsOpen(!isOpen)
    }
    return(
        <Div>
            <div className="sidebar"><SideBar openMenu={isOpen}/></div>
            <div className="header"><Header openMenu={()=>OpenMenu(!isOpen)}/></div>
            <div className="content" >
                
                <div className="title">
                    <Trabalhos/>
                </div>
            </div>
            <div className="bottom" >
                <Bottom/>
            </div>
        </Div>
    )
}