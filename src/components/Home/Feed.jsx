import usePosts from "../../hooks/api/usePosts";

import getUser from "../../utils/getUser";

import PostBox from "./PostBox";
import UserPostBox from "./UserPostBox";
import LoadingFeed from "./LoadingFeed";
import { Container } from "./CreatePostBox";


export default function Feed({user, posts, setPosts}) {
    if(!posts) {
        setPosts(usePosts().posts?.results);
    }
    return (
        <Container>
                { posts ? (
                    <>
                        {posts.map(post => {
                            return(
                            post.username === user ? (
                                    <UserPostBox 
                                        key={post.id}
                                        id={post.id} 
                                        username={post.username} 
                                        title={post.title} 
                                        content={post.content} 
                                        created_at={post.created_datetime} 
                                    />
                                )
                                :
                                (
                                    <PostBox 
                                        key={post.id}
                                        id={post.id} 
                                        username={post.username} 
                                        title={post.title} 
                                        content={post.content} 
                                        created_at={post.created_datetime} 
                                    />
                                )
                            )
                            }
                        )}
                    </>
                ) : (
                    <LoadingFeed />
                )}
        </Container>
    )
}
