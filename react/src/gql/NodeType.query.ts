import { TypedDocumentNode } from '@apollo/client';
import { gql } from '../__generated__';
import { NodeTypeQuery, NodeTypeQueryVariables } from '../__generated__/graphql';

/**
 * GraphQL nodeType
 * @type {TypedDocumentNode<NodeTypeQuery, NodeTypeQueryVariables>}
 */
export const GET_NODE_TYPE: TypedDocumentNode<NodeTypeQuery, NodeTypeQueryVariables> = gql(/* GraphQL */`
    query NodeType($nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!) {
        nodeType(nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput) {
            id
            externalId
            name
            pinned
            nodeTypeData {
                id
                color
                geometry
                width
                height
                description
                acronym
            }
        }
    }
`);