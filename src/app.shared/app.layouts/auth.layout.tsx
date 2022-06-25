import React from "react";
// import { UserInfo } from "@firebase/auth-types";

import { LoginStatusLayout } from "./auth.layout/login-status.layout";
import { RegistrationLayout } from "./auth.layout/registration.layout";
import { LoginLayout } from "./auth.layout/login.layout";


export const AuthLayout = () => {
    return (
        <div>
            {/*{props.user && <LoginStatusLayout/> || (*/}
            {/*    <>*/}
            {/*        /!*<RegistrationLayout/>*!/*/}
            {/*        <LoginLayout/>*/}
            {/*    </>*/}
            {/*)}*/}
            <LoginLayout/>
        </div>
    );
}
