import { useLoaderData } from "react-router-dom";
import details from "../../assets/details.jpg";
import { useEffect, useState } from "react";
import { PiCookingPotBold, PiThumbsUpLight, PiBowlFood, PiCalendar } from "react-icons/pi";

const ChefDetails = () => {

    const chef = useLoaderData();
    const { id, name, image, cuisine, likes, recipes, experience, bio } = chef;

    const [chefRecipes, setChefRecipes] = useState(null);

    useEffect(() => {
        fetch(`https://recipe-haven-server-bd.vercel.app/recipes/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChefRecipes(data))
    }, [id])

    console.log(chefRecipes);

    return (
        <div>
            <div>
                <img className="relative w-auto md:min-w-full" src={details} alt="" />
                <h1 className="absolute text-2xl translate-x-5 md:translate-x-40 md:text-6xl text-base-content top-36 md:top-60">Chef Details</h1>
            </div>
            <br /><br />
            <div>
                <div className="shadow-xl card lg:card-side bg-base-200">
                    <figure><img className="w-full h-full" src={image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="mb-5 text-5xl font-bold card-title">{name}</h2>
                        <br />
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
                        <p className="items-center justify-start my-3 card-actions">{bio}</p>
                        <div className="items-center justify-start my-5 card-actions">
                            <h3 className="p-5 mx-auto text-lg badge badge-secondary"><PiCookingPotBold className="mr-2" />{cuisine} Cuisine</h3>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default ChefDetails;