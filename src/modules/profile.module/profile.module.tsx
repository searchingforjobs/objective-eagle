import React, {useEffect, useState} from 'react';

const Profile = () => {

    return (
        <>
            Профиль
        </>
    );
}

export default {
    routeProps: {
        path: '/',
        exact: true,
        index: false,
        element: <Profile/>,
    },
    name: 'Profile',
};