import { Flex, TextInput } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';
import { FC, useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { NodeTypeCreateInput } from '../../../__generated__/graphql';
import useCreateNodeTypeStore from '../../../store/create-node-type.store';

const NodeTypesPropsAside: FC = (): JSX.Element => {
    const {
        nodeTypeInput,
        setNodeTypeInput,
    } = useCreateNodeTypeStore(store => ({
        nodeTypeInput: store.nodeTypeInput,
        setNodeTypeInput: store.setNodeTypeInput,
    }), shallow);

    const {
        values: formValues,
        setFieldValue,
        onSubmit: onFormSubmit,
    }: UseFormReturnType<NodeTypeCreateInput, (values: NodeTypeCreateInput) => NodeTypeCreateInput> = useForm<NodeTypeCreateInput>({
        initialValues: nodeTypeInput,
    });

    useEffect(() => {
        setNodeTypeInput(formValues);
    }, [formValues]);

    return (
        <Flex
            direction={'column'}
            sx={(theme) => ({
                flex: '0 0 50%',
                borderRight: `1px solid ${theme.colors.gray[2]}`,
            })}
        >
            <form onSubmit={onFormSubmit((values) => console.log(formValues))}>
                <TextInput
                    withAsterisk
                    label='Name'
                    value={formValues.name}
                    onChange={(event) => setFieldValue('name', event.target.value)}
                />
            </form>
        </Flex>
    );
};

export default NodeTypesPropsAside;