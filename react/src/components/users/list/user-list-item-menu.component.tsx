import { ActionIcon, Menu, Text, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconDots, IconMessages, IconNote, IconReportAnalytics, IconTrash } from '@tabler/icons-react';
import { FC, Fragment, memo } from 'react';
import { useDeleteUser } from '../../../resources/users';
import { User } from '../../../types/User';

type UserListItemMenuComponentProps = {
    user: User;
}

const UserListItemMenuComponent: FC<UserListItemMenuComponentProps> = ({ user }): JSX.Element => {

    const deleteUser = useDeleteUser();

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: (
                <Fragment>
                    <Title order={4}>
                        Delete user {user.fullName}
                    </Title>
                    <Text color={'dimmed'} size={'xs'}>
                        {user.email}
                    </Text>
                </Fragment>
            ),
            centered: true,
            children: (
                <Text size='sm'>
                    Are you sure you want to delete user? This action is destructive and you will have
                    to contact support to restore your data.
                </Text>
            ),
            labels: { confirm: 'Delete account', cancel: 'No don\'t delete it' },
            confirmProps: { color: 'red' },
            onConfirm: () => {
                deleteUser.mutateAsync(user.id, {
                    onSuccess: () => {
                        notifications.show({
                            id: `delete-user-${user.id}`,
                            title: 'Delete user',
                            message: `${user.fullName} has been successfully deleted 🎉`,
                            autoClose: 3000,
                            icon: <IconCheck size='1.2rem' />,
                            color: 'green',
                            withCloseButton: false,
                        });
                    },
                });
            },
        });

    return (
        <Fragment>
            <Menu
                transitionProps={{ transition: 'pop' }}
                withArrow
                position={'bottom-end'}
                withinPortal
            >
                <Menu.Target>
                    <ActionIcon>
                        <IconDots size='1rem' stroke={1.5} />
                    </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item icon={<IconMessages size='1rem' stroke={1.5} />}>Send
                        message</Menu.Item>
                    <Menu.Item icon={<IconNote size='1rem' stroke={1.5} />}>Add note</Menu.Item>
                    <Menu.Item icon={<IconReportAnalytics size='1rem' stroke={1.5} />}>
                        Analytics
                    </Menu.Item>
                    <Menu.Item icon={<IconTrash size='1rem' stroke={1.5} />} color='red' onClick={openDeleteModal}>
                        Delete contact
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Fragment>
    );
};

export default memo(UserListItemMenuComponent);