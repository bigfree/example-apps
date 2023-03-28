import produce from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UsersFilterBy } from '../types/Filters';
import { AccountStatusEnum } from '../types/User';

export type UsersFilterState = {
    name: string;
    email: string;
    status: AccountStatusEnum | null;
    filterBy: UsersFilterBy;
}

export type UserFilterActions = {
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setStatus: (status: AccountStatusEnum | null) => void;
    setFilterBy: (status: UsersFilterBy) => void;
}

export type UsersFilterStore = UsersFilterState & UserFilterActions;

const useUsersFilterStore = create<UsersFilterStore>()(persist((set, get) => ({
    name: '',
    email: '',
    status: null,
    filterBy: UsersFilterBy.NAME,
    setName: (name) => {
        set(produce((draft: UsersFilterStore) => {
            draft.name = name;
        }));
    },
    setEmail: (email) => {
        set(produce((draft: UsersFilterStore) => {
            draft.email = email;
        }));
    },
    setStatus: (status) => {
        set(produce((draft: UsersFilterStore) => {
            draft.status = status;
        }));
    },
    setFilterBy: (status) => {
        set(produce((draft: UsersFilterStore) => {
            draft.filterBy = status;
        }));
    },
}), {
    name: 'users-filter',
}));

export default useUsersFilterStore;