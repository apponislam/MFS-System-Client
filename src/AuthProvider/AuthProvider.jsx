import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // const createUser = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password);
    // };

    // const signInUser = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // };

    // const googleSignIn = () => {
    //     setLoading(true);
    //     const googleProvider = new GoogleAuthProvider();
    //     return signInWithPopup(auth, googleProvider);
    // };

    // const githubSignIn = () => {
    //     setLoading(true);
    //     const githubProvider = new GithubAuthProvider();
    //     return signInWithPopup(auth, githubProvider);
    // };

    // const logOut = () => {
    //     setLoading(true);
    //     return signOut(auth);
    // };

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, (mainUser) => {
    //         console.log(mainUser);
    //         setUser(mainUser);
    //         setLoading(false);
    //     });
    //     return () => unSubscribe();
    // }, []);

    const info = { user, setUser, loading, setLoading };

    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
