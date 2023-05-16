import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUpBox from "../../components/PopUpBox/PopUpBox";
import SignUpContent from "../../components/PopUpBox/SignUpContent";
import styled from "styled-components";

export default function SignUp() {
    return(
        <Container>
            <PopUpBox>
                <SignUpContent />
            </PopUpBox>
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