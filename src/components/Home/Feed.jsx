import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, updatePosts  } from "../../redux/postsSlice";
import { get } from "../../actions/api/postApi";

import PostBox from "./PostBox";
import UserPostBox from "./UserPostBox";
import LoadingFeed from "./LoadingFeed";
import { Container } from "./CreatePostBox";

export default function Feed({user}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const { posts, offset } = useSelector(selectPosts);
    const dispatch = useDispatch();
    console.log(posts);

    async function fetchData(posts, offset){
        setIsLoading(true);
        setError(null);

        try {
            const response = await get(offset);
            const data = response.results
    
            return dispatch(updatePosts({posts: [...posts, ...data], offset: offset + 10}));
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
    }

    useEffect(() => {
        fetchData(posts, offset);
      }, []);

      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
          return;
        }
        fetchData(posts, offset);
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
