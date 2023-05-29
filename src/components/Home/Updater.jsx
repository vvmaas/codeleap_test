import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useInterval from "use-interval";
import { selectPosts, updatePosts  } from "../../redux/postsSlice";
import { get } from "../../actions/api/postApi";

import { TfiReload } from 'react-icons/tfi'
import styled from "styled-components";
import { Container } from "./CreatePostBox";

export default function Updater({ trigger, setTrigger }) {
    const [newPostsCount, setNewPostsCount] = useState(0);
    const dispatch = useDispatch();
    const { posts, offset } = useSelector(selectPosts);

    useInterval(async () => {
        const response = await get(0);
        const data = response.results
        const diff = data[0].id - posts[0]?.id

        if(diff > newPostsCount){
            setNewPostsCount(diff);
            const offsetDiff = diff - newPostsCount
            dispatch(updatePosts({
                posts: [...posts], 
                offset: offset + offsetDiff
            }));
            setTrigger(trigger + 1);
        }
      }, 500);

      async function loadNewPosts(){
        dispatch(updatePosts({
            posts: [], 
            offset: 0
        }));
        setNewPostsCount(0);
        setTrigger(trigger + 1);
      }

    return (
        <>
        {newPostsCount > 0 ? 
            <Container>
                <Wrapper onClick={() => loadNewPosts()}>
                    <span> Load new posts </span> <TfiReload fontWeight="bold"/>
                </Wrapper>
            </Container>
            :
            ''
        }
        </>
    )
}

const Wrapper = styled.div`
    background: #7695EC;
    border: 1px solid #FFF;
    color: #f5f5f5;
    font-size: 18px;
    font-weight: bold;
    border-radius: 16px;
    width: 95%;
    height: 8vh;
    min-height: 45px;
    max-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
        background: #4b75ea;
        color: #ffffff;
    }

    span {
        margin-right: 10px;
    }

    @media(max-width: 700px) {
        min-height: 35px;
        max-height: 50px;
        margin-bottom: 9px;
    }
`