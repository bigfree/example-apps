import { Box, Flex } from '@mantine/core';
import { FC } from 'react';
import NodeTypesPreview from '../../components/node-types/preview/preview.component';
import NodeTypesPropsAside from '../../components/node-types/props/props.component';

const NodeTypesCreateRoute: FC = (): JSX.Element => {
    return (
        <Flex
            mih={'100%'}
            justify={'flex-start'}
            align={'stretch'}
            direction={'row'}
            wrap={'nowrap'}
            sx={{
                flex: 1
            }}
        >
            <NodeTypesPropsAside/>
            <NodeTypesPreview/>
        </Flex>
    )
}

export default NodeTypesCreateRoute;