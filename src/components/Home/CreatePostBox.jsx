import { useState } from "react";
import getUser from "../../utils/getUser";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, updatePosts  } from "../../redux/postsSlice";
import { create } from "../../actions/api/postApi";

import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

export default function CreatePostBox({trigger, setTrigger}) {
    const name = getUser();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { posts, offset } = useSelector(selectPosts);
    const dispatch = useDispatch();

    async function submit(e){
        e.preventDefault();

        const data = {
            username: name,
            title,
            content
        }

        const newPost = await create(data);

        dispatch(updatePosts({
            posts: [newPost, ...posts], 
            offset: offset + 1
        }));
        setTrigger(trigger + 1);
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
                        <Button type='submit' disabled={title.length===0 || content.length===0} color='#7695EC' hoverColor='#6c89da'>Create</Button>
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
    display: ${(props) => (props.display ? props.display : "flex")};
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