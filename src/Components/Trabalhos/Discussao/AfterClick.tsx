import styled from "styled-components";
import {FaPlus} from "react-icons/fa"
import { useState } from "react";



const Div = styled.div`
.conteudo{
        padding: 1rem;
        p{
            font: 500 15px 'Quicksand';
            color: #5C5C5C;
        }
        .top-content{
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            .description{
                max-width: 39rem;
                margin-bottom: 2rem;
            }
            .title{

            }
            .icons{
                margin: 1.6875rem 0 2.1875rem 0;
                .icon2{
                    margin: 0 3.35rem;
                }
            }
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
                padding: .5rem 1rem;
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
    }
`
type AfterProps = {
    sendData: Function;
}
export function AfterClick(props: AfterProps){
    const [isOpen, setIsOpen] = useState(false)
    const openCreator = () =>{
        setIsOpen(isOpen)
        props.sendData(isOpen)
    }
    
    return(
        <Div>
            <div className="conteudo">
                <div className="top-content">
                    <h5 className="title">Compartilhe suas ideias ou dúvidas com os autores!</h5>
                    <div className="icons">
                        <img src="assets\icone1.svg" alt="" />
                        <img className="icon2"src="assets\icone2.svg" alt="" />
                        <img src="assets\icone3.svg" alt="" />
                    </div>
                    <p className="description">Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
                </div> {/* //top-content */}
                <div className="divider">
                    <div className="centralize-button">
                        <button className="btn-add" onClick={openCreator} > <p><FaPlus size={'1.5em'}/></p> <p>criar tópico</p></button>

                    </div>
                        
                </div>
            </div>
        </Div>
    )
}