import { useState } from "react";
import styled from "styled-components";



const Div = styled.div`
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    border: 1px solid #ECECEC;
    border-radius: 3px;
    .header{
        width: 100%;
        height: 2.8125rem;
        background-color: #FDF1EB;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        h4{
            font: 500 20px 'Roboto';
            color: #4E4E4E;
        }
    }
    .conteudo{
        padding: 1rem;
        p{
            font: 500 15px 'Quicksand';
            color: #5C5C5C;
            a{
                font: 700 15px 'Quicksand';
                cursor: pointer;
                color: #ED7839;
            }
        }
    }
`
type ResumosProps ={
    content: string
}
export function Resumos(props: ResumosProps){
    const max_length = 640;
    const [seeMore, setSeeMore] = useState(false)
    
    return(
        <Div>
            <div className="header"> <h4>Resumos</h4> </div>
            <div className="conteudo"> 
            {

                    <div>
                        {props.content.length > max_length && seeMore === false? (
                            <p>{`${props.content.substring(0, max_length)}...`} <a onClick={()=>setSeeMore(!seeMore)}>ver mais</a></p>
                        ):
                        <p>{props.content} <a onClick={()=>setSeeMore(!seeMore)}>ver menos</a></p>
                        }
                    </div> 
            }   
            </div>
        </Div>
    )
}