import styled from "styled-components";

import getUser from "../../utils/getUser";

import Header from "../../components/Home/Header";
import CreatePostBox from "../../components/Home/CreatePostBox";
import Feed from "../../components/Home/Feed";

export default function Home() {
    const user = getUser();

    return(
        <Container>
            <Header />
            <CreatePostBox />
            <Feed user={user} />
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