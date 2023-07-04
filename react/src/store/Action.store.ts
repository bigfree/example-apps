import produce, { enableMapSet } from 'immer';
import { create } from 'zustand';
import { ActionTypeEnum } from '../__generated__/graphql';

enableMapSet();

export type ActionEntity = {
    id: string;
    type: ActionTypeEnum;
    data?: ActionDataEntity;
}

export type ActionDataEntity = {
    id: string;
    name: string;
    label?: string;
    value: string;
}

export type ActionState = {
    actions: Map<string, ActionEntity>;
}

export type ActionActions = {
    setAction: (action: ActionEntity) => void;
    editAction: (actionId: string, action: ActionEntity) => void;
    deleteAction: (actionId: string) => void;
    getAllActions: () => ActionEntity[];
}

export type ActionStore = ActionState & ActionActions;

const useActionStore = create<ActionStore>()((set, get) => ({
    actions: new Map([]),
    setAction: (action: ActionEntity) => {
        set(produce((draft: ActionStore) => {
            draft.actions.set(action.id, action);
        }));
    },
    editAction: (actionId: string, action: ActionEntity) => {
        set(produce((draft: ActionStore) => {
            draft.actions.set(action.id, action);
        }));
    },
    deleteAction: (actionId: string) => {
        set(produce((draft: ActionStore) => {
            const result: boolean = draft.actions.delete(actionId);
            if (!result) {
                throw new Error(`Action cant by deleted.`);
            }
        }));
    },
    getAllActions: () => {
        return Array.from(get().actions.values()) as ActionEntity[];
    },
}));

export default useActionStore;