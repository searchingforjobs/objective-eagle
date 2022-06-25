import {Avatar, Button, Header as MantineHeader} from "@mantine/core";
import {Container, Group, Text} from "@mantine/core";
import {Star} from "tabler-icons-react";
import {useLocation, useNavigate} from "react-router-dom";

export const AppHeader = (props:{title:JSX.Element, children?:JSX.Element}) => {
    const navigate = useNavigate()
    const locaton = useLocation()

    return(
        <>
            {props.children}
            {
                locaton.pathname != '/' &&
                <MantineHeader height={ 50 } fixed={true} position={{ top: 0, left: 0, right: 0 }}>
                    <Container size={'md'} mt={ 5 }>
                        <Group position={ 'apart' } align={ 'center' }>
                            <Group>
                                <Avatar color="blue" radius="xl">
                                    <Star size={24} />
                                </Avatar>
                                <Text weight={ 600 }>
                                    Андромеда
                                </Text>
                            </Group>
                            <Group>
                                <Button
                                    variant={ 'subtle' }
                                    onClick={ () => navigate('/dashboard') }
                                    sx={{height: '30px', '&:focus': {backgroundColor: 'rgba(231, 245, 255, 1)'}}}>
                                    Панель управления
                                </Button>
                                <Button
                                    variant={ 'subtle' }
                                    onClick={ () => navigate('/data') }
                                    sx={{height: '30px', '&:focus': {backgroundColor: 'rgba(231, 245, 255, 1)'}}}>
                                    Реестр данных
                                </Button>
                                <Button
                                    variant={ 'subtle' }
                                    onClick={ () => navigate('/') }
                                    sx={{height: '30px', '&:focus': {backgroundColor: 'rgba(231, 245, 255, 1)'}}}>
                                    Выйти
                                </Button>
                            </Group>
                        </Group>
                    </Container>
                </MantineHeader>
            }
        </>
    )
}