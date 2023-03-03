import { FC } from 'react';
import { Box, Header } from '@mantine/core';

const AppHeader: FC = (): JSX.Element => {
    return (
        <Box
            sx={(theme) => ({
                width: '100%',
                borderBottom: `1px solid ${theme.colors.gray[3]}`
            })}
        >
            Header
        </Box>
    );
};

export default AppHeader;