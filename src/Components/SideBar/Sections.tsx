import { useState } from "react";
import styled from "styled-components";

const fontSection = "500 16px Quicksand"
const Div = styled.div`
position: relative;
    div{
        p{
            font: ${fontSection};
            color: #725C5C;
            
        }
        padding: 0.5625rem 1.5rem;
        border-bottom: 2px solid #E7E7E7;
        cursor: pointer;

        transition: all .2s;
 

        &:hover{
            background-color: #FDF1EB;
            padding: 0.5625rem 2rem;
        }
    }
    .divider{
    }
`
type SectionProps = {
    sections: string[],
}
export function Section(props: SectionProps){
    const [isSelected, setIsSelected] = useState(false)
    const [sectionName, setSectionName] = useState("")

    function SelectSection(section: string){
        const SectionSelected = section.replace(/\s+/g, '-').toLocaleLowerCase().replace("ç", "c").replace("ê","e").replace("ã","a").replace("á","a") //Faz um tratamento de string da section selecinada, tirando os caractéres especiais e espaços para usar como link

        setSectionName(SectionSelected) //atribui a variável sectionName com a section selecionada
        console.log(SectionSelected)
    }
    return(
        <Div>
            {
                props.sections.map((section, key: number)=>{
                    return <div key={key} id={sectionName} className={sectionName === 'apresentacao'? 'selected':''} onClick={() => SelectSection(section)}><p>{section}</p></div>
                })
            }
        </Div>
    )
}