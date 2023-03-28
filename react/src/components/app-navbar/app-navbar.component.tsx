import { Navbar } from '@mantine/core';
import { IconListCheck, IconUsers } from '@tabler/icons-react';
import { FC } from 'react';
import AppInfoComponent from './app-info/app-info.component';
import AppNavbarLinkComponent from './app-navbar-link.component';

export type LinkList = {
    link: string;
    label: string;
    icon: any;
}

const linkList: LinkList[] = [{
    link: '/users',
    label: 'Users',
    icon: IconUsers,
}, {
    link: '/tasks',
    label: 'Tasks',
    icon: IconListCheck,
}];

const AppNavbarComponent: FC = (): JSX.Element => {
    return (
        <Navbar width={{ base: 270 }}>
            <AppInfoComponent />
            <Navbar.Section grow={true} p={'md'}>
                {linkList.map((link, index) => (
                    <AppNavbarLinkComponent key={index} link={link} />
                ))}
            </Navbar.Section>
        </Navbar>
    );
};

export default AppNavbarComponent;