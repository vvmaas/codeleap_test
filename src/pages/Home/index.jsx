import styled from "styled-components";
import { useState } from "react";

import getUser from "../../utils/getUser";

import Header from "../../components/Home/Header";
import CreatePostBox from "../../components/Home/CreatePostBox";
import Updater from "../../components/Home/Updater";
import Feed from "../../components/Home/Feed";

export default function Home() {
    const user = getUser();
    const [trigger, setTrigger] = useState(0)

    return(
        <Container>
            <Header />
            <CreatePostBox trigger={trigger} setTrigger={setTrigger}/>
            <Updater trigger={trigger} setTrigger={setTrigger}/>
            <Feed user={user} trigger={trigger}/>
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