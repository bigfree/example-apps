import { QueryResult, useQuery } from '@apollo/client';
import { Box, CSSObject, MantineTheme } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { FC, Fragment } from 'react';
import { NodeType, NodeTypesQuery, NodeTypesQueryVariables, QueryMode } from '../../../__generated__/graphql';
import { GET_NODE_TYPES } from '../../../gql/GetNodeTypesList.query';
import useNodeTypesFilterStore, { NodeTypesFilterStore } from '../../../store/NodeTypesFilter.store';
import NodeTypesAsideItem from './NodeTypesItem.component';

/**
 * ListContainerStyles
 * @param {MantineTheme} theme
 * @returns {CSSObject}
 */
const listContainerStyles = (theme: MantineTheme): CSSObject => ({
    flex: 1,
    display: 'flex',
    flexFlow: 'column',
    overflowY: 'auto',
    width: '100%',
    padding: `3px ${theme.spacing.md}`,
    marginBottom: theme.spacing.md,
});

const NodeTypesListComponent: FC = () => {
    const name: string = useNodeTypesFilterStore((state: NodeTypesFilterStore) => state.name);
    const [debouncedName] = useDebouncedValue(name, 300);

    const { data }: QueryResult<NodeTypesQuery, NodeTypesQueryVariables> = useQuery(GET_NODE_TYPES, {
        fetchPolicy: 'cache-first',
        variables: {
            nodeTypeWhereInput: {
                name: ('' !== debouncedName ? {
                    contains: debouncedName,
                    mode: QueryMode.Insensitive,
                } : undefined),
            },
        },
    });

    return (
        <Fragment>
            <Box
                sx={listContainerStyles}>
                {data && data?.nodeTypes.map((nodeType: NodeType, index: number) => (
                    <NodeTypesAsideItem key={index} nodeType={nodeType} />
                ))}
            </Box>
        </Fragment>
    );
};

export default NodeTypesListComponent;