import produce from 'immer';
import { create } from 'zustand';
import { NodeType, NodeTypeGeometryEnum } from '../__generated__/graphql';

export type PreviewNodeType = Pick<NodeType, 'name' | 'externalId'> & {
    nodeTypeData: Omit<NodeType['nodeTypeData'], 'id' | '__typename' | 'nodeType' | 'createdAt' | 'updatedAt'>;
};

export type CreateNodeTypeState = {
    previewNodeType: PreviewNodeType;
}

export type CreateNodeTypeActions = {
    setPreviewNodeType: (previewNodeType: PreviewNodeType) => void;
}

export const initialPreviewNodeType: PreviewNodeType = {
    externalId: '',
    name: '',
    nodeTypeData: {
        acronym: '',
        color: '',
        description: '',
        height: null,
        width: null,
        geometry: NodeTypeGeometryEnum.Square,
    },
};

export type PreviewNodeTypeStore = CreateNodeTypeState & CreateNodeTypeActions;

const usePreviewNodeTypeStore = create<PreviewNodeTypeStore>((set, get) => ({
    previewNodeType: {
        externalId: '',
        name: '',
        nodeTypeData: {
            acronym: '',
            color: '',
            description: '',
            height: null,
            width: null,
            geometry: NodeTypeGeometryEnum.Square,
        },
    },
    setPreviewNodeType: (previewNodeType: Partial<PreviewNodeType>) => {
        set(produce((state: PreviewNodeTypeStore) => {
            state.previewNodeType = {
                ...state.previewNodeType,
                ...previewNodeType,
                nodeTypeData: {
                    ...state.previewNodeType.nodeTypeData,
                    ...previewNodeType.nodeTypeData,
                },
            };
        }));
    },
}));

export default usePreviewNodeTypeStore;