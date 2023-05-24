import { useState, useEffect } from "react";
import { get } from "../../actions/api/postApi";

import PostBox from "./PostBox";
import UserPostBox from "./UserPostBox";
import LoadingFeed from "./LoadingFeed";
import { Container } from "./CreatePostBox";


export default function Feed({user, posts, setPosts, offset, setOffset}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchData(){
        setIsLoading(true);
        setError(null);

        try {
        const response = await get(offset);
        const data = response.results

        if(!posts){
            setPosts([...data]);
        } else {
            setPosts([...posts, ...data])
        }
        setOffset(offset + 10);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
      }, []);

      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
          return;
        }
        fetchData();
      };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isLoading]);
      
    return (
        <Container>
            {error ? <p>{error}</p> : ''}
                { posts.length > 0 ? (
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
