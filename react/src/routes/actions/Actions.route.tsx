import { Box, Flex } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import ActionTypesListComponent from '../../components/actions/types/ActionTypesList.component';
import ActionsAsideComponent from '../../components/actions/aside/ActionsAside.component';

const ActionsRoute: FC = () => {
    return (
        <Flex
            mih={'100%'}
            justify={'flex-start'}
            align={'stretch'}
            direction={'row'}
            wrap={'nowrap'}
        >
            <ActionsAsideComponent />
            <Box sx={{flex: 1}}>
                <Outlet />
            </Box>
            <ActionTypesListComponent/>
        </Flex>
    );
};

export default ActionsRoute;