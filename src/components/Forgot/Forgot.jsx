import { useState, useContext } from 'react';
import { AuthContext } from '../../Providers/Providers';

const Forgot = () => {

    const { forgot } = useContext(AuthContext);

    const [displayError, setDisplayError] = useState(null);
    const [displaySuccess, setDisplaySuccess] = useState(null);

    const forgotHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        if (email.length < 1) {
            setDisplayError("Please fill the empty field !!");
            return;
        }
        else {
            forgot(email)
                .then(result => {
                    const loggedUser = result.user;
                    setDisplaySuccess("Email Sent Successfully !!");
                    console.log(loggedUser);
                    form.reset();
                })
                .catch(error => {
                    const errorMessage = error.message;
                    setDisplayError(errorMessage);
                })
        }
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="py-24">
                <div className="w-full max-w-sm mx-auto shadow-2xl card bg-base-100">
                    <form onSubmit={forgotHandler} className="card-body">
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
                        <div className="mt-3 form-control">
                            <button type="submit" className="btn btn-primary">Send Reset Link</button>
                        </div>
                    </form>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Forgot;