import React, {useEffect, useState} from 'react';
import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';
import {useNavigate} from "react-router-dom";
import UserInfoModal from "./user-info-modal";
import {
    Attendee,
    CreateAttendeeDto,
    CreatePassportDto,
    CreateProfileDto,
    Passport,
    Profile
} from "../../../app.shared/app.models";
import {$api, API, useResource} from "../../../app.shared/app.services";

interface NewUsersListProps {
    attendees: Attendee[] | null;
}

export function NewUsersList({ attendees }: NewUsersListProps) {
    const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState<Attendee | null>(null)

    const openModal = (user: Attendee) => {
        setCurrentUser(user)
        setIsUserInfoModalOpen(true)
    }

    const [passports, setPassports] = useState<Passport[]>();
    const passportsRes = useResource<Passport, CreatePassportDto, any>(API.PASSPORTS(), $api);

    // useEffect(() => {
    //     if (attendees !== null) {
    //         const tempPassports: any[] | ((prevState: Passport[] | undefined) => Passport[] | undefined) | undefined = []
    //         console.log(attendees)
    //         attendees?.map( (attendee) => {
    //             const p = passportsRes.do
    //                 .get(
    //                     attendee.passportId
    //                 )
    //             console.log(p)
    //             tempPassports.push(p)
    //         })
    //         setPassports(tempPassports)
    //         console.log(tempPassports)
    //     }
    // }, [attendees])

    // const [profiles, setProfiles] = useState<Profile[]>();
    // const profilesRes = useResource<Profile, CreateProfileDto, any>(API.PROFILES(), $api);
    //
    // useEffect(() => {
    //     if (attendees !== null) {
    //         const tempProfiles: any[] | ((prevState: Profile[] | undefined) => Profile[] | undefined) | undefined = []
    //         console.log(attendees)
    //         attendees?.map( (attendee) => {
    //             const p = profilesRes.do
    //                 .get(
    //                     attendee.profileId
    //                 )
    //             console.log(p)
    //             tempProfiles.push(p)
    //         })
    //         setProfiles(tempProfiles)
    //         console.log(tempProfiles)
    //     }
    // }, [attendees])


    const rows = attendees !== null && attendees.slice(1, 5).map((attendee, index) => {
        return (
            <tr key={attendee.id}>
                <td>
                    <Group spacing="sm" onClick={ () => openModal(attendee) }>
                        <Avatar size={40} radius={40} />
                        <div >
                            <Text
                                size="sm"
                                weight={500}

                                sx={{
                                    zIndex: 200,

                                }}
                            >
                                {
                                    attendee.profile !== null &&
                                    <>
                                        {attendee.profile.lastname} {attendee.profile.firstname} {attendee.profile.middlename}
                                    </>
                                }
                            </Text>
                            {/*<Text size="xs" color="dimmed">*/}
                            {/*    {item.email}*/}
                            {/*</Text>*/}
                        </div>
                    </Group>
                </td>

                <td>
                    <Select data={ [ 'Иванов Иван', 'Иванова Анна' ] } defaultValue={'Иванов Иван'} variant="unstyled" />
                </td>
                <td>{Math.floor(Math.random() * 6 + 5)} дней назад</td>
                <td>
                    {attendee.status == 'PENDING'  ? (
                        <Badge fullWidth>Ожидает подтверждения</Badge>
                    ) : (
                        <Badge color="gray" fullWidth>
                            Подтвержден
                        </Badge>
                    )}
                </td>
            </tr>
        )
    });

    return (
        <ScrollArea>
            <Group p={ 30 } sx={{backgroundColor: 'white', border: '1px solid #E9ECEE', borderRadius: '4px'}}>
                <Group>
                    <Text size={ 'xl' } weight={ 600 }>
                        Проверка новых пользователей
                    </Text>
                    <Badge color={ 'red' }>32 заявки</Badge>
                </Group>
                <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                    <thead>
                    <tr>
                        <th>Законный опекун</th>
                        <th>Дети</th>
                        <th>Дата регистрации</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Group>
            {
                isUserInfoModalOpen
                &&
                <UserInfoModal
                    opened={ isUserInfoModalOpen }
                    setOpened={ setIsUserInfoModalOpen }
                    user={ currentUser }
                />

            }
        </ScrollArea>
    );
}