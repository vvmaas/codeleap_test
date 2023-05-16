import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Header from "../../components/Home/Header";

import CreatePostBox from "../../components/Home/CreatePostBox";

export default function Home() {
    return(
        <Container>
            <Header />
            <CreatePostBox />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #dddddd;
`