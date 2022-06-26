import React from 'react';
import {Button, Container, Group, Paper, Text} from "@mantine/core";
import {NewUsersList} from "../dashboard.module/components/new-users-list";
import {$api, API, useResource} from "../../app.shared/app.services";
import {Attendee, CreateAttendeeDto, CreateProfileDto, Profile} from "../../app.shared/app.models";
import {AllUsers} from "./components/all-users";


const newUsersData = [
    {
        name: 'Ковалев Дмитрий Иванович',
        kids: [ 'Ковалев Иван', 'Ковалева Анна' ],
        regDate: '10',
        isWaiting: true
    },
    {
        name: 'Иванов Иван Иванович',
        kids: [ 'Иванов Иван', 'Иванова Анна' ],
        regDate: '10',
        isWaiting: false
    },
    {
        name: 'Семенов Семен Иванович',
        kids: [ 'Семенов Иван', 'Семенова Анна' ],
        regDate: '10',
        isWaiting: true
    },
]

const Data = () => {
    const attendees = useResource<Attendee, CreateAttendeeDto, any>(API.ATTENDEES(), $api);
    const profiles = useResource<Profile, CreateProfileDto, any>(API.PROFILES(), $api);

    return (
        <Container mt={100}>
            <Text size={ 'xl' } mb={ 20 } weight={ 600 }>Реестр данных</Text>
            <NewUsersList attendees={ attendees.data }/>
            <Group  mt={ 20 } direction={ 'row' } align={ 'top' } position={ 'apart' }>
                <AllUsers attendees={ attendees.data }/>
                <Group direction={ 'column' }>
                    <Paper p={ 27 }  sx={{backgroundColor: 'white', border: '1px solid #E9ECEE', borderRadius: '4px', width: '100%', maxHeight: '150px'}}>
                        <Text size={ 'sm' } weight={ 500 } transform={ 'uppercase' }>Журнал учета посетителей</Text>
                        <Button fullWidth mt={ 20 }>Открыть журнал</Button>
                    </Paper>
                    <Paper p={ 27 }  sx={{backgroundColor: 'white', border: '1px solid #E9ECEE', borderRadius: '4px',width: '100%', maxHeight: '150px'}}>
                        <Text size={ 'sm' } weight={ 500 } transform={ 'uppercase' }>Календарь событий</Text>
                        <Group direction={ 'row' }  mt={ 20 }>
                            <Button>Открыть</Button>
                            <Button>Создать событие</Button>
                        </Group>
                    </Paper>
                    <Paper p={ 27 }  sx={{backgroundColor: 'white', border: '1px solid #E9ECEE', borderRadius: '4px',width: '100%', maxHeight: '150px'}}>
                        <Text size={ 'sm' } weight={ 600 } >Нужно о чем-то рассказать?</Text>
                        <Text size={ 'xs' } weight={ 500 } >Создайте новость</Text>
                        <Group direction={ 'row' }  mt={ 20 }>
                            <Button fullWidth>Создать новость</Button>
                        </Group>
                    </Paper>
                </Group>
            </Group>


        </Container>
    );
};


export default {
    routeProps: {
        path: 'data',
        exact: true,
        index: false,
        element: <Data/>,
    },
    name: 'Data',
};