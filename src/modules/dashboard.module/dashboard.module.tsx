import React, { forwardRef, useEffect } from 'react';
import {Button, Container, createStyles, Group, Select, Text} from "@mantine/core";
import {Stats} from "./components/stats";
import {NewUsersList} from "./components/new-users-list";
import { API } from "../../app.shared/app.services";

const monthsData = [
    {
        value: '1',
        label: 'За январь'
    },
    {
        value: '2',
        label: 'За февраль'
    },
    {
        value: '3',
        label: 'За март'
    },
    {
        value: '4',
        label: 'За апрель'
    },
    {
        value: '5',
        label: 'За май'
    },
    {
        value: '6',
        label: 'За июнь'
    },
    {
        value: '7',
        label: 'За июль'
    },
    {
        value: '8',
        label: 'За август'
    },
    {
        value: '9',
        label: 'За сентябрь'
    },
    {
        value: '10',
        label: 'За открябрь'
    },
    {
        value: '11',
        label: 'За ноябрь'
    },
    {
        value: '12',
        label: 'За декабрь'
    },

]

const newUsersData = [
    {
        name: 'Ковалев Дмитрий Иванович',
        kids: ['Ковалев Иван', 'Ковалева Анна'],
        regDate: '10',
        isWaiting: true
    },
    {
        name: 'Иванов Иван Иванович',
        kids: ['Иванов Иван', 'Иванова Анна'],
        regDate: '10',
        isWaiting: false
    },
    {
        name: 'Семенов Семен Иванович',
        kids: ['Семенов Иван', 'Семенова Анна'],
        regDate: '10',
        isWaiting: true
    },
]

const statsData = [
    {
        label: 'Всего посещений',
        stats: '1356',
        progress: 70,
        color: 'green',
        icon: 'up',
        buttonLabel: 'Перейти к посещениям',
        buttonColorTo: 'teal',
        buttonColorFrom: 'lime',
    },
    {
        label: 'Проведено мероприятий',
        stats: '267',
        progress: 80,
        color: 'blue',
        icon: 'up',
        buttonLabel: 'Посмотреть мероприятия',
        buttonColorTo: 'indigo',
        buttonColorFrom: 'cyan',
    },
    {
        label: 'Новых пользователей',
        stats: '25',
        progress: 40,
        color: 'red',
        icon: 'down',
        buttonLabel: 'Просмотреть новых пользователей',
        buttonColorTo: 'orange',
        buttonColorFrom: 'red',
    }
]


const useStyles = createStyles((theme) => ({
    button: {
        borderRadius: 0,
        borderWidth: '1px',
        borderColor: '#EAECEE',
        fontWeight: 500,

        '&:not(:first-of-type)': {
            borderLeftWidth: 0,
        },

        '&:first-of-type': {
            borderTopLeftRadius: theme.radius.sm,
            borderBottomLeftRadius: theme.radius.sm,
        },

        '&:last-of-type': {
            borderTopRightRadius: theme.radius.sm,
            borderBottomRightRadius: theme.radius.sm,
        },
    },
}));


const Dashboard = () => {
    const { classes } = useStyles();

    useEffect(() => {
        console.log(API.INSTITUTIONS())
    }, [])

    return (
        <Container mt={ 100 }>
            {/*<Select*/}
            {/*    data={ monthsData }*/}
            {/*    defaultValue={ '6' }*/}
            {/*    variant={ 'unstyled' }*/}
            {/*    style={{width: '120px'}}*/}
            {/*    dropdownComponent={ 'bottom' }*/}
            {/*/>*/}
             <Group spacing={0} mb={ 20 }>
                    <Button variant="default" className={classes.button}>
                        Сегодня
                    </Button>
                    <Button variant="default" className={classes.button}>
                        Неделя
                    </Button>
                    <Button  variant="default" className={classes.button}>
                        Месяц
                    </Button>
                    <Button variant="default" className={classes.button}>
                        Год
                    </Button>
                </Group>
                <Stats data={ [
                    {
                        label: 'Всего посещений',
                        stats: '1356',
                        progress: 70,
                        color: 'green',
                        icon: 'up',
                        buttonLabel: 'Перейти к посещениям',
                        buttonColorTo: 'teal',
                        buttonColorFrom: 'lime',
                    },
                    {
                        label: 'Проведено мероприятий',
                        stats: '267',
                        progress: 80,
                        color: 'blue',
                        icon: 'up',
                        buttonLabel: 'Посмотреть мероприятия',
                        buttonColorTo: 'indigo',
                        buttonColorFrom: 'cyan',
                    },
                    {
                        label: 'Новых пользователей',
                        stats: '25',
                        progress: 40,
                        color: 'red',
                        icon: 'down',
                        buttonLabel: 'Просмотреть новых пользователей',
                        buttonColorTo: 'orange',
                        buttonColorFrom: 'red',
                    }
                ] }/>
                <NewUsersList data={ newUsersData } />
        </Container>
    );
};

export default {
    routeProps: {
        path: 'dashboard/*',
        element: <Dashboard/>,
    },
    name: 'Profile',
};