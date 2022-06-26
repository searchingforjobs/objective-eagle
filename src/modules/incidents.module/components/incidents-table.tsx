import React, {useState} from 'react';
import {Avatar, Badge, Table, Group, Text, Select, ScrollArea, Button} from '@mantine/core';
import {Attendee, Incident} from "../../../app.shared/app.models";
import {Filter} from "tabler-icons-react";
import UserInfoModal from "../../dashboard.module/components/user-info-modal";
import IncidentsDetailsModal from "./incidents-details-modal";

interface UsersTableProps {
    incidents: Incident[] | null,
}


export function IncidentsTable({ incidents }: UsersTableProps) {


    // const rows = incidents !== null ? incidents.map((item) => (
    //     <tr key={item.id}>
    //         <td>
    //             <Group spacing="sm" onClick={ () => openModal(item) }>
    //                 <Avatar size={40}  radius={40} />
    //                 <div>
    //                     <Text size="sm" weight={500}>
    //                         {item.lastname} {item.firstname} {item.middlename}
    //                     </Text>
    //                 </div>
    //             </Group>
    //         </td>
    //         <td> {item.createdAt.toString()} </td>
    //         <td align={ 'right' }>
    //             <Button variant={ 'light' } color={ 'gray' }>Подробнее</Button>
    //         </td>
    //     </tr>
    //
    // ))
    //     :

    const mock = [
        {
            id: '123',
            security: 'qqq',
            securityId: 'qqq',
            firstname: 'Олег',
            middlename: 'Игоревич',
            lastname: 'Лихогуб',
            photoUrl: '',
            description: 'Мужчина пришёл забирать ребёнка, сказал, что всё знает о системе, но так и не зарегистрировался. ',
            createdAt: new Date(2022, 6, 22),
            updatedAt: new Date(2022, 1, 10),
        },
        {
            id: '123',
            security: 'qqq',
            securityId: 'qqq',
            firstname: 'Неизвестно',
            middlename: '',
            lastname: '',
            photoUrl: '',
            description: 'Женщина отказалась называть своё имя, хотела попасть в здание школы, объяснить зачем ей нужно не захотела. ',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]

    console.log(mock)
    const rows = mock.map((item: any) => (
            <tr key={item.id}>
                <td>
                    <Group spacing="sm" onClick={ () => openModal(item) }>
                        <Avatar size={40}  radius={40} />
                        <div>
                            <Text size="sm" weight={500}>
                                {item.lastname} {item.firstname} {item.middlename}
                            </Text>
                        </div>
                    </Group>
                </td>
                <td> 20.07.2022 </td>
                <td align={ 'right' }>
                    <Button variant={ 'light' } color={ 'gray' }>Подробнее</Button>
                </td>
            </tr>

        ))

    const [isIncidentDetailModalOpened, setIsIncidentDetailModalOpened] = useState(false)
    const [currentIncident, setCurrentIncident] = useState<Incident | null>(null)

    const openModal = (incident: Incident) => {
        setCurrentIncident(incident)
        setIsIncidentDetailModalOpened(true)
    }

    return (

        <>
            <Group p={ 30 } sx={{backgroundColor: 'white', border: '1px solid #E9ECEE', borderRadius: '4px'}}>
                <Group position={ 'apart' } sx={{width: '100%'}}>
                    <Text size={ 'xl' } weight={ 600 }>
                        Инциденты
                    </Text>
                    <Button leftIcon={ <Filter/> } color={ 'gray' } variant={ 'light' }>Сбросить фильтры</Button>
                </Group>
                <Table verticalSpacing="md">
                    <thead>
                    <tr>
                        <th>Посетитель</th>
                        <th>Дата визита</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
                {
                    isIncidentDetailModalOpened
                    &&
                    <IncidentsDetailsModal
                        opened={ isIncidentDetailModalOpened }
                        setOpened={ setIsIncidentDetailModalOpened }
                        incident={ currentIncident }
                    />

                }
            </Group>
        </>
    );
}