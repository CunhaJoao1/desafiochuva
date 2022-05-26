import styled from "styled-components";
import BottomImage from "/src/assets/galoa.png"

const Div = styled.footer`
    border-top: 1px solid #e3e3e3;
    display: flex;
    padding-top: 2rem;
    margin-bottom: 5rem;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
    .image{
            img{
                width: 15rem;
            }
            .saiba-mais{
                width: 15rem;
                height: 2.5rem;
                border-radius:8px ;
                background-color: #71478E;

                display: flex;
                cursor: pointer;
                p{
                    margin: auto;
                    color: white;
                    font: 500 16px 'Quicksand';                    
                }
            }
        }
        .description{
            margin: .5rem 0 0 2rem; 
            max-width: 80%;
            p{
                color: #060606;
                font: 500 18px 'Quicksand';
                span{
                font: 600 18px 'Quicksand';
                }
            }
            .bottom-text1{
                margin-bottom: 3rem;
            }
        }
`

export function Bottom(){
    return(
        <Div>
            <div className="image">
                    <img src={BottomImage} alt="" />
                    <div className="saiba-mais"><p>Saiba mais</p></div>
            </div>
            <div className="description">
                <p className="bottom-text1"> <span>Preservar a memória do evento e ampliar o acesso ao conhecimento científico</span> gerado em eventos é a razão de ser da plataforma Galoá Proceedings.</p>

                <p>Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica, mantendo aceso o debate científico formentado pelos encontros e aumentando o impacto do evento.</p>
            </div>
        </Div>
    )
}