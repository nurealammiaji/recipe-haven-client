import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import { PiCookingPotBold, PiHeartFill } from "react-icons/pi";

const Popular = ({ recipe }) => {

    const { image, name, description, ingredients, cuisine, ratings } = recipe;

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
                <br />
                <div className="flex items-center gap-5">
                    <h4 className="my-5 text-lg font-semibold">Ratings:</h4>
                    <h4><Rating style={{ maxWidth: 80 }} value={(ratings) && ratings} readOnly /></h4>
                </div>
                <br />
                <div className="mt-5 text-center">
                    <button className="btn-sm btn btn-primary" onClick={() => handler(name)} disabled={disable}><PiHeartFill className="text-xl text-red-600" /> Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Popular;