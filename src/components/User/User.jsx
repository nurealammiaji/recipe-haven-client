import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";

const User = () => {

    const { user, loading } = useContext(AuthContext);

    const { displayName, photoURL, email, emailVerified, phoneNumber } = user;

    return (
        <div className="min-h-screen">
            {
                (loading) ?
                    <div className="min-h-screen text-center">
                        <br /><br />
                        <span className="loading loading-ring loading-lg text-primary"></span>
                        <br /><br />
                        <h3 className="text-2xl text-primary">Loading <span className="ml-3 loading loading-dots loading-md text-primary"></span></h3>
                        <br /><br />
                    </div> :
                    (user) &&
                    <div>
                        <br /><br /><br />
                        <div className="mx-auto border shadow-xl border-base w-96 card bg-base-200">
                            <figure><img className="py-5" src={photoURL} alt="User Image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {(displayName) ? displayName : "Not Found"}
                                    <div className="badge badge-secondary">online</div>
                                </h2>
                                <br /><br />
                                <div className="items-center justify-start card-actions">
                                    Email:
                                    <div className="badge badge-outline">{(email) ? email : "Not Found"}</div>
                                </div>
                                <div className="items-center justify-start card-actions">
                                    Email Verified:
                                    <div className="badge badge-outline">{(emailVerified === false) ? "Not Verified" : "Verified"}</div>
                                </div>
                                <div className="items-center justify-start card-actions">
                                    Phone Number:
                                    <div className="badge badge-outline">{(phoneNumber === null) ? "Not Found" : phoneNumber}</div>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br />
                    </div>
            }

        </div>
    );
};

export default User;