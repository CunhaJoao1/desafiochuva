import styled from "styled-components";
import { HeaderCards } from "../../Genericos/Header";
import {FaPlus} from "react-icons/fa"
import { AfterClick } from "./AfterClick";
import { CreateTopic } from "./CreateTopc";
import { useState } from "react";
import { Question } from "./Question";

const Div = styled.div`
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    border: 1px solid #ECECEC;
    border-radius: 3px;
    .question{
        padding: 0 1rem;
    }
`
interface IQuestion{
    Assunto: string,
    Content: string,
}
export function Discussao(){
    const [isOpen, setIsOpen]       = useState(false)
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [assunto, setAssunto]     = useState("")
    const [content, setContent]     = useState("")

    const createQuestion = (title: string, question:string) =>{
        setAssunto(title)
        setContent(question)
        const newQuestion = {Assunto: assunto,Content: content}
        setQuestions([...questions, newQuestion])
        
    }
    return(
        <Div>
            <HeaderCards title="Discussao"/>
            {
                isOpen === false?  <AfterClick sendData={()=>setIsOpen(!isOpen)}/>: <CreateTopic sendData={()=>setIsOpen(!isOpen)} questionData={(title:any, question:any)=>createQuestion(title, question)}/>
            }
            <div className="question">
                {/* {
                    questions.map((question, key: number)=>{
                        return <Question question={question.Content} title={question.Assunto} key={key}/>
                    })
                } */}
            </div>
        </Div>
    )
}