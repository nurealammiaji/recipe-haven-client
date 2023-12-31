import { Link } from "react-router-dom";
import { PiCookingPotBold, PiThumbsUpLight, PiBowlFood, PiCalendar } from "react-icons/pi";
import LazyLoad from 'react-lazy-load';

const Chef = ({ chef }) => {

    const { id, name, image, cuisine, likes, recipes, experience } = chef;

    return (
        <LazyLoad threshold={0.99}>
            <div className="w-full shadow-xl card bg-base-200">
                <figure><img src={image} alt="Chef Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="ml-auto badge badge-secondary"><PiCookingPotBold className="mr-2" /> {cuisine}</div>
                    </h2>
                    <br /><br />
                    <div className="items-center justify-start card-actions">
                        Likes:
                        <div className="badge badge-outline">{likes} <PiThumbsUpLight className="ml-2 text-primary" /></div>
                    </div>
                    <div className="items-center justify-start card-actions">
                        Recipes:
                        <div className="badge badge-outline">{recipes}+ <PiBowlFood className="ml-2 text-primary" /></div>
                    </div>
                    <div className="items-center justify-start card-actions">
                        Experience:
                        <div className="badge badge-outline">{experience}   Years <PiCalendar className="ml-2 text-primary" /></div>
                    </div>
                    <br /><br />
                    <Link to={`/chefs/${id}`}><button className="w-full mx-auto btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </LazyLoad>
    );
};

export default Chef;