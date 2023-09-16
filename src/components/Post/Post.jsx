

const Post = ({ post }) => {

    const { title, details } = post;

    return (
        <div>
            <div className="w-full h-full mx-auto border shadow-xl border-base card bg-base-200">
                <div className="card-body">
                    <h2 className="text-2xl underline card-title underline-offset-8 text-primary">{title}</h2>
                    <br /><br />
                    <div className="items-center justify-start card-actions">
                        <p className="text-xl text-base-content">{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;