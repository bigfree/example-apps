import produce from 'immer';
import { create } from 'zustand';

export type UserTabsState = {
    activeTab: string | null;
}

export type UserTabsActions = {
    setActiveTab: (activeTab: string) => void;
}

export type UserTabsStore = UserTabsState & UserTabsActions;

const useUserTabsStore = create<UserTabsStore>()((set, get) => ({
    activeTab: null,
    setActiveTab: (activeTab) => {
        set(produce((draft: UserTabsStore) => {
            draft.activeTab = activeTab;
        }));
    },
}));

export default useUserTabsStore;