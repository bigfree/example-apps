import { createStyles, MantineTheme } from '@mantine/core';
import { FC, ReactElement } from 'react';

const useStyles = createStyles((theme: MantineTheme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        background: theme.fn.rgba(theme.colors.yellow[0], .7),
        border: `1px solid ${theme.colors.yellow[1]}`,
        boxShadow: `2px 2px 0 0 ${theme.colors.yellow[1]}`,
    },
    text: {
        fontSize: theme.fontSizes.sm
    }
}));

const ActionPreviewSkeletonComponent: FC = (): ReactElement => {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.text}>Drop here</div>
        </div>
    );
};

export default ActionPreviewSkeletonComponent;