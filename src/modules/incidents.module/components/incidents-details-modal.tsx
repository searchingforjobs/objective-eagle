import React from 'react';
import {Avatar, Button, Group, Modal, Text} from "@mantine/core";
import {Incident} from "../../../app.shared/app.models";

interface IncidentsDetailsModalProps {
    opened: boolean,
    setOpened: (a:boolean) => void
    incident: Incident | null
}

const IncidentsDetailsModal = (props: IncidentsDetailsModalProps) => {
    return (
        <Modal
            opened={ props.opened }
            onClose={ () => props.setOpened(false) }
            size={ 'lg' }
            padding={ 'xl' }
        >
            <Group>
                <Avatar size={ 110  } radius={ 'lg' }/>
                <Group direction={ 'column' } position={ 'apart' } sx={{height: '100%' }}>
                    <Group direction={ 'column' } spacing={ 0 }>
                        <Text size={ 'lg' } weight={ 600 }>
                            {props.incident?.lastname} {props.incident?.firstname} {props.incident?.middlename}
                        </Text>
                        <Text size={ 'sm' }>
                            {props.incident?.createdAt.toString()}
                        </Text>
                    </Group>
                    <Text size={ 'sm' } color={ 'blue' }>
                        Посмотреть фото
                    </Text>
                </Group>
            </Group>
            <Group mt={ 40 } direction={ 'column' } spacing={ 0 }>
                <Text weight={ 600 } size={ 'md' } mb={ 10 }>
                    Описание:
                </Text>
                <Text sx={{ lineHeight: 1.2 }} size={ 'md' }>
                    {
                        props.incident?.description !== null && props.incident?.description !== 'Text'
                        &&
                        <>
                            {props.incident?.description}
                        </>
                        ||
                        <>
                            Очень подробное и интересеное описание инцидента
                        </>
                    }
                </Text>
            </Group>
            {/*<Button>Понятно</Button>*/}
        </Modal>
    );
};

export default IncidentsDetailsModal;