const PostCard = ({ post }) => {
    return (
        <div className="">
            <h2>{post.title}</h2>
            <h2>{post.author}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export {PostCard};