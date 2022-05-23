import styled from "styled-components";


const Div = styled.div`
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

`
type HeaderProps = {
    title: string,

}
export function HeaderCards(props: HeaderProps){
    return(
        <Div>
            <div className="header"><h4>{props.title}</h4></div>
        </Div>
    )
}