import { useState } from "react"
import { useNavigate } from "react-router-dom";

import styled from "styled-components"
import Input from "../Input"
import Button from "../Button";

export default function SignUpContent() {
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();

        navigate('/home');
    }

    return(
        <Container>
            <Title>Welcome to CodeLeap network!</Title>
            <form onSubmit={submit}>
                <div>
                    <h4>Please enter your username</h4>
                    <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <Button type="submit" disabled={username.length===0} color="#7695EC">
                    <p>ENTER</p>
                </Button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    padding: 25px;

    form {
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    h4 {
        margin-bottom: 8px;
    }

    input {
        margin-bottom: 13px;
        width: 25vw;
        min-width: 350px;
    }
`

const Title = styled.h1`
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 16px;
`