import React, { useEffect, useState } from 'react'
import { Post } from './Post'
import { getPosts } from '../services/posts-service'

export const PostList = ({searchValue}) => {

    const [posts, setPosts] = useState(null);
    useEffect(() => {
        //getPosts().then((posts) => setPosts(posts));
        getPosts().then((posts) => setPosts(posts));
    }, [])

    console.log({posts});
    if(!posts){
        return (
            <div className="p-5 text-center">
                <div className="spinner-border text-primary" role="status"></div>
                <div>Loading ...</div>
            </div>
        );
    }

  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
        {
            posts
            .filter(p => (searchValue === null || searchValue === '') || p.text.toLowerCase().includes(searchValue.toLowerCase()))
            .map((post) => (
                <Post 
                key={post.id} 
                createdAt={ (new Date(post.createdAt).toDateString())} 
                author={post.author.name} 
                text={post.text} 
                comments={Object.keys(post.comments).length} 
                //comments={0} 
                image={post.image} 
                likes={post.likes}
            />
        ))}


    </div>
  );
}
