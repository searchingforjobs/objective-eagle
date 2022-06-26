import React, {useEffect, useState} from 'react';
import {Avatar, Group, Modal, Space, Timeline, Text, Divider, Button} from "@mantine/core";
import {Attendee, CreatePassportDto, CreateProfileDto, Passport, Profile} from "../../../app.shared/app.models";
import {$api, API, useResource} from "../../../app.shared/app.services";

interface UserInfoModalProps {
    opened: boolean;
    setOpened: (a:boolean) => void;
    user: Attendee | null;
}

function formatDate(date: Date) {
    console.log(date)

    let dd = date.getDate();
    //@ts-ignore
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    //@ts-ignore
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    //@ts-ignore
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

const UserInfoModal = (props: UserInfoModalProps) => {

    // console.log(props.user?.birthdate.getUTCFullYear())
    // const passports = useResource<Passport, CreatePassportDto, any>(API.PASSPORTS(), $api);
    //
    // const [passport, setPassport] = useState<Passport>();
    //
    // useEffect(() => {
    //     const a = passports.do
    //         .get(
    //             props.user?.passportId
    //         )
    //     setPassport(a)
    // }, [])

    return (
        <Modal
            opened={ props.opened }
            onClose={ () => props.setOpened(false) }
            size={ 'xl' }
            padding={ 'xl' }
        >
            <Group position={ 'apart' } align={ 'top' } >
                <Group direction={ 'column' }>
                    <Group>
                        <Avatar size={ 100 }/>
                        <Group direction={ 'column' } spacing={ 25 } sx={{  }}>
                            <Text weight={ 700 } size={ 'lg' }>
                                {
                                    props.user?.profile !== null &&
                                    <>{props.user?.profile.lastname} {props.user?.profile.firstname} {props.user?.profile.middlename}</>
                                }

                            </Text>
                            <Group direction={ 'column' }>
                                <Text sx={{ lineHeight: 0.5 }} size={ 'sm' }>
                                    Дата рождения:
                                    {
                                        props.user?.passport !== null &&
                                        <>
                                            {props.user?.passport.birthdate}
                                        </>
                                        ||
                                        <>
                                             11.06.1980
                                        </>
                                    }
                                </Text>
                                <Text sx={{ lineHeight: 0.5 }} size={ 'sm' }>Контактный телефон: {props.user?.contactPhone }</Text>
                            </Group>
                        </Group>
                    </Group>
                    <Divider size={ 'sm' } style={{ width: '100%' }}/>
                    <Group align={ 'top' }>
                        <Text weight={ 600 } size={ 'sm' }  sx={{width: '100px'}}>Паспорт РФ:</Text>
                        <Group direction={ 'column' } spacing={5} align={ 'top' }>
                            <Group align={ 'top' }>
                                <Text weight={ 600 }  size={ 'sm' } sx={{width: '150px'}}>Серия/Номер:</Text>
                                <Text  size={ 'sm' }>
                                    {
                                        props.user?.passport !== null &&
                                        <>
                                            {props.user?.passport.documentSeries} {props.user?.passport.documentNumber}
                                        </>
                                        ||
                                        <>
                                            0322 123456
                                        </>
                                    }
                                </Text>
                            </Group>
                            <Group align={ 'top' }>
                                <Text weight={ 600 }  size={ 'sm' }  sx={{width: '150px'}}>Выдан:</Text>
                                <Text  size={ 'sm' }>ГУ МВД РОССИИ<br/> ПО КРАСНОДАРСКОМУ КРАЮ</Text>
                            </Group>
                            <Group align={ 'top' }>
                                <Text weight={ 600 }  size={ 'sm' }  sx={{width: '150px'}}>Код подразделения:</Text>
                                <Text  size={ 'sm' }>
                                    {
                                        props.user?.passport !== null &&
                                        <>
                                            {props.user?.passport.divisionCode}
                                        </>
                                        ||
                                        <>
                                            230-006
                                        </>
                                    }
                                </Text>
                            </Group>
                            <Group align={ 'top' }>
                                <Text weight={ 600 }  size={ 'sm' }  sx={{width: '150px'}}>Дата выдачи:</Text>
                                <Text  size={ 'sm' }>
                                    {
                                        props.user?.passport !== null &&
                                        <>
                                            {props.user?.passport.issuedAt.toString()}
                                        </>
                                        ||
                                        <>
                                            11.06.1987
                                        </>
                                    }
                                </Text>
                            </Group>
                        </Group>
                    </Group>
                    <Divider size={ 'sm' } style={{ width: '100%' }}/>
                    <Group align={ 'top' }>
                        <Text weight={ 600 } size={ 'sm' } sx={{width: '100px'}}>Дети:</Text>
                        <Group direction={ 'column' } spacing={5} align={ 'top' }>
                            <Text  size={ 'sm' } >Ковалева Мария Алексеевна</Text>
                            <Text  size={ 'sm' } >Ковалева Мария Алексеевна</Text>
                        </Group>
                    </Group>
                </Group>
                <Timeline active={2} bulletSize={20} lineWidth={3} sx={{ width: '200px' }}>
                    <Timeline.Item title={ <Text size={ 'sm' } sx={{ wordWrap: 'break-word' }}>Подтвердил номер телефона</Text> }>
                    </Timeline.Item>

                    <Timeline.Item title={ <Text size={ 'sm' } sx={{ wordWrap: 'break-word' }}>Внес паспортные данные</Text> }>
                    </Timeline.Item>

                    <Timeline.Item lineVariant="dashed" title={ <Text size={ 'sm' } sx={{ wordWrap: 'break-word' }}>Внес информацию о детях</Text> }>
                    </Timeline.Item>

                    <Timeline.Item title={ <Text size={ 'sm' } sx={{ wordWrap: 'break-word' }}>Ожидает подтверждение администратором</Text> }>
                    </Timeline.Item>

                </Timeline>
            </Group>
            <Group position={ 'right' } sx={{ width: '100%' }}>
                <Button mt={ 30 }>Подтвердить личность</Button>
            </Group>

        </Modal>
    );
};

export default UserInfoModal;