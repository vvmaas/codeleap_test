import useAsync from '../useAsync';

import * as postApi from '../../actions/api/postApi';

export default function usePosts() {  
  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
    act: getPosts
  } = useAsync(() => postApi.get());

  return {
    posts,
    postsLoading,
    postsError,
    getPosts
  };
}