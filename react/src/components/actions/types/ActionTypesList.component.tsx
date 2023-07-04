import { createStyles, Flex, MantineColor, MantineTheme, Text } from '@mantine/core';
import { IconCheckbox, IconForms, IconItalic, IconList, IconNumbers, TablerIconsProps } from '@tabler/icons-react';
import { FC, ReactElement } from 'react';
import { ActionTypeEnum } from '../../../__generated__/graphql';
import ActionTypeItemComponent from './ActionTypeItem.component';

export type ActionType = {
    type: ActionTypeEnum;
    title: string;
    description: string;
    icon: (props: TablerIconsProps) => ReactElement;
    color?: MantineColor;
}

const useStyles = createStyles((theme: MantineTheme) => ({
    container: {
        flex: '0 0 260px',
        borderLeft: `1px solid ${theme.colors.gray[2]}`,
    },
    header: {
        padding: theme.spacing.sm,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },
    headerText: {
        padding: theme.spacing.sm,
        background: theme.colors.gray[0],
        border: `1px solid ${theme.colors.gray[1]}`,
        fontWeight: 'bold',
    },
    list: {
        padding: theme.spacing.sm,
        alignSelf: 'stretch',
        overflowY: 'auto',
    },
}));

const actionTypesList: ActionType[] = [{
    type: ActionTypeEnum.Text,
    title: 'Text type action',
    description: 'Classic input text',
    icon: IconItalic,
}, {
    type: ActionTypeEnum.Textarea,
    title: 'Textarea type action',
    description: 'Classic text element',
    icon: IconForms,
}, {
    type: ActionTypeEnum.Number,
    title: 'Number type action',
    description: 'Classic number input',
    icon: IconNumbers,
}, {
    type: ActionTypeEnum.Select,
    title: 'Select type action',
    description: 'Classic select element',
    icon: IconList,
}, {
    type: ActionTypeEnum.Checkbox,
    title: 'Checkbox type action',
    description: 'Classic checkbox input',
    icon: IconCheckbox,
}];

const ActionTypesListComponent: FC = () => {
    const { classes } = useStyles();
    return (
        <Flex className={classes.container} direction={'column'}>
            <div className={classes.header}>
                <Text className={classes.headerText}>⚡ Action types</Text>
            </div>
            <div className={classes.list}>
                {actionTypesList.map((actionType: ActionType, index: number) => (
                    <ActionTypeItemComponent key={index} actionType={actionType} />
                ))}
            </div>
        </Flex>
    );
};

export default ActionTypesListComponent;