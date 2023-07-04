import { Box, Button, CSSObject, Grid, MantineTheme } from '@mantine/core';
import { IconPlus, IconSettings } from '@tabler/icons-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

/**
 * ContainerStyles
 * @param {MantineTheme} theme
 * @returns {CSSObject}
 */
const containerStyles = (theme: MantineTheme): CSSObject => ({
    borderTop: `1px solid ${theme.colors.gray[3]}`,
    padding: theme.spacing.xs,
});

const NodeTypesCreateContainerComponent: FC = () => {
    return (
        <Box sx={containerStyles}>
            <Grid gutter={'sm'}>
                <Grid.Col span={6}>
                    <Button
                        component={Link}
                        to={'create'}
                        fullWidth={true}
                        color={'gray'}
                        leftIcon={<IconPlus size={20} />}
                    >
                        Create type
                    </Button>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Button
                        component={Link}
                        variant={'default'}
                        to={'options'}
                        fullWidth={true}
                        leftIcon={<IconSettings size={20} />}
                    >
                        Options
                    </Button>
                </Grid.Col>
            </Grid>
        </Box>
    );
};

export default NodeTypesCreateContainerComponent;