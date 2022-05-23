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
                cursor: pointer;
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
            }
            .like-comment{
                font:350 14px 'Segoe UI', sans-serif;
                color: #757575;
                cursor: default;
            }
        }
`
type QuestionProps ={
    title: string,
    question: string,
}
export function Question(props: QuestionProps){
    const [likeCount, setLikeCount] = useState(0)

    const likeComment = () =>{
        if(likeCount === 0){
            setLikeCount(likeCount +1)
        }else{
            setLikeCount(0)
        }
    }
    return(
        <Div>
            <div className="info">
                <h3>{props.title}</h3>
                <p className="author">João Victor Cunha</p>
                <p className="questionText">{props.question}</p>
            </div>
            <div className="icon">
                <p className="more-icon"><FiMoreVertical size={'1.5em'}/></p>
                <p className="heart-icon" onClick={likeComment}><AiFillHeart size={'1em'}/></p>
                <p className="like-comment">{likeCount} Like</p>
                <p className="like-comment">1 resposta</p>
            </div>
        </Div>
    )
}