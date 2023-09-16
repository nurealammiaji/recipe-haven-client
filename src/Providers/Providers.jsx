import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const Providers = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [chefs, setChefs] = useState([]);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const emailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    useEffect( () => {
        fetch("https://recipe-haven-server-bd.vercel.app/chefs")
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])

    useEffect( () => {
        fetch("https://recipe-haven-server-bd.vercel.app/recipes")
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    const authInfo = {
        user,
        chefs,
        recipes,
        loading,
        googleLogin,
        githubLogin,
        emailLogin,
        emailRegister,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Providers;