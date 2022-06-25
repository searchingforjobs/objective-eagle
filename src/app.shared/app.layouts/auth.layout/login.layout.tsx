import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Center, Container, Divider, Group, Image, Text} from "@mantine/core";

import gos from '../../app.images/gosuslugi.svg';

export const LoginLayout = () => {

    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error
    // ] = useSignInWithEmailAndPassword(auth);
    //
    const navigate = useNavigate()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const login = () => {
        // signInWithEmailAndPassword(email, password)
        navigate('/')
    };

    const loginManager = () => {
        // signInWithEmailAndPassword("mmail@mail.ru", "manager")
        navigate('/dashboard')
    }

    const loginUser = () => {
        // signInWithEmailAndPassword("mail@mail.ru", "123456")
        navigate('/')
    }

    return (
            <Center sx={{ height: '80vh' }}>
                <Group direction={ 'column' } align={ 'center' }>
                    <Text mb={ 50 } weight={ 700 } color={ 'blue' } sx={{ fontSize: '40px' }} >ПропускЕсть</Text>
                    {/*<Button fullWidth onClick={ loginManager }>Родитель</Button>*/}
                    <Button fullWidth onClick={ loginManager }>Менеджер</Button>
                    <Divider size={ 'xs' } label={ 'или' } labelPosition={ 'center' } sx={{width: '100%'}}/>
                    <Button fullWidth onClick={ () => {} }>Создать профиль</Button>
                    <Button fullWidth onClick={ () => {} } sx={{
                        border: '1px solid #E7E7E7',
                        backgroundColor: 'white',
                        '&:hover': {
                            border: '1px solid #E7E7E7',
                            backgroundColor: 'white',
                        }
                    }}>
                        <Image
                            src={ gos }
                        />
                    </Button>
                </Group>
            </Center>
    );
}
