import styled from "styled-components";
import {BsCheckAll} from "react-icons/bs"



const Div = styled.div`
    
`
const Resp = styled.div`
    width: 100%;
    
    .user-status{
        font: 700 14px 'Quicksand';
        color: #ED7839;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .who{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    .Autor, .Coautor{
        background-color: #ECECEC;
        min-height: 100px;
        padding: 1rem;
        border: 1px solid #d6d6d6;
       
        .author{
            font:700 12px 'Quicksand';
            margin-bottom: 1rem;
            color: #5C5C5C;
        }
        .resposta{
            font: 400 14px 'Quicksand';
            color: #4D4D4D;
        }
    }
    .Usuario{
        background-color: #FFFFFF;
        min-height: 100px;
        padding: 1rem;
        border: 1px solid #d6d6d6;
        
        .author{
            font:700 12px 'Quicksand';
            margin-bottom: 1rem;
            color: #5C5C5C;
        }
        .resposta{
            font: 400 14px 'Quicksand';
            color: #4D4D4D;
        }
    }
`
type RespostaProps ={
    isClicked: boolean;
    Author: string;
    Resposta: string;
    className: string;

}
export function Respostas(props: RespostaProps){
    function RespostaContent(){
        return(
                <Resp>
                    <div className={props.className}>
                        <div className="who">
                            <p className="author">{props.Author}</p>
                           {props.className != 'Usuario'? <p className="user-status">{props.className} <p><BsCheckAll size={'1.5rem'}/></p> </p> : ''} 
                        </div>
                        <p className="resposta">{props.Resposta}</p>
                    </div>
                </Resp>
            )
        
    }
    return(
        <Div>
            {
                props.isClicked === true? <RespostaContent/>:''
            }
        </Div>
    )
}