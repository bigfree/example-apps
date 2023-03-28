import { Box, Button, Group, Pagination } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconRefresh } from '@tabler/icons-react';
import { FC, Fragment, useState } from 'react';
import { shallow } from 'zustand/shallow';
import UsersFilterComponent from '../../components/filters/users/users-filter.component';
import CreateUserComponent from '../../components/users/create/create-user.component';
import UserListItemComponent from '../../components/users/user-list-item.component';
import { useUsers } from '../../resources/users';
import usersFilterStore from '../../store/users-filter.store';

const UsersRoute: FC = (): JSX.Element => {
    const [activePage, setPage] = useState<number>(1);
    const {nameFilter, statusFilter} = usersFilterStore(store => ({
        nameFilter: store.name,
        statusFilter: store.status,
    }), shallow);
    const [debounced] = useDebouncedValue(nameFilter, 200);
    const { data } = useUsers(activePage, debounced, statusFilter);

    return (
        <Fragment>
            <Box
                sx={(theme) => ({
                    width: '100%',
                    flex: '0 0 auto',
                    padding: theme.spacing.lg,
                    borderBottom: `1px solid ${theme.colors.gray[2]}`,
                    boxShadow: `0 0 2px 2px ${theme.colors.gray[1]}`,
                    zIndex: 10,
                })}
            >
                <Group position={'apart'}>
                    <UsersFilterComponent />
                    <Group>
                        <CreateUserComponent />
                        <Button
                            size={'sm'}
                            variant={'outline'}
                            title={'Refresh'}
                            sx={(theme) => ({
                                paddingLeft: theme.spacing.xs,
                                paddingRight: theme.spacing.xs,
                            })}
                        >
                            <IconRefresh size='1rem' />
                        </Button>
                    </Group>
                </Group>
            </Box>
            <Box
                sx={(theme) => ({
                    overflow: 'auto',
                    width: '100%',
                    flex: 1,
                    padding: theme.spacing.md,
                    background: theme.colors.gray[0],
                })}
            >
                {data?.items.map((user, index) => (
                    <UserListItemComponent key={index} user={user} />
                ))}
            </Box>
            {data?.meta.totalPages !== 1 && (
                <Box
                    sx={(theme) => ({
                        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                    })}
                >
                    <Pagination
                        size={'sm'}
                        value={activePage}
                        total={data?.meta.totalPages ?? 0}
                        onChange={setPage}
                    />
                </Box>
            )}
        </Fragment>
    );
};

export default UsersRoute;