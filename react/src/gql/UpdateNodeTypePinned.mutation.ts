import { gql, TypedDocumentNode } from '@apollo/client';
import { UpdateNodeTypePinnedMutation, UpdateNodeTypePinnedMutationVariables } from '../__generated__/graphql';

export const UPDATE_NODE_TYPE_PINNED: TypedDocumentNode<UpdateNodeTypePinnedMutation, UpdateNodeTypePinnedMutationVariables> = gql`
    mutation UpdateNodeTypePinned(
        $nodeTypeUpdateInput: NodeTypeUpdateInput!
        $nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!
    ) {
        updateNodeType(
            nodeTypeUpdateInput: $nodeTypeUpdateInput
            nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput
        ) {
            __typename
            id
            pinned
        }
    }

`;