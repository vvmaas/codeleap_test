import styled from "styled-components"

import { erase } from "../../actions/api/postApi"

import Button from "../Button"

import { Title } from "./SignUpContent"

export default function DeleteContent({id, setDisplay, setDeleting}) {

    async function deletePost() {
        await erase(id);

        setDisplay('none');
        setDeleting(false);
    }

    return (
        <Container>
            <Title>Are you sure you want to delete this item?</Title>
            <Buttons>
                <Button border="1px solid #999999" color={"#FFFFFF"} onClick={() => setDeleting(false)}>
                    Cancel
                </Button>
                <Button color={"#FF5151"} hoverColor={"#ed4545"} onClick={() => deletePost()}>
                    Delete
                </Button>
            </Buttons>
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
`

const Buttons = styled.div`
    display: flex;
    margin-top: 25px;
    button {
        width: 110px;
        margin: 0 10px
    }
`