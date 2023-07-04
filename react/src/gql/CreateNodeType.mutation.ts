import { gql, TypedDocumentNode } from '@apollo/client';
import { CreateNodeTypeMutation, CreateNodeTypeMutationVariables } from '../__generated__/graphql';

export const CREATE_NODE_TYPE: TypedDocumentNode<CreateNodeTypeMutation, CreateNodeTypeMutationVariables> = gql`
    mutation CreateNodeType($nodeTypeCreateInput: NodeTypeCreateInput!) {
        createNodeType(nodeTypeCreateInput: $nodeTypeCreateInput) {
            __typename
            id
            name
            externalId
            updatedAt
            createdAt
            nodeTypeData {
                __typename
                id
                color
                acronym
                description
                geometry
                width
                height
                createdAt
                updatedAt
            }
        }
    }
`;

export const CREATE_NODE_TYPE_FRAGMENT = gql(/* GraphQL */`
    fragment NewNodeType on NodeType {
        id
    }
`);