import {Avatar, Button, Header as MantineHeader, Image} from "@mantine/core";
import {Container, Group, Text} from "@mantine/core";
import {Star} from "tabler-icons-react";
import {useLocation, useNavigate} from "react-router-dom";


import logo from '../../app.images/logo.svg'

export const AppHeader = (props:{title:JSX.Element, children?:JSX.Element}) => {
    const navigate = useNavigate()
    const locaton = useLocation()

    return(
        <>
            {props.children}
            {
                locaton.pathname != '/' &&
                <MantineHeader height={ 50 } fixed={true} position={{ top: 0, left: 0, right: 0 }}>
                    <Container size={'md'} mt={ 10 }>
                        <Group position={ 'apart' } align={ 'center' }>
                            <Image src={ logo }/>
                            {/*<Group>*/}
                            {/*    <Avatar color="blue" radius="xl" src={ logo } />*/}
                            {/*</Group>*/}
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
                                    onClick={ () => navigate('/incidents') }
                                    sx={{height: '30px', '&:focus': {backgroundColor: 'rgba(231, 245, 255, 1)'}}}>
                                    Инциденты
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