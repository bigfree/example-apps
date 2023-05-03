import { QueryResult, TypedDocumentNode, useQuery } from '@apollo/client';
import { Box } from '@mantine/core';
import { FC } from 'react';
import { gql } from '../../../__generated__';
import { NodeType, NodeTypesQuery, NodeTypesQueryVariables } from '../../../__generated__/graphql';
import NodeTypesAsideItem from './item.component';

const GET_NODE_TYPES: TypedDocumentNode<NodeTypesQuery, NodeTypesQueryVariables> = gql(/* GraphQL */ `
    query NodeTypes($nodeTypeWhereInput: NodeTypeWhereInput!) {
        nodeTypes(nodeTypeWhereInput: $nodeTypeWhereInput) {
            id
            name
            color
            createdAt
        }
    }
`);

const NodeTypesListComponent: FC = (): JSX.Element => {
    const { data }: QueryResult<NodeTypesQuery, NodeTypesQueryVariables> = useQuery(GET_NODE_TYPES, {
        fetchPolicy: 'cache-first',
        variables: {
            nodeTypeWhereInput: {},
        },
    });

    return (
        <Box p={'md'} sx={{
            flex: 1,
        }}>
            {data && data?.nodeTypes.map((nodeType: NodeType, index: number) => (
                <NodeTypesAsideItem key={index} nodeType={nodeType} />
            ))}
        </Box>
    );
};

export default NodeTypesListComponent;