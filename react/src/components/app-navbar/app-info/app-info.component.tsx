import { ActionIcon, Box, Group, Navbar, rem, Title } from '@mantine/core';
import { IconBell, IconBrandAbstract } from '@tabler/icons-react';
import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

const AppInfoComponent: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Navbar.Section
                p={'lg'}
                sx={(theme) => ({
                    borderBottom: `${rem(1)} solid ${
                        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
                    }`,
                    minHeight: 77,
                })}
            >
                <Group align={'center'} position={'apart'} mih={'100%'}>
                    <Box component={Link} to={'/'} sx={(theme) => ({
                        color: theme.colors.gray[9],
                        textDecoration: 'none',
                    })}>
                        <Group spacing={'xs'}>
                            <IconBrandAbstract size={26} stroke={'1.8'} />
                        </Group>
                    </Box>
                    {/*<ActionIcon variant={'filled'} sx={(theme) => ({*/}
                    {/*    backgroundColor: theme.colors.gray[1],*/}
                    {/*    '&:hover': {*/}
                    {/*        backgroundColor: theme.colors.gray[2],*/}
                    {/*    },*/}
                    {/*})} size={'lg'}>*/}
                    {/*    <IconBell color={'black'} size={22} stroke={1.8} />*/}
                    {/*</ActionIcon>*/}
                </Group>
            </Navbar.Section>
        </Fragment>
    );
};

export default AppInfoComponent;