import produce from 'immer';
import { create } from 'zustand';
import { NodeTypeCreateInput, NodeTypeGeometryEnum } from '../__generated__/graphql';

export type CreateNodeTypeState = {
    nodeTypeInput: NodeTypeCreateInput;
}

export type CreateNodeTypeActions = {
    setNodeTypeInput: (nodeType: NodeTypeCreateInput) => void;
}

export type CreateNodeTypeStore = CreateNodeTypeState & CreateNodeTypeActions;

const useCreateNodeTypeStore = create<CreateNodeTypeStore>((set, get) => ({
    nodeTypeInput: {
        name: '',
        externalId: '',
        acronym: '',
        color: '',
        description: '',
        geometry: NodeTypeGeometryEnum.Square,
    },
    setNodeTypeInput: (nodeType) => {
        set(produce((draft: CreateNodeTypeStore) => {
            draft.nodeTypeInput = {
                ...nodeType
            };
        }));
    },
}));

export default useCreateNodeTypeStore;