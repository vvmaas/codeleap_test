import styled from "styled-components"

import { Container } from "./CreatePostBox"

export default function LoadingFeed() {
    return (
        <>
        <Container>
            <Wrapper>
                <Header>
                    <div></div>
                </Header>
                <Info>
                    <div></div>
                    <div></div>
                </Info>
                <Content>
                    <div></div>
                </Content>
            </Wrapper>
        </Container>
        <Container>
        <Wrapper>
            <Header>
                <div></div>
            </Header>
            <Info>
                <div></div>
                <div></div>
            </Info>
            <Content>
                <div></div>
            </Content>
        </Wrapper>
    </Container>
    <Container>
        <Wrapper>
            <Header>
                <div></div>
            </Header>
            <Info>
                <div></div>
                <div></div>
            </Info>
            <Content>
                <div></div>
            </Content>
        </Wrapper>
    </Container>
        </>
    )
}

const Wrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 16px;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 25px;

    @media (max-width: 700px){
        margin: 5px;
        border: none;
        border-bottom: 1px solid #999999;
        border-radius: 0;
        width: 100%;
    }
`

const Header = styled.div`
    width: 100%;
    height: 8vh;
    min-height: 45px;
    max-height: 70px;
    background-color: #7695EC;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    div {
        background-color: #ffffffb3;
        margin-left: 24px;
        border-radius: 16px;
        height: 23px;
        width: 40%;
    }

    @media (max-width: 700px){
        max-height: 55px;
        border-radius: 0;
        margin-bottom: 18px;

        div {
            margin-left: 16px;
            height: 20px;
        }
    }
`

const Info = styled.div`
    width: 100%;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 19px;

    div {
        background-color: #777777b3;
        border-radius: 16px;
        height: 18px;
        width: 15%;
    }

    @media (max-width: 700px){
        padding: 0 17px;
        margin-bottom: 14px;

        div {
            height: 16px;
        }
    }
`

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
    margin-bottom: 24px;

    div {
        background-color: #0303036c;
        border-radius: 16px;
        height: 70px;
        width: 100%;
    }

    @media (max-width: 700px){
        padding: 0 17px;

        div {
            height: 60px;
        }
    }
`