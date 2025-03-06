import { createContext, useState } from "react";
import { getPosts } from "../services/postService";

// eslint-disable-next-line react-refresh/only-export-components
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const data = await getPosts();
        setPosts(data);
    };

    return (
        <PostContext.Provider value={{ posts, fetchPosts }}>{children}</PostContext.Provider>
    );
};