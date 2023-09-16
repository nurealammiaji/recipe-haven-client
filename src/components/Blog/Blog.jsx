import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";
import LazyLoad from "react-lazy-load";
import details from "../../assets/details.jpg";
import { PiArrowCircleDownFill } from "react-icons/pi";
import { usePDF } from 'react-to-pdf';

const Blog = () => {

    const { toPDF, targetRef } = usePDF({ filename: 'blog.pdf' });

    const { loading } = useContext(AuthContext);

    const posts = useLoaderData();
    console.log(posts);

    return (
        <div ref={targetRef} className="min-h-screen">
            <div>
                <LazyLoad threshold={0.99}><img className="relative w-auto md:min-w-full" src={details} alt="" /></LazyLoad>
                <h1 className="absolute hidden text-2xl text-white translate-x-5 md:translate-x-40 md:text-7xl top-36 md:top-60 md:block">Blog</h1>
            </div>
            <br /><br /><br />
            <div className="text-center">
                <button onClick={() => toPDF()} className="btn btn-primary"><PiArrowCircleDownFill className="text-3xl" /> Blog as PDF</button>
            </div>
            <br /><br />
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