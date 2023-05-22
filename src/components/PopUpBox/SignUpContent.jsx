import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/userSlice";

import styled from "styled-components"
import Input from "../Input"
import Button from "../Button";

export default function SignUpContent() {
    const [username, setUsername] = useState('');
    const log = JSON.parse(localStorage.getItem("codeleap_network"))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(log) {
            dispatch(userLogin(log.user))
            navigate('/home');
        }
    }, [log])

    function submit(e) {
        e.preventDefault();

        dispatch(userLogin(username))
        const infoJSON = JSON.stringify({ user: username });
        localStorage.setItem("codeleap_network", infoJSON);

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
                <Button type="submit" disabled={username.length===0} color="#7695EC" hoverColor='#6c89da'>
                    <p>ENTER</p>
                </Button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    padding: 25px;
    width: 100%;

    form {
        display: flex;
        flex-direction: column;
        align-items: end;
        
        div {
            width: 100%;
        }
    }

    h4 {
        margin-bottom: 8px;
    }

    input {
        margin-bottom: 13px;
        width: 100%;
    }
`

export const Title = styled.h1`
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 16px;
`