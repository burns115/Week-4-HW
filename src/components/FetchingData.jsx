import {useState, useEffect} from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { useFetch } from '../hooks/useFetch';

const FetchingData = () => {
    const { data: posts, loading, error} = useFetch("posts");

    if (error) {
        return <p>An error occurred: {error}</p>
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            {posts.length && 
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    );
                })}
        </>
    );
  };
  
  export default FetchingData;