import {ActionIcon, Text, Center, Group, Header as MantineHeader, Container} from "@mantine/core";
import {Link} from "react-router-dom";
import {Beach, ListSearch, UserCircle} from "tabler-icons-react";


const Navigation = (props:{children:JSX.Element}) => {

    const ICON_SIZE = { height: 45, width: 45 }
    return(
         <>
             {props.children}
            <MantineHeader height={55} fixed={true} position={{ bottom: -1, left: 0, right: 0 }}>
                <Container size={'sm'} px={0}>
                <Group grow spacing={0} sx={{height: '55px'}}>
                    <Link to={"/map"}>
                        <Center>
                                <Group position={"center"} direction={'column'} spacing={1}>
                                        <ActionIcon variant={'hover'} size={'md'}>
                                                <Beach style={ICON_SIZE}/>
                                        </ActionIcon>
                                    <Text color={"black"} underline={false} size={"xs"}>Карта</Text>
                                </Group>
                        </Center>
                    </Link>
                    <Link to={"/search"}>
                        <Center>
                            <Group position={"center"} direction={'column'} spacing={1}>
                                <ActionIcon variant={'hover'} size={'md'}>
                                    <ListSearch style={ICON_SIZE}/>
                                </ActionIcon>
                                <Text color={"black"} underline={false} size={"xs"}>Поиск</Text>
                            </Group>
                        </Center>
                    </Link>
                    <Link to={"/profile"}>
                        <Center>
                            <Group position={"center"} direction="column" spacing={1}>
                                <ActionIcon size={'md'}>
                                    <UserCircle style={ICON_SIZE}/>
                                </ActionIcon>
                                <Text color={"black"} underline={false} size={"xs"}>Профиль</Text>
                            </Group>
                        </Center>
                    </Link>
                    <Link style={{position:"absolute", height:"75px", width:"75px", bottom: "3px", right: "7vw"}} to={"/cart"}>
                        <Center>
                            <>
                            </>
                        </Center>
                    </Link>
                </Group>
                </Container>
            </MantineHeader>
         </>
    )

}
export default Navigation;