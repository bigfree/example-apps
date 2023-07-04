import { gql, TypedDocumentNode } from '@apollo/client';
import { UpdateNodeTypeMutation, UpdateNodeTypeMutationVariables } from '../__generated__/graphql';

export const UPDATE_NODE_TYPE: TypedDocumentNode<UpdateNodeTypeMutation, UpdateNodeTypeMutationVariables> = gql`
    mutation UpdateNodeType(
        $nodeTypeUpdateInput: NodeTypeUpdateInput!
        $nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!
    ) {
        updateNodeType(
            nodeTypeUpdateInput: $nodeTypeUpdateInput
            nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput
        ) {
            __typename
            id
            name
            externalId
            nodeTypeData {
                __typename
                id
                acronym
                color
                description
                geometry
                width
                height
            }
        }
    }

`;

export const UPDATE_NODE_TYPE_FRAGMENT = gql(/* GraphQL */`
    fragment UpdateNodeType on NodeType {
        id
    }
`);