import React from "react";
import { useEffect, useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { PostCard } from "../../components/posts/PostCard";

const Feed = () => {
    const { posts, fetchPosts } = useContext(PostContext);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post.id} post={post} />)) : (
                    <p>Posts</p>
                )}
        </div>
    );
};

export default Feed;