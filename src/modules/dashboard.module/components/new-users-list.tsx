import React, {useState} from 'react';
import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';
import {useNavigate} from "react-router-dom";
import UserInfoModal from "./user-info-modal";

interface NewUsersListProps {
    data: { avatar?: string; name: string; kids: string[]; regDate: string; isWaiting: boolean }[];
}

export function NewUsersList({ data }: NewUsersListProps) {
    const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false)


    const rows = data.map((item) => (
        <tr key={item.name}>
            <td>
                <Group spacing="sm" onClick={ ()=>setIsUserInfoModalOpen(true)}>
                    <Avatar size={40} radius={40} />
                    <div >
                        <Text
                            size="sm"
                            weight={500}

                            sx={{
                                zIndex: 200,

                            }}
                        >
                            {item.name}
                        </Text>
                        {/*<Text size="xs" color="dimmed">*/}
                        {/*    {item.email}*/}
                        {/*</Text>*/}
                    </div>
                </Group>
            </td>

            <td>
                <Select data={ item.kids } defaultValue={item.kids[0]} variant="unstyled" />
            </td>
            <td>{Math.floor(Math.random() * 6 + 5)} дней назад</td>
            <td>
                {item.isWaiting ? (
                    <Badge fullWidth>Ожидает подтверждения</Badge>
                ) : (
                    <Badge color="gray" fullWidth>
                        Подтвержден
                    </Badge>
                )}
            </td>
        </tr>
    ));

    return (
        <ScrollArea>
            <Group p={ 30 } mt={ 50 } sx={{backgroundColor: 'white', border: '1px solid #E9ECEE', borderRadius: '4px'}}>
                <Group>
                    <Text size={ 'xl' } weight={ 700 }>
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
                />

            }
        </ScrollArea>
    );
}