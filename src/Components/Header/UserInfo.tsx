import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";



const titleColor = "#725C5C";
const titleFont = "Roboto";
const infoTitle = "Quicksand";
const infoColor = "#333333";

const Div = styled.div`
.infos{
        display: flex;
        align-items: center;
        margin-right: 2rem;
        flex-direction: column-reverse;
        .language-selector{
            width: 97px;
            height: 34px;
            border: 1px solid #cccccc;
            border-radius: 3px;

            display: flex;
            justify-content: center;
            align-items: center;
            
            cursor: pointer;
            .lang{
                font: 400 14px ${infoTitle};
                color: ${infoColor};
            }
        }
        .user-info{
            text-align: right;
            margin: 0 6.85px 0 22px;
            .wellcome{
                font:400 16px ${infoTitle};
                color: ${infoColor};
                @media screen and (max-width: 1373px) {
                font-size: 14px;
                }
            }
            .user-email{
                font:400 14px ${infoTitle};
                color: ${infoColor};
                @media screen and (max-width: 1373px) {
                font-size: 12px;
        }
            }
        }
        .user-pic{
            position: relative;
            img{
                width: 2.5rem;
                border-radius: 50%;
                cursor: pointer;
            }
            .count-notification{
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;

                background-color: #F85959;
                font: 700 12px ${titleFont};
                color: white;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;

                right: 0;
            }
        }
    }
`  

export function UserInfo(){
    const [count, setCount] = useState(0)

    return(
        <Div>
            <div className="infos">
                <div className="language-selector">
                    <p><FaGlobe size={'0.8em'}/></p> 
                    <p className="lang">PT, BR</p>
                    <p><IoMdArrowDropdown /></p>
                </div>

                <div className="user-info">
                    <p className="wellcome">Bem vindo!</p>
                    <p className="user-email">alguem12@galoascience.com</p>
                </div>
                    <div className="user-pic">
                        <div className="count-notification">{count}</div>
                        <img src="..\assets\image.svg" alt="" onClick={()=>setCount(count+1)}/>
                    </div>
            </div>
        </Div>
    )
}