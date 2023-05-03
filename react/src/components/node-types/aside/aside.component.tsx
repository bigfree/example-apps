import { Box, Flex } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import NodeTypesListComponent from './list.component';

const NodeTypesAsideComponent: FC = (): JSX.Element => {
    return (
        <Flex
            direction={'column'}
            sx={(theme) => ({
                flex: '0 0 360px',
                borderRight: `1px solid ${theme.colors.gray[2]}`,
            })}
        >
            <div>
                Search component
            </div>
            <NodeTypesListComponent />
            <div>
                <Box component={Link} to={'create'}>
                    Create new node type
                </Box>
            </div>
        </Flex>
    );
};

export default NodeTypesAsideComponent;