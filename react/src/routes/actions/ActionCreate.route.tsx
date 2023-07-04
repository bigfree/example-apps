import { createStyles, MantineTheme } from '@mantine/core';
import { FC, ReactElement } from 'react';
import ActionFormComponent from '../../components/actions/form/ActionForm.component';
import ActionPreviewComponent from '../../components/actions/preview/ActionPreview.component';

const useStyles = createStyles((theme: MantineTheme) => ({
    container: {
        display: 'flex',
        minHeight: '100%',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        backgroundColor: theme.colors.gray[0],
    },
}));

const ActionCreateRoute: FC = (): ReactElement => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <ActionFormComponent />
            <ActionPreviewComponent />
        </div>
    );
};

export default ActionCreateRoute;