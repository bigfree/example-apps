import { Flex } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NodeTypesAsideComponent from '../../components/node-types/aside/NodeTypesAsideComponent';

const NodeTypesRoute: FC = () => {
    return (
        <Flex
            mih={'100%'}
            justify={'flex-start'}
            align={'stretch'}
            direction={'row'}
            wrap={'nowrap'}
            sx={{}}
        >
            <NodeTypesAsideComponent />
            <Outlet />
        </Flex>
    );
};

export default NodeTypesRoute;