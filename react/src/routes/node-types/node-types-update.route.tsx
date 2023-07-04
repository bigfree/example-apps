import { Flex } from '@mantine/core';
import { FC } from 'react';
import NodeTypesPreview from '../../components/node-types/preview/preview.component';
import NodeTypesPropsUpdateComponent from '../../components/node-types/props/NodeTypesPropsUpdate.component';

const NodeTypesUpdateRoute: FC = () => {
    return (
        <Flex
            mih={'100%'}
            justify={'flex-start'}
            align={'stretch'}
            direction={'row'}
            wrap={'nowrap'}
            sx={{
                flex: 1,
            }}
        >
            <NodeTypesPropsUpdateComponent />
            <NodeTypesPreview />
        </Flex>
    );
};

export default NodeTypesUpdateRoute;