import styled from "styled-components";
import {ImBold} from "react-icons/im"
import {ImItalic} from "react-icons/im"
import { useState, ChangeEvent } from "react";
import { Question } from "./Question";
import { DisplaySentQuestion } from "./DisplaySentQuestion";
 

const Div = styled.div`
    .conteudo{
        padding: 1rem;
        position: relative;
        
        .title{
            text-align: center;
            font: 500 15px 'Quicksand';
            color: #5C5C5C;
        }
        .create-topic{
            label{
                margin-top: 1.375rem;
                display: flex;
                flex-direction: column;
                color: #ED7839;
                font: 700 16px 'Roboto';
                input{
                    height: 2.4375rem;
                    border: 1px solid #CCCCCC;
                    border-radius: 3px 0;
                    font: 700 14px 'Quicksand';
                    padding: 0 1.4375rem;
                    &::placeholder{
                        font: 400 14px 'Quicksand';
                        color: #4D4D4D;
                    }
                    &:focus{
                        outline: none;
                    }
                }
                textarea{
                    resize: none;
                    height: 5.125rem;                    
                    border: 1px solid #CCCCCC;
                    border-bottom: none;
                    border-radius: 3px;
                    padding: .5rem 1.4375rem;
                    font: 400 14px 'Quicksand';
                    &:focus{
                        outline: none;
                    }
                }
                .edit-send{
                    display: flex;
                    justify-content: space-between;

                    height: 2rem;
                    width: 100%;

                    background-color: #EAF1F2;
                    border: 1px solid #CCCCCC;
                    border-bottom-left-radius: 3px;
                    border-bottom-right-radius: 3px;

                    .edit{
                        display: flex;
                        p{
                            color: #474747;
                            margin-left: 1.8125rem;
                            margin-right: .5rem;
                            padding: 0.5rem;
                            transition: background-color .2s;
                            cursor: pointer;
                            &:hover{
                                background-color: #c3c3c3;
                            }
                            @media screen and (max-width: 415px) {
                                margin-right: 0;
                            
                                
                            }
                        }
                    }
                    .send{
                        display: flex;
                        align-items: center;
                        .cancel{
                            font: 700 15px 'Quicksand';
                            cursor: pointer;
                            margin-right: 1rem;
                            transition: color .2s;
                            &:hover{
                                color: #ED7839;
                            }
                        }
                        button{
                            padding: 0 4.1875rem;
                            height: 100%;
                            background: linear-gradient(to top, #f0813d, #f48e41, #f89a47, #fba64d, #feb254);
                            border: none;
                            border-radius: 3px;
                            cursor: pointer;
                            p{
                                font: 700 15px 'Quicksand';
                                color: white;
                            }
                            @media screen and (max-width: 415px) {
                            padding: 0 1.1875rem;
                                
                            }
                        }
                    }
                }
            }
        }
        .divider{
        border-bottom: 1px solid #E7E7E7;
        margin: 1.875rem 0;

        }
        .question{
            display: flex;
            flex-direction: column-reverse;
        }
        .sent-question{
            background-color:  #ffffff;
            position: absolute;
            width: 98%;
        }
    }
    
`
type CreateProps = {
    sendData: Function;
    questionData: Function;
}
interface IQuestion{
    Assunto: string,
    Content: string,
}
export function CreateTopic(props: CreateProps){
    const [isOpen, setIsOpen] = useState(false)
    const [assunto, setAssunto] = useState("")
    const [content, setContent] = useState("")
    const [questions, setQuestion] = useState<IQuestion[]>([])
    const [isClicked, setIsClicked] = useState(false)

    const closeCreator = () =>{ 
        setIsOpen(isOpen)
        props.sendData(isOpen)
    }
    const CreateQuestion = () =>{
        if(assunto && content !== ""){
            const newQuestion = {Assunto: assunto,Content: content}
            setQuestion([...questions, newQuestion])
            props.questionData(assunto, content)
            setAssunto("")
            setContent("")
            setIsClicked(!isClicked)
        }
    }
    return(
        <Div>
            <div className="conteudo">
               { isClicked === true? <div className="sent-question">
                    <DisplaySentQuestion clickButton={(data: boolean | ((prevState: boolean) => boolean))=>setIsClicked(data)}/>
                </div>:''}
                <p className="title">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
                <div className="create-topic">
                    <label>
                        Assunto
                        <input type="text" value={assunto} placeholder="Defina um tópico sucinto para notificar os autores..." onChange={(event: ChangeEvent<HTMLInputElement>)=>setAssunto(event.target.value)}/>
                    </label>
                    <label>
                        Conteúdo
                        <textarea name="" id="" cols={30} rows={10} value={content} onChange={(event: ChangeEvent<HTMLTextAreaElement>)=>setContent(event.target.value)}></textarea>
                        <div className="edit-send">
                            <div className="edit">
                                <p><ImBold/></p>
                                <p><ImItalic/></p>
                            </div>
                            <div className="send">
                                <button onClick={CreateQuestion}><p>Enviar</p></button>
                            </div>
                        </div>{/* //EDIT_SEND */}
                    </label>
                </div>
                    <div className="divider"></div>
                    <div className="question">
                        {
                            questions.map((question, key:number)=>{
                                return  <Question question={question.Content} title={question.Assunto} key={key}/>
                            })
                        }
                    </div>
                   
            </div>
        </Div>
    )
}
