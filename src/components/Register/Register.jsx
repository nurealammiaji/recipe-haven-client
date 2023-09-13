import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";


const Register = () => {

    const { emailRegister } = useContext(AuthContext);

    const [displayError, setDisplayError] = useState(null);
    const [displaySuccess, setDisplaySuccess] = useState(null);

    const registerHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (name.length < 1 && photo.length < 1 && email.length < 1 && password.length < 1) {
            setDisplayError("Please fill the empty field !!");
            return;
        }
        else {
            emailRegister(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    setDisplaySuccess("Registration Successful !!");
                    console.log(loggedUser);
                })
                .catch(error => {
                    const errorMessage = error.message;
                    setDisplayError(errorMessage);
                })
        }
    }

    return (
        <div className="min-h-screen">
            <div className="my-24">
                <div className="card w-full max-w-sm mx-auto shadow-2xl">
                    <form onSubmit={registerHandler} className="card-body">
                        {
                            (displayError) &&
                            <p className="text-center text-red-500">{displayError}</p>
                        }
                        {
                            (displaySuccess) &&
                            <p className="text-center text-green-500">{displaySuccess}</p>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="https://" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Register;