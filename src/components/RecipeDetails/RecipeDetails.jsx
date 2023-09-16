import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from '../../Providers/Providers';
import { PiCookingPotBold, PiHeartFill } from "react-icons/pi";
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import details from "../../assets/details.jpg";
import Recipe from "../Recipe/Recipe";

const RecipeDetails = () => {

    const { loading } = useContext(AuthContext);

    const recipe = useLoaderData();

    const { chef, chef_id, image, name, description, ingredients, instructions, cuisine, ratings } = recipe;

    const [disable, setDisable] = useState();

    const favorite = (dish) => toast(`${dish} added as favorite !!`);

    const handler = (dish) => {
        setDisable(true);
        favorite(dish);
    }

    const [chefRecipes, setChefRecipes] = useState(null);

    useEffect(() => {
        fetch(`https://recipe-haven-server-bd.vercel.app/recipes/chefs/${chef_id}`)
            .then(res => res.json())
            .then(data => setChefRecipes(data))
    }, [chef_id])

    return (
        <div>
            <div>
                <img className="relative w-auto md:min-w-full" src={details} alt="" />
                <h1 className="absolute hidden text-2xl text-white translate-x-5 md:translate-x-40 md:text-7xl top-36 md:top-60 md:block">Recipe Details</h1>
            </div>
            <br /><br /><br />
            <div>
                <div className="mx-auto shadow-xl card bg-base-200">
                    <figure><img className="w-full h-full" src={image} alt="Recipe Image" /></figure>
                    <ToastContainer position="top-center" />
                    <div className="card-body">
                        <h2 className="justify-center my-5 md:text-6xl card-title">{name}</h2>
                        <br />
                        <div className="items-center justify-center gap-5 mb-5 md:flex">
                            <div className="p-5 mb-3 md:mb-0 md:text-xl badge badge-secondary"><PiCookingPotBold className="mr-2" /> {cuisine} Cuisine</div>
                            <div className="p-5 md:text-xl badge badge-primary">by {chef}</div>
                        </div>
                        <br />
                        <p className="mt-5 text-center md:text-xl text-base-content">{description}</p>
                        <br />
                        <div className="md:text-xl">
                            <h4 className="my-5 text-lg font-semibold underline md:text-2xl">Ingredients:</h4>
                            <ul className="list-disc">
                                {
                                    ingredients.map(indgredient => <li key={indgredient}>{indgredient}</li>)
                                }
                            </ul>
                        </div>
                        <br />
                        <div>
                            <h4 className="my-5 text-lg font-semibold underline md:text-2xl">Instructions:</h4>
                            <ul className="list-disc md:text-xl">
                                {
                                    instructions.map(instruction => <li key={instruction}>{instruction}...</li>)
                                }
                            </ul>
                        </div>
                        <br />
                        <div className="flex items-center gap-5 mx-auto">
                            <h4 className="my-5 text-lg font-semibold">Ratings:</h4>
                            <h4><Rating style={{ maxWidth: 80 }} value={(ratings) && ratings} readOnly /></h4>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <h3 className='font-bold text-center text-md md:text-4xl divider'>Same Chef Recipes</h3>
            <br /><br />
            <div>
                <div className="grid gap-10 md:grid-cols-3">
                    {
                        (loading) ?
                            <div>
                                <br /><br />
                                <span className="block loading loading-ring loading-lg text-primary"></span>
                                <br /><br />
                                <h3 className="text-2xl text-primary">Loading <span className="ml-3 loading loading-dots loading-md text-primary"></span></h3>
                                <br /><br />
                            </div> :
                            (chefRecipes) &&
                            chefRecipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                    }
                </div>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default RecipeDetails;