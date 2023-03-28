import { Box, getStylesRef, Text } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkList } from './app-navbar.component';

type AppNavbarLinkProps = {
    link: LinkList
}

const AppNavbarLinkComponent: FC<AppNavbarLinkProps> = ({ link }): JSX.Element => {
    return (
        <Box component={Link} to={link.link} sx={(theme) => ({
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,

                [`& .${getStylesRef('icon')}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            },
        })}>
            <link.icon stroke={1.8} sx={(theme) => ({
                ref: getStylesRef('icon'),
                color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
            })} />
            <Text pl={'xs'}>{link.label}</Text>
        </Box>
    );
};

export default AppNavbarLinkComponent;