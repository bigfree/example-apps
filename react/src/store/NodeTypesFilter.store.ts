import produce from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { NodeType } from '../__generated__/graphql';

export type NodeTypesFilterState = Pick<NodeType, 'name'>;

export type NodeTypesFilterActions = {
    setName: (name: string) => void;
}

export type NodeTypesFilterStore = NodeTypesFilterState & NodeTypesFilterActions;

const useNodeTypesFilterStore = create<NodeTypesFilterStore>()(persist((set, get) => ({
    name: '',
    setName: (name) => {
        set(produce((draft: NodeTypesFilterStore) => {
            draft.name = name;
        }));
    },
}), {
    name: 'node-types-filter',
}));

export default useNodeTypesFilterStore;