import React  from "react";
import {LoadingOverlay} from "@mantine/core";

const AuthPage = () => {

    return(
        <>
            <LoadingOverlay visible={true}/>
        </>
    )
}

export default {
    routeProps: {
        path: 'auth',
        exact: true,
        index: false,
        element: <AuthPage/>,
    },
    name: 'Auth',
};