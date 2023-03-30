import produce from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthUser } from '../types/User';

export type AuthState = {
    token: string | null,
    user: AuthUser | null,
}

export type AuthActions = {
    setToken: (token: string) => void;
    removeToken: () => void;
    setUser: (user: AuthUser) => void;
    removeUser: () => void;
}

export type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>()(persist((set, get) => ({
    token: null,
    user: null,
    setToken: (token) => {
        set(produce((draft: AuthStore) => {
            draft.token = token;
        }));
    },
    removeToken: () => {
        set(produce((draft: AuthStore) => {
            draft.token = null;
        }));
    },
    setUser: (user) => {
        set(produce((draft: AuthStore) => {
            draft.user = user;
        }));
    },
    removeUser: () => {
        set(produce((draft: AuthStore) => {
            draft.user = null;
        }));
    },
}), {
    name: 'auth-store',
}));

export default useAuthStore;