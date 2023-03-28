import { Group, Select, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { ChangeEvent, FC } from 'react';
import { shallow } from 'zustand/shallow';
import usersFilterStore from '../../../store/users-filter.store';
import { AccountStatusEnum } from '../../../types/User';

const UsersFilterComponent: FC = (): JSX.Element => {
    const {
        nameFilter,
        statusFilter,
        setNameFilter,
        setStatusFilter,
    } = usersFilterStore(store => ({
        nameFilter: store.name,
        statusFilter: store.status,
        filterBy: store.filterBy,
        setNameFilter: store.setName,
        setStatusFilter: store.setStatus,
        setFilterBy: store.setFilterBy,
    }), shallow);

    return (
        <Group position={'left'}>
            <TextInput
                placeholder={'Search by name or email'}
                value={nameFilter}
                icon={<IconSearch size='0.8rem' />}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setNameFilter(event.currentTarget.value)}
                sx={{
                    width: 300,
                }}
            />
            <Select
                placeholder={'Status'}
                clearable={true}
                value={statusFilter}
                variant={'filled'}
                onChange={(value: AccountStatusEnum) => setStatusFilter(value)}
                sx={{
                    width: 120,
                }}
                data={[
                    { value: AccountStatusEnum.ACTIVE, label: 'Active' },
                    { value: AccountStatusEnum.PENDING, label: 'Pending' },
                    { value: AccountStatusEnum.SUSPEND, label: 'Suspend' },
                    { value: AccountStatusEnum.DELETED, label: 'Deleted' },
                ]}
            />
        </Group>
    );
};

export default UsersFilterComponent;