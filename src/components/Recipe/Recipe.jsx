import { useState } from "react";
import { PiCookingPotBold, PiEyeFill, PiHeartFill } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {

    const { id, image, name, description, ingredients, instructions, cuisine, ratings } = recipe;

    const [disable, setDisable] = useState();

    const favorite = (dish) => toast(`${dish} added as favorite !!`);

    const handler = (dish) => {
        setDisable(true);
        favorite(dish);
    }

    return (
        <div className="w-full shadow-xl card bg-base-200">
            <figure><img className="w-full h-[250px]" src={image} alt="Recipe Image" /></figure>
            <ToastContainer position="top-center" />
            <div className="card-body">
                <h2 className="justify-center card-title">{name}</h2>
                <br />
                <div className="mx-auto my-3 badge badge-secondary"><PiCookingPotBold className="mr-2" /> {cuisine}</div>
                <br />
                <p className="text-base-content">{description}</p>
                <br />
                <div>
                    <h4 className="my-5 text-lg font-semibold underline">Ingredients:</h4>
                    <ul className="list-disc">
                        {
                            ingredients.slice(0, 5).map(indgredient => <li key={indgredient}>{indgredient}</li>)
                        }
                    </ul>
                </div>
                <br />
                <div>
                    <h4 className="my-5 text-lg font-semibold underline">Instructions:</h4>
                    <ul className="list-disc">
                        {
                            instructions.slice(0, 5).map(instruction => <li key={instruction}>{instruction.slice(0, 35)}...</li>)
                        }
                    </ul>
                </div>
                <br />
                <div className="flex items-center gap-5">
                    <h4 className="my-5 text-lg font-semibold">Ratings:</h4>
                    <h4><Rating style={{ maxWidth: 80 }} value={(ratings) && ratings} readOnly /></h4>
                </div>
                <br />
                <div className="flex items-center gap-2 mx-auto mt-5 text-center">
                    <Link to={`/recipes/${id}`}><button className="btn-sm btn btn-primary"><PiEyeFill className="hidden text-xl md:block" /> View</button></Link>
                    <button className="btn-sm btn btn-primary" onClick={() => handler(name)} disabled={disable}>Favorite <PiHeartFill className="hidden text-xl md:block" /></button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;