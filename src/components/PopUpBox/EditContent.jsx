import { useState } from "react"

import { update } from "../../actions/api/postApi"

import styled from "styled-components"
import { Title } from "./SignUpContent"
import Input from "../Input"
import Button from "../Button"

export default function EditContent({id, title, content, setEditedContent, setEditedTitle, setEditing}) {
    const [disable, setDisable] = useState(false);
    const [editingTitle, setEditingTitle] = useState(title);
    const [editingContent, setEditingContent] = useState(content);

    async function submit(e) {
        e.preventDefault();

        setDisable(true);

        const data = {
            title: editingTitle,
            content: editingContent
        }

        await update(id, data);

        setEditedContent(editingContent);
        setEditedTitle(editingTitle);
        setEditing(false)
        setDisable(false);
    }

    return (
        <Container>
            <Title>Edit item</Title>
                <form onSubmit={submit}>
                    <h4>Title</h4>
                    <Input type='text' value={editingTitle} placeholder={title} height='30px' onChange={(e) => setEditingTitle(e.target.value)} />
                    <h4>Content</h4>
                    <Input textarea='true' type='text' value={editingContent} placeholder={content} height='100px' onChange={(e) => setEditingContent(e.target.value)} />
                    <div>
                        <Button disabled={disable} border="1px solid #999999" color={"#FFFFFF"} onClick={() => setEditing(false)}>
                            Cancel
                        </Button>
                        <Button type='submit' disabled={editingTitle.length===0 || editingContent.length===0 || disable} color='#47b960' hoverColor='#4bd769'>
                            Save
                        </Button>
                    </div>
                </form>
        </Container>
    )
}

const Container = styled.div`
    border-radius: inherit;
    padding: 25px;
    width: 100%;
    max-width: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
        width: 100%;
    }

    h4 {
        margin-bottom: 8px;
    }

    form {
        width: 100%;
    }

    input,textarea {
        margin-bottom: 16px;
        width: 100%;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: end;
    }

    button {
        margin-top: 5px;
        margin-left: 20px;
        min-width: 100px;
    }

    @media(max-width: 700px){
        padding: 20px;

        button {
        margin-top: 5px;
        margin-left: 15px;
        min-width: 100px;
    }
    }
`