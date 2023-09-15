import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/Providers";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const Login = () => {

    const { emailLogin, googleLogin, githubLogin} = useContext(AuthContext);

    const [displayError, setDisplayError] = useState(null);
    const [displaySuccess, setDisplaySuccess] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

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
            emailLogin(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    setDisplaySuccess("Login Successful !!");
                    setDisplayError(null);
                    navigate(from, {replace: true});
                    console.log(loggedUser);
                })
                .catch(error => {
                    const errorMessage = error.message;
                    setDisplayError(errorMessage);
                    setDisplaySuccess(null);
                })
        }
    }

    const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                setDisplaySuccess("Login Successful !!");
                setDisplayError(null);
                navigate(from, {replace: true});
                console.log(loggedUser);
            })
            .catch(error => {
                const errorMessage = error.message;
                setDisplayError(errorMessage);
                setDisplaySuccess(null);
            })
    }

    const githubLoginHandler = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;
                setDisplaySuccess("Login Successful !!");
                setDisplayError(null);
                navigate(from, {replace: true});
                console.log(loggedUser);
            })
            .catch(error => {
                const errorMessage = error.message;
                setDisplayError(errorMessage);
                setDisplaySuccess(null);
            })
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="py-24">
                <div className="w-full max-w-sm mx-auto shadow-2xl card bg-base-100">
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
                            <div className="flex items-center justify-between">
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">Need an account?</Link>
                                </label>
                                <label className="label">
                                    <Link to="/forgot" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                        </div>
                        <div className="mt-3 form-control">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <br />
                        <p className="italic text-center divider">or</p>
                        <div className="form-control">
                            <div className="flex justify-evenly">
                                <button type="button" onClick={googleLoginHandler} className="btn btn-circle btn-primary"><FaGoogle className="text-2xl" /></button>
                                <button type="button" onClick={githubLoginHandler} className="btn btn-circle btn-primary"><FaGithub className="text-2xl" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;