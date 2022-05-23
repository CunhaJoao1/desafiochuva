import styled from "styled-components";
import { HeaderCards } from "../Genericos/Header";


const Div = styled.div`
    max-height: 27.5rem;
    width: 100%;
    border: 1px solid #ECECEC;

    border-radius: 3px;
    overflow-y: auto;
    @media screen and (max-width: 1372px) {
            max-height: 15rem;
            margin-top: 2rem;
        }
    p{
        font: 400 14px 'Quicksand';
        color: #5C5C5C;
        b{
            font: 700 14px 'Quicksand';
            color: #5C5C5C;
        }
    }
    .conteudo{
        padding: 1rem;
        max-width: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        @media screen and (max-width: 1372px) {
            max-width: 100%;
        }
    .autores{
        margin: 2rem 0;
        .autores-title{
            font: 700 14px 'Quicksand';
            color: #5C5C5C;
        }
    }
    .universidades{
        p{
            font: 400 13px 'Quicksand';
            color: #ADA0A0;

        }
    }
    }
    
`
type DetalhesProps={
    tipo: string;
    tema: string;
    palavrasChaves: string[];

}
export function Detalhes(props: DetalhesProps){
    return(
        <Div>
            <div className="header">
                <HeaderCards title="Detalhes"/>
            </div>
            <div className="conteudo">
                <div className="first-label">
                    <p>Tipos de apresentação: <b>{props.tipo}</b></p>
                    <p>Eixo temático: <b>{props.tema}</b></p>
                    <p>Palavras-chaves: <b>{props.palavrasChaves}</b></p>
                </div>
                <div className="autores">
                    <p className="autores-title">Autores:</p>
                    <p>Galileo Galilei</p>
                    <p>Berta Lange de Morretes</p>
                    <p>Isaac Newton</p>
                    <p>Cesar Lattes</p>
                    <p>Stephen Hawking</p>
                </div>
                <div className="universidades">
                    <p>Universidade Estadual de Campinas</p>
                    <p>Universidade de São Paulo</p>
                    <p>Instituto Nacional de Pesquisas Espaciais</p>
                    <p>Universidade Federal do Rio de Janeiro</p>
                    <p>Universidade Federal do Piauí</p>
                </div>
            </div>
        </Div>
    )
}