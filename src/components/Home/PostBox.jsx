import styled from "styled-components"

import timeSince from "../../utils/timeSince"

import { Container } from "./CreatePostBox"

export default function PostBox({username, created_at, title, content}) {
    return (
        <Container>
            <Wrapper>
                <Header>
                    <h4>{title}</h4>
                </Header>
                <Info>
                    <p>@{username}</p>
                    <p>{timeSince(new Date(created_at))} ago</p>
                </Info>
                <Content>
                    {content}
                </Content>
            </Wrapper>
        </Container>
    )
}

export const Wrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 16px;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 25px;

    h4 {
        color: #FFFFFF;
        margin-left: 24px;
        font-weight: bold;
        font-size: 23px;
    }

    @media (max-width: 700px){
        margin: 5px;
        border: none;
        border-bottom: 1px solid #999999;
        border-radius: 0;
        width: 100%;

        h4 {
        margin-left: 16px;
        font-size: 20px;
        }
    }
`

export const Header = styled.div`
    width: 100%;
    height: 8vh;
    min-height: 45px;
    max-height: 70px;
    background-color: #7695EC;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h4{
            overflow: hidden;
        }

    @media (max-width: 700px){
        max-height: 55px;
        border-radius: 0;
        margin-bottom: 18px;
    }
`

export const Info = styled.div`
    width: 100%;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    color: #777777;
    font-size: 18px;

    @media (max-width: 700px){
        font-size: 16px;
        padding: 0 17px;
        margin-bottom: 14px;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    white-space: pre-wrap;

    @media (max-width: 700px){
        line-height: 19px;
        padding: 0 17px;
    }
`
