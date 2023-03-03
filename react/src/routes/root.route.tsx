import { AppShell, Aside, Flex, Footer, MediaQuery, Navbar } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/appHeader';

const RootRoute: FC = (): JSX.Element => {

    return (
        <AppShell
            padding={'sm'}
            // header={<AppHeader/>}
            navbar={<Navbar width={{base: 300}}>aaa</Navbar>}
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            })}
        >
            <div>
                <Flex
                    mih={50}
                    gap="0"
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                >
                    <AppHeader/>
                    <div>asd</div>
                    <Outlet/>
                </Flex>
            </div>
        </AppShell>
    );
};

export default RootRoute;
