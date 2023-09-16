import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";


const Blog = () => {

    const {loading} = useContext(AuthContext);

    const posts = useLoaderData();
    console.log(posts);

    return (
        <div className="min-h-screen">
            <br /><br /><br />
            {
                (loading) ?
                    <div className="min-h-screen text-center">
                        <br /><br />
                        <span className="loading loading-ring loading-lg text-primary"></span>
                        <br /><br />
                        <h3 className="text-2xl text-primary">Loading <span className="ml-3 loading loading-dots loading-md text-primary"></span></h3>
                        <br /><br />
                    </div> :
                    (posts) &&
                    <div className="grid gap-5 md:grid-cols-2">
                        {
                            posts.map(post => <Post key={post.id} post={post}></Post>)
                        }
                    </div>
            }
            <br /><br /><br />
        </div>
    );
};

export default Blog;