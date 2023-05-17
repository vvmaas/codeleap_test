import styled from "styled-components";

import Header from "../../components/Home/Header";
import CreatePostBox from "../../components/Home/CreatePostBox";
import Feed from "../../components/Home/Feed";

export default function Home() {
    return(
        <Container>
            <Header />
            <CreatePostBox />
            <Feed />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    min-height: 100vh;
    width: 100%;
    background-color: #dddddd;
`