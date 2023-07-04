import { TypedDocumentNode } from '@apollo/client';
import { gql } from '../__generated__';
import { NodeTypesQuery, NodeTypesQueryVariables } from '../__generated__/graphql';

export const GET_NODE_TYPES: TypedDocumentNode<NodeTypesQuery, NodeTypesQueryVariables> = gql(/* GraphQL */ `
    query NodeTypes($nodeTypeWhereInput: NodeTypeWhereInput!) {
        nodeTypes(nodeTypeWhereInput: $nodeTypeWhereInput) {
            __typename
            id
            externalId
            name
            nodeTypeDataId
            pinned
            _count {
                __typename
                node
            }
            nodeTypeData {
                __typename
                id
                color
                geometry
            }
        }
    }
`);