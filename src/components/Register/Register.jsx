import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { emailRegister } = useContext(AuthContext);

    const [displayError, setDisplayError] = useState(null);
    const [displaySuccess, setDisplaySuccess] = useState(null);

    const navigate = useNavigate();

    const registerHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (name.length < 1 && photo.length < 1 && email.length < 1 && password.length < 1) {
            setDisplayError("Please fill the empty field !!");
            setDisplaySuccess(null);
            return;
        }
        else if (password.length < 6) {
            setDisplayError("Password should be at least 6 characters");
            setDisplaySuccess(null);
            return;
        }
        else {
            emailRegister(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    updateProfile(loggedUser, {
                        displayName: name,
                        photoURL: photo,
                    })
                    .then(result => {
                        console.log(result);
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                    setDisplaySuccess("Registration Successful !!");
                    setDisplayError(null);
                    navigate("/", {replace: true});
                    console.log(loggedUser);
                    form.reset();
                })
                .catch(error => {
                    const errorMessage = error.message;
                    setDisplayError(errorMessage);
                    setDisplaySuccess(null);
                })
        }
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="py-24">
                <div className="w-full max-w-sm mx-auto shadow-2xl card bg-base-100">
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
                        <div className="mt-3 form-control">
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