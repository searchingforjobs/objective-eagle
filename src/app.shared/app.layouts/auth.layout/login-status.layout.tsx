import React from "react";

export const LoginStatusLayout = () => {

    // const [ user, loading, error ] = useAuthState(auth);

    const logout = () => {
        // signOut(auth)
    };

    return (
        <div>
            <h4> User Logged In: </h4>
            {/*{user?.email}*/}
            {/*{user?.uid}*/}
            {/*{user?.emailVerified}*/}
            {/*{user?.refreshToken}*/}
            {/*{user?.photoURL}*/}
            <button onClick={logout}> Sign Out</button>
        </div>
    );
}