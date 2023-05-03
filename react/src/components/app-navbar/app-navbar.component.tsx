import { Navbar } from '@mantine/core';
import { IconListCheck, IconUsers, IconSquareRoundedLetterA, TablerIconsProps } from '@tabler/icons-react';
import { FC } from 'react';
import AppInfoComponent from './app-info/app-info.component';
import AppNavbarLinkComponent from './app-navbar-link.component';

export type LinkList = {
    link: string;
    label: string;
    icon: (props: TablerIconsProps) => JSX.Element;
}

const linkList: LinkList[] = [{
    link: '/node-types',
    label: 'Node types',
    icon: IconSquareRoundedLetterA,
}];

const AppNavbarComponent: FC = (): JSX.Element => {
    return (
        <Navbar width={{ base: 80 }}>
            {/*<AppInfoComponent />*/}
            <Navbar.Section grow={true}>
                {linkList.map((link, index) => (
                    <AppNavbarLinkComponent key={index} link={link} />
                ))}
            </Navbar.Section>
        </Navbar>
    );
};

export default AppNavbarComponent;