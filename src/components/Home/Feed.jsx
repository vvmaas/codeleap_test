import { useState, useEffect } from "react";

import usePosts from "../../hooks/api/usePosts";

import PostBox from "./PostBox";
import LoadingFeed from "./LoadingFeed";
import { Container } from "./CreatePostBox";


export default function Feed() {
    const { posts } = usePosts();
    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        if(posts) {
            setPostsData(posts)
        }
    }, [posts])
    
    return (
        <Container>
                { posts ? (
                    <>
                        {posts.results.map(post => {
                            return (
                                <>
                                <PostBox 
                                    key={post.id} 
                                    username={post.username} 
                                    title={post.title} 
                                    content={post.content} 
                                    created_at={post.created_datetime} 
                                />
                                </>
                            )
                        })}
                    </>
                ) : (
                    <LoadingFeed />
                )}
        </Container>
    )
}
