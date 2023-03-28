import {
    Avatar,
    Badge,
    Box,
    Card,
    Group,
    MantineColor,
    Skeleton,
    Tabs,
    Text,
    Title,
    useMantineTheme,
} from '@mantine/core';
import { FC, Fragment, useEffect } from 'react';
import { Outlet, useMatch, useNavigate, useParams } from 'react-router-dom';
import { useAvatar } from '../../resources/avatar';
import { useUserDetail } from '../../resources/users';
import { AccountStatusEnum } from '../../types/User';

type UserDetailParams = {
    id: string;
}

const userStatusColor: Partial<Record<AccountStatusEnum, string>> = {
    [AccountStatusEnum.ACTIVE]: 'green',
    [AccountStatusEnum.PENDING]: 'yellow',
    [AccountStatusEnum.SUSPEND]: 'orange',
    [AccountStatusEnum.DELETED]: 'red',
};

const UserRoute: FC = (): JSX.Element => {
    const theme = useMantineTheme();
    const navigate = useNavigate();

    const { id } = useParams<UserDetailParams>();
    const { data: user, isError, isSuccess } = useUserDetail(id ?? '');
    const { data: avatar } = useAvatar(user?.avatarId ?? '');

    const match = useMatch(`/users/${id}/:lastPart`);

    useEffect(() => {
        if (null === match) {
            navigate('profile', {
                replace: true,
            });
        }
    }, [id]);

    if (isError) {
        return (
            <div>Not found</div>
        );
    }

    return (
        <Fragment>
            <Box sx={(theme) => ({
                borderBottom: `1px solid ${theme.colors.gray[2]}`,
                boxShadow: `0 0 2px 2px ${theme.colors.gray[1]}`,
                zIndex: 10,
            })}>
                <Box px={'lg'} sx={(theme) => ({
                    margin: theme.spacing.lg,
                })}>
                    <Group spacing={'lg'}>
                        {avatar ? (
                            <Avatar
                                size={82}
                                color={avatar.color}
                                radius={82}
                            >
                                {avatar.acronym}
                            </Avatar>
                        ) : (
                            <Skeleton height={82} circle />
                        )}
                        <Box mr={'lg'}>
                            <Title order={2}>{user?.fullName}</Title>
                            <Text color={'dimmed'} size={'sm'} mb={'xs'}>{user?.email}</Text>
                        </Box>
                        <Card miw={150} withBorder={true} py={'sm'} px={'xs'}>
                            <Text>Account status:</Text>
                            <Badge
                                color={(userStatusColor[user?.status] as MantineColor)}
                                variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
                            >
                                {user?.status}
                            </Badge>
                        </Card>
                    </Group>
                </Box>
                <Tabs
                    value={(match?.params.lastPart as string)}
                    onTabChange={(value) => navigate(`${value}`)}
                >
                    <Tabs.List px={'lg'}>
                        <Tabs.Tab value='profile'>Profile</Tabs.Tab>
                        <Tabs.Tab value='tasks'>Tasks</Tabs.Tab>
                        <Tabs.Tab value='logs'>Logs</Tabs.Tab>
                        <Tabs.Tab value='settings'>Settings</Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </Box>
            <Box sx={(theme) => ({
                overflow: 'auto',
                width: '100%',
                flex: 1,
                padding: theme.spacing.md,
                background: theme.colors.gray[0],
            })}>
                <Box p={'lg'} sx={{
                    background: 'white',
                }}>
                    <Outlet />
                </Box>
            </Box>
        </Fragment>
    );
};

export default UserRoute;