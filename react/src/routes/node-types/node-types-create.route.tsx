import { Flex } from '@mantine/core';
import { FC } from 'react';
import NodeTypesPreview from '../../components/node-types/preview/preview.component';
import NodeTypesPropsCreateComponent from '../../components/node-types/props/NodeTypesPropsCreate.component';

const NodeTypesCreateRoute: FC = () => {
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
            <NodeTypesPropsCreateComponent />
            <NodeTypesPreview />
        </Flex>
    );
};

export default NodeTypesCreateRoute;