import { useState } from "react";

import styled from "styled-components";

import Input from "../Input";
import Button from "../Button";

export default function CreatePostBox() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function submit(e){
        e.preventDefault()

        setContent('');
        setTitle('');
    }

    return (
        <Container>
            <Wrapper>
                <Title>What's on your mind?</Title>
                <form onSubmit={submit}>
                    <h4>Title</h4>
                    <Input type='text' value={title} placeholder='Greetings' height='30px' onChange={(e) => setTitle(e.target.value)} />
                    <h4>Content</h4>
                    <Input textarea='true' type='text' value={content} placeholder='Hello World!' height='150px' onChange={(e) => setContent(e.target.value)} />
                    <div>
                        <Button type='submit' disabled={title.length===0 || content.length===0} color='#7695EC'>Create</Button>
                    </div>
                </form>
            </Wrapper>
        </Container>
    )
}

export const Container = styled.div`
    background: #FFFFFF;
    width: 100%;
    max-width: 800px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 16px;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 25px;
    margin: 25px;

    h4 {
        margin-bottom: 10px;
    }

    input,textarea {
        margin-bottom: 20px;
        width: 100%;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: end;
    }

    button {
        min-width: 100px;
    }
`

const Title = styled.h1`
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 16px;
`