import { ActionIcon, Avatar, Badge, Box, Flex, Group, MantineColor, Text, useMantineTheme } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';
import { FC, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AccountStatusEnum, User } from '../../types/User';
import UserListItemMenuComponent from './list/user-list-item-menu.component';

const userStatusColor: Partial<Record<AccountStatusEnum, string>> = {
    [AccountStatusEnum.ACTIVE]: 'green',
    [AccountStatusEnum.PENDING]: 'yellow',
    [AccountStatusEnum.SUSPEND]: 'orange',
    [AccountStatusEnum.DELETED]: 'red',
};

type UserListItemComponentProps = {
    user: User
}

const UserListItemComponent: FC<UserListItemComponentProps> = ({ user }): JSX.Element => {
    const navigate = useNavigate();
    const theme = useMantineTheme();

    return (
        <Flex
            gap={'xs'}
            justify={'flex-start'}
            align={'center'}
            direction={'row'}
            wrap={'nowrap'}
            sx={(theme) => ({
                borderBottom: `1px solid ${theme.colors.gray[2]}`,
                padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
                background: 'white',
                '&:last-child': {
                    borderBottom: 'none',
                },
            })}
        >
            <Group spacing='md' sx={{
                flex: '1 1 auto',
            }}>
                <Box sx={{
                    '& a': {
                        textDecoration: 'none',
                    },
                }}>
                    <Link to={`/users/${user.id}`}>
                        <Avatar
                            size={36}
                            color={user.avatar.color}
                            radius={36}
                        >
                            {user.avatar.acronym}
                        </Avatar>
                    </Link>
                </Box>
                <div>
                    <Text fz='sm' fw={500} sx={(theme) => ({
                        '& > a': {
                            color: theme.colors.gray[9],
                            textDecoration: 'none',
                        },
                    })}>
                        <Link to={`/users/${user.id}`}>
                            {user.fullName}
                        </Link>
                    </Text>
                    <Text fz='xs' color='dimmed'>
                        {user.email}
                    </Text>
                </div>
            </Group>
            <Box>
                <Text fz='xs' color={'dimmed'}>
                    {new Date(user.createdAt).toLocaleString()}
                </Text>
            </Box>
            <Group position={'right'} sx={{
                flex: '0 1 100px',
            }}>
                <Badge
                    color={(userStatusColor[user.status] as MantineColor)}
                    variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
                >
                    {user.status}
                </Badge>
            </Group>
            <Group spacing={0} position='right'>
                <ActionIcon title={'Edit user'} onClick={() => navigate(`/users/${user.id}`)}>
                    <IconPencil size='1rem' stroke={1.5} />
                </ActionIcon>
                <UserListItemMenuComponent user={user} />
            </Group>
        </Flex>
    );
};

export default memo(UserListItemComponent);