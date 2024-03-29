import { AppShell, Flex } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/appHeader';
import AppNavbarComponent from '../components/app-navbar/app-navbar.component';

const RootRoute: FC = (): JSX.Element => {

    return (
        <AppShell
            padding={0}
            navbar={<AppNavbarComponent />}
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white,
                height: '100vh',
            })}
        >
            <Flex
                gap='0'
                justify='flex-start'
                align='stretch'
                direction='column'
                wrap='nowrap'
                sx={{
                    width: '100%',
                    height: 'calc(100vh - var(--mantine-header-height, 0px))',
                }}
            >
                <Outlet />
            </Flex>
        </AppShell>
    );
};

export default RootRoute;
