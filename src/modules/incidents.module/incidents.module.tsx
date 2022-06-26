import React, {useEffect, useState} from 'react';
import {Container} from "@mantine/core";
import {$api, API, useResource} from "../../app.shared/app.services";
import {Attendee, CreateAttendeeDto, CreateIncidentDto, Incident, SecurityProfile} from "../../app.shared/app.models";
import {IncidentsTable} from "./components/incidents-table";



const Incidents = () => {



    const incidents = useResource<Incident, CreateIncidentDto, any>(API.INCIDENTS(), $api);


    return (
        <Container mt={100}>
            <IncidentsTable incidents={ incidents.data }/>
        </Container>
    );
}

export default {
    routeProps: {
        path: 'incidents',
        exact: true,
        index: false,
        element: <Incidents/>,
    },
    name: 'Incidents',
};