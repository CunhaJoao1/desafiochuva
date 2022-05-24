import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";



const Div = styled.div`
    width: 100%;
    height: 18rem;
    text-align: center;
    h3{
        font: 700 18px 'Roboto';
        color: #ED7839;
    }
    .other-works{
        font: 500 14px 'Quicksand';
        color: #ED7839;
        text-decoration: solid #ED7839;
        margin-bottom: 3rem;
    }
    .text{
        font: 400 14px 'Quicksand';
        margin: 2rem;
    }
    .divider{
            border-bottom: 1px solid #E7E7E7;
            position: relative;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .centralize-button{
                position: absolute;
                text-align: center;
                left: 0;
                right: 0;
            }
            .btn-add{
                background: linear-gradient(to top, #f0813d, #f48e41, #f89a47, #fba64d, #feb254);
                padding: .8rem 2rem;
                border: none;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                
                margin: auto;
                
                p{
                    font: 700 15px 'Quicksand';
                    color: white;
                    line-height: 55%;
                }
            }
        }
`
type DisplayProps = {
    clickButton: Function;

}
export function DisplaySentQuestion(props: DisplayProps){
    const [isCliked, setIsCliked] = useState(false)
    const ClickButton = () =>{
        setIsCliked(!isCliked)
        props.clickButton(isCliked)
    }
    return(
        <Div>
            <h3>Seu tópico foi enviado com sucesso! :D</h3>
            <p className="text">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
            <p className="other-works">Descubra outros trabalhos!</p>

            <div className="divider">
                    <div className="centralize-button">
                        <button className="btn-add" onClick={ClickButton}> <p>criar novo tópico</p></button>

                    </div>
                        
                </div>
        </Div>
    )
}