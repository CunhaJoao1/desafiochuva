import styled from "styled-components";
import {FaDownload} from "react-icons/fa"
import {AiTwotoneStar} from "react-icons/ai"
import { Detalhes } from "./Detalhes";
import { Resumos } from "./Resumos";
import { Discussao } from "./Discussao/Discussao";

const FontTitles = "Roboto"
const Div = styled.div`
    .title-download{    
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 1372px) {
            flex-direction: column;
            align-items:flex-end ;
            
        }
        .title{
            font: 900 20px ${FontTitles};
            max-width: 49.125rem;
            color: #ED7839;
            width: 100%;
            @media screen and (max-width: 1372px) {
            text-align: center;
            @media screen and (max-width: 500px) {
                font-size: 15px;
                width: 100%;
            }
        }
        }
        
        .como-citar{
            margin-top: .75rem;
            font: 500 15px ${FontTitles};
            text-align: center;
            color: #ED7839;
            cursor: pointer;
            
        }
        .buttons{
            display: flex;
            
            .btn{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ED7839;
                height: 2rem;
                padding: 0 .8rem;
                border-radius: 4px;
                margin-left: 5px;
                cursor: pointer;
                @media screen and (max-width: 895px) {
                    
                }
                p{
                    color: white;
                    font: 500 16px ${FontTitles};
                    @media screen and (max-width: 895px) {
                        font-size: 14px;
                }
                }
                
            }
            .doi{
                    img{
                        width: 1.5rem;
                    }
                }
        }
    }
`
const VideoDetalhe = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1372px) {
        flex-direction: column;
        align-items: center;
    }
    .video{
        max-width: 48.93rem;
        .video-name{
            position: absolute;
            z-index: 50;
            margin: 2.1875rem 2rem;
            font: 900 24px ${FontTitles};
            color: white;
            @media screen and (max-width: 1120px) {
               font-size: 20px;
            }
            @media screen and (max-width: 630px) {
                font-size: 20px;
                margin: .5rem;
            }
            @media screen and (max-width: 490px) {
                font-size: 17px;

            }
            @media screen and (max-width: 425px) {
                font-size: 15px;

            }
        }
        .video-autor{
                position: absolute;
                z-index: 50;
            margin: 3.75rem 2rem;
            bottom: 0;
            display: flex;
            align-items: center;
            @media screen and (max-width: 895px) {
                margin-bottom: 1.5rem;
            }
            
            img{
                border: 1px solid #ED7839;
                border-radius: 50%;
                padding: .2rem;
                @media screen and (max-width: 895px) {
                width: 4rem;
            }
            }
            h3{
                color: white;
                font: 900 34px ${FontTitles};
                display: flex;
                flex-direction: column;
                margin-left: 1rem;
                span{
                    font-size: 20px;
                }
                @media screen and (max-width: 1120px) {
                font-size: 30px;
                span{
                    font-size: 15px;
                    }
                }
                @media screen and (max-width: 630px) {
                font-size: 25px;
                span{
                    font-size: 12px;
                    }
                }
                @media screen and (max-width: 490px) {
                    font-size: 23px;
                    span{
                    font-size: 12px;
                    }
                }
                @media screen and (max-width: 425px) {
                    font-size: 20px;
                    span{
                    font-size: 10px;
                    }
                }
            }
        }
        
        position: relative;
        .overlayer{
            position: absolute;
            z-index: 10;
            background-color: #8D350680;
            top: 0;
            width: 100%;
            border-radius:3px;
            height: 99%;
            @media screen and (max-width: 1120px) {
                width: 40rem;
            }
            @media screen and (max-width: 975px) {
                width: 35rem;
            }
            @media screen and (max-width: 630px) {
                width: 30rem;
            }
            @media screen and (max-width: 490px) {
                width: 25rem;
            }
            @media screen and (max-width: 425px) {
                width: 20rem;
            }
        }
        .video-player{
            border-radius:3px;
            width: auto;
            @media screen and (max-width: 1120px) {
                width: 40rem;
            }
            @media screen and (max-width: 975px) {
                width: 35rem;
            }
            @media screen and (max-width: 630px) {
                width: 30rem;
            }
            @media screen and (max-width: 490px) {
                width: 25rem;
            }
            @media screen and (max-width: 425px) {
                width: 20rem;
            }
        }
    }
`
const RESUMO_CONTENT = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum minus corporis ab dicta, a harum quae totam amet magni, in quam excepturi voluptatem optio. Sint quae placeat illo saepe dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, iure, laudantium ex sint vel eos maiores quas animi impedit dignissimos quam voluptatibus, iste voluptate hic minus unde deleniti suscipit tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id velit, nam necessitatibus sunt praesentium aspernatur debitis nesciunt rerum, tempore iusto temporibus! Distinctio eaque esse assumenda iure laborum ut maxime expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti nulla distinctio ipsum modi, optio cumque impedit consequuntur assumenda laborum officiis. Dignissimos numquam hic minima repellat sed voluptatibus neque omnis obcaecati. "

export function Trabalhos(){
    return(
        <Div>
            <div className="title-download">
                <h3 className="title">Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP</h3>

                <div className="citar">
                    <div className="buttons">
                        <div className="btn download"><p><FaDownload/></p><p>Download</p></div>
                        <div className="btn star"><p><AiTwotoneStar size={'1.5em'}/></p></div>
                        <div className="btn doi"><img src="assets\doi.png" alt="" /></div>
                    </div>
                    <p className="como-citar">COMO CITAR ESSE TRABALHO?</p>
                </div>

            </div>
            <VideoDetalhe>
                <div className="video">
                    <h5 className="video-name">Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h5>

                    <div className="video-autor">
                        <img src="assets\video-img.svg" alt="" />
                        <h3>Beatriz Christiane Melo <span>FCA / Universidade Estadual de Campinas</span> </h3>
                    </div>

                    <div className="overlayer"></div>
                        <img className="video-player" src="assets\video.png" alt="" />                  
                </div>
                <div className="detalhes">
                    <Detalhes tema="Alimentação e saúde" tipo="Pôster" palavrasChaves={["Alimentos, ", "funcionais, ", "alimentação escolar"]}/>
                </div>
            </VideoDetalhe>
            <div className="resumos">
                <Resumos content={RESUMO_CONTENT}/>
            </div>
            <div className="discussao">
                <Discussao/>
            </div>
        </Div>
    )
}