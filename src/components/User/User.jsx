import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";

const User = () => {

    const { user } = useContext(AuthContext);

    const { displayName, photoURL, email, emailVerified, phoneNumber } = user;

    return (
        <div>
            {
                (user) &&
                <div>
                    <br /><br /><br />
                    <div className="mx-auto border shadow-xl border-base w-96 card bg-base-200">
                        <figure><img src={photoURL} alt="Chef Image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {displayName}
                                <div className="badge badge-secondary"></div>
                            </h2>
                            <br /><br />
                            <div className="items-center justify-start card-actions">
                                Email:
                                <div className="badge badge-outline">{email}</div>
                            </div>
                            <div className="items-center justify-start card-actions">
                                Email Verified:
                                <div className="badge badge-outline">{emailVerified}</div>
                            </div>
                            <div className="items-center justify-start card-actions">
                                Phone Number:
                                <div className="badge badge-outline">{phoneNumber}</div>
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