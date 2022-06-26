import React from 'react';
import {Avatar, Table, Group, Text, ActionIcon, Menu, ScrollArea, Button, Badge} from '@mantine/core';
import {Pencil, Messages, Note, ReportAnalytics, Trash, Filter} from 'tabler-icons-react';
import {Attendee, CreateProfileDto, Profile, User} from "../../../app.shared/app.models";

interface UsersStackProps {
    attendees: Attendee[] | null
}

export function AllUsers({ attendees }: UsersStackProps) {

    const rows = attendees !== null && attendees.map((attendee) => {
        if (attendee.profile !== null) {
            return (
                <tr key={attendee.id}>
                    <td>
                        <Group spacing="sm">
                            <Avatar size={40} radius={ 'xl' } />
                            <Text size="sm" weight={500}>
                                {attendee.profile.lastname} {attendee.profile.firstname} {attendee.profile.middlename}
                            </Text>
                        </Group>
                    </td>
                    <td>
                        <Group spacing={0} position="right">
                            <Button variant={ 'light' } color={ 'gray' } sx={{color: '#428DFC'}}>Подробнее</Button>
                        </Group>
                    </td>
                </tr>
            )
        }
    });

    return (
        <>
            <Group p={ 30 } sx={{backgroundColor: 'white', border: '1px solid #E9ECEE', borderRadius: '4px', maxWidth: '64%'}}>
                <Group position={ 'apart' } sx={{width: '100%'}}>
                    <Text size={ 'xl' } weight={ 600 }>
                        Все пользователи
                    </Text>
                    <Button leftIcon={ <Filter/> } color={ 'gray' } variant={ 'light' }>Сбросить фильтры</Button>
                </Group>
                <Table verticalSpacing="md">
                    <tbody>{rows}</tbody>
                </Table>
                <Button fullWidth color={ 'gray' } variant={ 'light' } sx={{color: '#428DFC'}}>Показать все</Button>
            </Group>
        </>
    );
}