import { gql, TypedDocumentNode } from '@apollo/client';
import { RemoveNodeTypeMutation, RemoveNodeTypeMutationVariables } from '../__generated__/graphql';

export const REMOVE_NODE_TYPE: TypedDocumentNode<RemoveNodeTypeMutation, RemoveNodeTypeMutationVariables> = gql`
    mutation RemoveNodeType($nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!) {
        removeNodeType(nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput) {
            __typename
            id
            nodeTypeData {
                __typename
                id
            }
        }
    }

`;