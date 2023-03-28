import { ActionIcon, Box, Group, Header } from '@mantine/core';
import { IconBell, IconBrandSafari } from '@tabler/icons-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const AppHeader: FC = (): JSX.Element => {
    return (
        <Header height={65} p={'md'}>
            <Group position={'apart'}>
                <Box component={Link} to={'/'} sx={(theme) => ({
                    fontSize: theme.fontSizes.lg,
                    color: theme.colors.gray[8],
                    textDecoration: 'none',
                    fontWeight: 'bold',
                })}>
                    <Group position={'left'}>
                        <IconBrandSafari />
                        My APP
                    </Group>
                </Box>
                <ActionIcon size={'lg'}>
                    <IconBell color={'black'} />
                </ActionIcon>
            </Group>
        </Header>
    );
};

export default AppHeader;