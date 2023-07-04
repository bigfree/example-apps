import { createStyles, MantineTheme } from '@mantine/core';
import { FC, ReactElement } from 'react';

const useStyles = createStyles((theme: MantineTheme) => ({
    container: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        flex: '0 0 300px',
    },
}));

const ActionFormComponent: FC = (): ReactElement => {
    const { classes } = useStyles();
    return (
        <div className={classes.container}>a</div>
    )
}

export default ActionFormComponent;