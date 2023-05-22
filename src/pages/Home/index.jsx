import styled from "styled-components";

import { useState } from "react";

import getUser from "../../utils/getUser";

import Header from "../../components/Home/Header";
import CreatePostBox from "../../components/Home/CreatePostBox";
import Feed from "../../components/Home/Feed";

export default function Home() {
    const [posts, setPosts] = useState(null);
    const user = getUser();
    console.log(user);

    return(
        <Container>
            <Header />
            <CreatePostBox posts={posts} setPosts={setPosts}/>
            <Feed user={user} posts={posts} setPosts={setPosts}/>
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