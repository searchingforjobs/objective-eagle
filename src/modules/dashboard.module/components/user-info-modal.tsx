import React from 'react';
import {Avatar, Group, Modal, Space, Timeline, Text, Divider, Button} from "@mantine/core";

interface UserInfoModalProps {
    opened: boolean;
    setOpened: (a:boolean) => void;
}

const UserInfoModal = (props: UserInfoModalProps) => {
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
                            <Text weight={ 700 } size={ 'lg' }>Иванов Иван Иванович</Text>
                            <Group direction={ 'column' }>
                                <Text sx={{ lineHeight: 0.5 }} size={ 'sm' }>Дата рождения: 12.06.1986</Text>
                                <Text sx={{ lineHeight: 0.5 }} size={ 'sm' }>Контактный телефон: 8-918-285-0923</Text>
                            </Group>
                        </Group>
                    </Group>
                    <Divider size={ 'sm' } style={{ width: '100%' }}/>
                    <Group align={ 'top' }>
                        <Text weight={ 600 } size={ 'sm' }  sx={{width: '100px'}}>Паспорт РФ:</Text>
                        <Group direction={ 'column' } spacing={5} align={ 'top' }>
                            <Group align={ 'top' }>
                                <Text weight={ 600 }  size={ 'sm' } sx={{width: '150px'}}>Серия/Номер:</Text>
                                <Text  size={ 'sm' }>0323 123456</Text>
                            </Group>
                            <Group align={ 'top' }>
                                <Text weight={ 600 }  size={ 'sm' }  sx={{width: '150px'}}>Выдан:</Text>
                                <Text  size={ 'sm' }>ГУ МВД РОССИИ<br/> ПО КРАСНОДАРСКОМУ КРАЮ</Text>
                            </Group>
                            <Group align={ 'top' }>
                                <Text weight={ 600 }  size={ 'sm' }  sx={{width: '150px'}}>Код подразделения:</Text>
                                <Text  size={ 'sm' }>230-000</Text>
                            </Group>
                            <Group align={ 'top' }>
                                <Text weight={ 600 }  size={ 'sm' }  sx={{width: '150px'}}>Дата выдачи:</Text>
                                <Text  size={ 'sm' }>12.01.1997</Text>
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