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
        path: 'profile',
        exact: true,
        index: false,
        element: <Profile/>,
    },
    name: 'Profile',
};