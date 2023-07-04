import { Flex } from '@mantine/core';
import { FC } from 'react';
import NodeTypesSearchComponent from '../search/NodeTypesSearch.component';
import NodeTypesCreateContainerComponent from './NodeTypesCreateContainer.component';
import NodeTypesListComponent from './NodeTypesList.component';

const NodeTypesAsideComponent: FC = (): JSX.Element => {
    return (
        <Flex
            direction={'column'}
            sx={(theme) => ({
                flex: '0 0 360px',
                borderRight: `1px solid ${theme.colors.gray[2]}`,
                minHeight: 1,
            })}
        >
            <NodeTypesSearchComponent />
            <NodeTypesListComponent />
            <NodeTypesCreateContainerComponent />
        </Flex>
    );
};

export default NodeTypesAsideComponent;