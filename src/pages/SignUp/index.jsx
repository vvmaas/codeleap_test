import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CenterBox from "../../components/PopUpBox/PopUpBox";
import styled from "styled-components";

export default function SignUp() {
    return(
        <Container>
            <CenterBox>
                derecha
            </CenterBox>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #dddddd;
`