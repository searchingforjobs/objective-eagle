import React, { useEffect } from 'react';

import { Loader, ServerError } from './app.components';

import {Link, useNavigate} from 'react-router-dom';
import { CommonModules } from '../modules';
import { RTDB } from "./app.resources/app.resouces.realtimedb";
import {Title} from "@mantine/core";


const App = () => {
    // const [ user, loading, error ] = useAuthState(auth);
    let navigate = useNavigate();

    // const { watchedObject, setWatchedObject } = useWatchedObject<String>(RTDB.SAMPLE_PATH);


    return (
        <>
            <Title mx={15} my={20} order={2}>Авторизация</Title>
            {
                // error
                // && <ServerError/>
                // || loading
                // && <Loader/>
                // || <AuthLayout user={user}/>
            }
        </>
    );

}

export default {
    routeProps: {
        path: '/',
        exact: true,
        index: false,
        element: <App/>
    },
    name: 'Main'
}