import { Box, Flex } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const ActionsAsideComponent: FC = () => {
    return (
        <Flex
            direction={'column'}
            sx={(theme) => ({
                flex: '0 0 360px',
                borderRight: `1px solid ${theme.colors.gray[2]}`,
                minHeight: 1,
            })}
        >
            <Box component={Link} to={'create'}>Create</Box>
        </Flex>
    );
};

export default ActionsAsideComponent;