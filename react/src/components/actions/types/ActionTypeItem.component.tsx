import { Box, createStyles, getStylesRef, MantineTheme, Text, Title, useMantineTheme } from '@mantine/core';
import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { DndTypeEnum } from '../../../types/Dnd';
import { ActionType } from './ActionTypesList.component';

type ActionTypeItemComponentProps = {
    actionType: ActionType
}

export type DropResult = {
    name: string;
    dropEffect: string;
}

const useStyles = createStyles((theme: MantineTheme) => ({
    container: {
        border: `1px solid ${theme.colors.gray[3]}`,
        boxShadow: `2px 2px 0 0 ${theme.colors.gray[1]}`,
        padding: theme.spacing.xs,
        marginBottom: theme.spacing.sm,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'pointer',
        borderRadius: theme.radius.sm,
        '&:hover': {
            background: theme.fn.lighten(theme.colors.gray[0], .5),
            boxShadow: `2px 2px 0 0 ${theme.colors.gray[2]}`,

            [`& .${getStylesRef('iconContainer')}`]: {
                boxShadow: `0 0 5px 1px ${theme.colors.gray[1]}`,
            },
        },
        '&:last-child': {
            mb: 0,
        },
    },
    iconContainer: {
        ref: getStylesRef('iconContainer'),
        border: `1px solid ${theme.colors.gray[3]}`,
        boxShadow: `0 0 2px 1px ${theme.colors.gray[0]}`,
        background: 'white',
        flex: '0 0 38px',
        height: 38,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: theme.spacing.xs,
        borderRadius: theme.radius.sm,
    },
    textDescription: {
        color: theme.colors.gray[6],
        fontSize: theme.spacing.xs,
    },
}));

const ActionTypeItemComponent: FC<ActionTypeItemComponentProps> = ({ actionType }) => {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const [{isDragging}, drag] = useDrag<ActionType, DropResult, { isDragging: boolean }>(() => ({
        type: DndTypeEnum.ACTION,
        item: actionType,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId,
        }),
    }))

    return (
        <div className={classes.container} ref={drag}>
            <div className={classes.iconContainer}>
                <actionType.icon color={actionType.color ?? theme.colors.blue[5]} size={24} />
            </div>
            <div>
                <Title order={6}>{actionType.title}</Title>
                <Text className={classes.textDescription}>{actionType.description}</Text>
            </div>
        </div>
    );
};

export default ActionTypeItemComponent;