import styled from "styled-components";
import {FiMoreVertical} from "react-icons/fi"
import {AiFillHeart} from "react-icons/ai"
import { useState } from "react";



const Div = styled.div`
    border: 1px solid #E7E7E7;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
    position: relative;
    .info{
        margin-left: .5rem;
    }
        h3{
            font: 700 16px 'Quicksand';
            color: #ED7839;
        }
        .author{
            font: 500 14px 'Quicksand';
            color: #5C5C5C;
            margin-bottom: 10px;
        }
        .questionText{
            font: 400 14px 'Quicksand';

        }
        .icon{
            display: flex;
            align-items: center;
            p{
                color: #ED7839;
                /* cursor: pointer; */
                margin-right: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .heart-icon{
                background-color: #ED7839;
                color: white;
                width: 1.5rem;
                height: 1.2rem;
                border-radius: 2px;
            }
            .more-icon{
                text-align: right;
                position: relative;
                .options{
                    width: 6rem;
                    height: 7rem;
                    background-color: #F5F5F5;
                    position: absolute;
                    left: 1rem;
                    top: 0;
                    text-align: left;
                    border-left: 2px solid #ED7839;
                    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
                    ul{
                        margin-top: 1rem;
                        margin-left: .2rem;
                        li{
                            list-style: none;
                            margin-top: .2rem;
                            font: 400 16px 'Quicksand';
                            color: #5C5C5C;
                            cursor: pointer;
                            transition: color .2s;
                            &:hover{
                                color: #ED7839;
                            }
                        }
                    }
                }
            }
            .like-comment{
                font:350 14px 'Segoe UI', sans-serif;
                color: #757575;
                cursor: default;
            }
        }
        .resposta{
            position: absolute;
            bottom: -7rem;
        }
`
type QuestionProps ={
    title: string,
    question: string,
}
export function Question(props: QuestionProps){
    const [likeCount, setLikeCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const likeComment = () =>{
        if(likeCount === 0){
            setLikeCount(likeCount +1)
        }else{
            setLikeCount(0)
        }
    }
    return(
        <>
       
        <Div>
            <div className="info">
                <h3>{props.title}</h3>
                <p className="author">João Victor Cunha</p>
                <p className="questionText">{props.question}</p>
            </div>
            <div className="icon">
                <div className="more-icon">

                <p className="" onClick={()=>setIsOpen(!isOpen)}><FiMoreVertical size={'1.5em'}/></p>
                   { 
                      isOpen ===true?  <div className="options">
                        <ul onClick={()=>setIsOpen(!isOpen)}>
                            <li>Responder</li>
                            <li>Perfil</li>
                            <li onClick={likeComment}>Curtir</li>
                        </ul>
                    </div>:''}
               
                </div>
                <p className="heart-icon" onClick={likeComment}><AiFillHeart size={'1em'}/></p>
                <p className="like-comment">{likeCount} Like</p>
                <p className="like-comment">1 resposta</p>
            </div>

           <div className="resposta">

            </div> 
        </Div> 
        </>
    )
}