export const getPosts = async () => {
    const response = await fetch("https: //localhost:3000/api/posts");
    return await response.json();
 };
