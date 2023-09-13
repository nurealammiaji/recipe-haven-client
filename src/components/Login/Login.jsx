import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/Providers";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const Login = () => {

    const { login, googleLogin, githubLogin } = useContext(AuthContext);

    const [displayError, setDisplayError] = useState(null);
    const [displaySuccess, setDisplaySuccess] = useState(null);

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (email.length < 1 && password.length < 1) {
            setDisplayError("Please type email & password !!");
            return;
        }
        else {
            login(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    setDisplaySuccess("Login Successful !!");
                    console.log(loggedUser);
                })
                .catch(error => {
                    const errorMessage = error.message;
                    setDisplayError(errorMessage);
                })
        }
    }

    const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                setDisplaySuccess("Login Successful !!");
                console.log(loggedUser);
            })
            .catch(error => {
                const errorMessage = error.message;
                setDisplayError(errorMessage);
            })
    }

    const githubLoginHandler = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;
                setDisplaySuccess("Login Successful !!");
                console.log(loggedUser);
            })
            .catch(error => {
                const errorMessage = error.message;
                setDisplayError(errorMessage);
            })
    }

    return (
        <div className="min-h-screen">
            <div className="my-24">
                <div className="card w-full max-w-sm mx-auto shadow-2xl">
                    <form onSubmit={loginHandler} className="card-body">
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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <div className="flex justify-between items-center">
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">Need Account?</Link>
                                </label>
                                <label className="label">
                                    <Link to="/forgot" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <br />
                        <p className="text-center italic">or</p>
                        <div className="form-control">
                            <label className="label mx-auto">
                                <span className="label-text text-lg font-semibold">Social Login</span>
                            </label>
                            <hr />
                            <div className="flex justify-evenly mt-3">
                                <button onClick={googleLoginHandler} className="btn btn-circle"><FaGoogle className="text-2xl" /></button>
                                <button onClick={githubLoginHandler} className="btn btn-circle"><FaGithub className="text-2xl" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;