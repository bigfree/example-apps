import { createStyles, MantineTheme, Skeleton } from '@mantine/core';
import { nanoid } from 'nanoid';
import { FC, ReactElement } from 'react';
import { useDrop } from 'react-dnd';
import { shallow } from 'zustand/shallow';
import useActionStore, { ActionEntity } from '../../../store/Action.store';
import { DndTypeEnum } from '../../../types/Dnd';
import { ActionType } from '../types/ActionTypesList.component';
import ActionPreviewSkeletonComponent from './ActionPreviewSkeleton.component';

const useStyles = createStyles((theme: MantineTheme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        padding: theme.spacing.xl,
        flex: 1,
    },
    preview: {
        background: 'white',
        border: `1px solid ${theme.colors.gray[1]}`,
        boxShadow: `2px 2px 0 0 ${theme.colors.gray[1]}`,
        backdropFilter: 'blur(0.2px)',
        borderRadius: theme.radius.sm,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
        borderBottom: `1px solid ${theme.colors.gray[1]}`,
    },
    body: {
        padding: theme.spacing.md,
    }
}));

const ActionPreviewComponent: FC = (): ReactElement => {
    const { classes } = useStyles();
    const {
        actions,
        setAction,
    } = useActionStore((store) => ({
        actions: store.getAllActions(),
        setAction: store.setAction,
    }), shallow);

    const [{canDrop}, drop] = useDrop(() => ({
        accept: DndTypeEnum.ACTION,
        drop: (item: ActionType, monitor) => {
            if (!monitor.canDrop()) {
                return;
            }

            console.log(item);
            setAction({
                id: nanoid(),
                type: item.type,
            });
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
        })
    }), []);

    return (
        <div className={classes.root}>
            <div className={classes.preview} ref={drop}>
                <div className={classes.header}>Action name</div>
                <div className={classes.body}>
                    {actions.map((action: ActionEntity, key: number) => (
                        <p key={key}>{action.id}</p>
                    ))}

                    {(0 === actions.length && !canDrop) && (
                        <div>Drop actions</div>
                    )}

                    {canDrop && (
                        <ActionPreviewSkeletonComponent />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ActionPreviewComponent;