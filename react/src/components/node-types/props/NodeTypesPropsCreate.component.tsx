import { useMutation } from '@apollo/client';
import { ActionIcon, Box, Button, Flex, Group, Title } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';
import { IconX } from '@tabler/icons-react';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NodeTypeFormProvider } from '../../../context/nodeType-form.context';
import { CREATE_NODE_TYPE, CREATE_NODE_TYPE_FRAGMENT } from '../../../gql/CreateNodeType.mutation';
import usePreviewNodeTypeStore, {
    initialPreviewNodeType,
    PreviewNodeType,
    PreviewNodeTypeStore,
} from '../../../store/PreviewNodeType.store';
import NodeTypesPropsFormComponent from './NodeTypesPropsForm.component';

const NodeTypesPropsCreateComponent: FC = () => {
    const setNodeTypeInput = usePreviewNodeTypeStore((store: PreviewNodeTypeStore) => store.setPreviewNodeType);

    const [createNodeType] = useMutation(CREATE_NODE_TYPE, {
        update(cache, { data }) {
            cache.modify({
                fields: {
                    nodeTypes(existingNodeTypes) {
                        const newNodeTypeRef = cache.writeFragment({
                            data: data?.createNodeType,
                            fragment: CREATE_NODE_TYPE_FRAGMENT,
                        });
                        return [...existingNodeTypes, newNodeTypeRef];
                    },
                },
            });
        },
    });

    const form: UseFormReturnType<PreviewNodeType, (values: PreviewNodeType) => PreviewNodeType> = useForm<PreviewNodeType>({
        initialValues: initialPreviewNodeType,
    });

    useEffect(() => {
        console.log(form.values);
        setNodeTypeInput(form.values);
    }, [form.values]);

    return (
        <Flex
            direction={'column'}
            sx={(theme) => ({
                flex: '0 0 50%',
                borderRight: `1px solid ${theme.colors.gray[2]}`,
            })}
        >
            <Group
                p={'md'}
                position={'apart'}
                sx={(theme) => ({
                    borderBottom: `1px solid ${theme.colors.gray[3]}`,
                })}
            >
                <Title order={4}>Create new Node type</Title>
                <ActionIcon component={Link} to={'/node-types'}>
                    <IconX size={'2rem'} color={'#000000'} />
                </ActionIcon>
            </Group>
            <Box sx={{
                flex: 1,
                minHeight: 1,
                '& > form': {
                    height: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                },
            }}>
                <NodeTypeFormProvider form={form}>
                    <form onSubmit={form.onSubmit(async (values: PreviewNodeType) => {
                        setNodeTypeInput(values);
                        await createNodeType({
                            variables: {
                                nodeTypeCreateInput: {
                                    ...values,
                                    nodeTypeData: {
                                        create: {
                                            ...values.nodeTypeData,
                                        },
                                    },
                                },
                            },
                            optimisticResponse: {
                                createNodeType: {
                                    __typename: 'NodeType',
                                    id: 'node-type-id',
                                    name: values.name,
                                    externalId: values.externalId,
                                    updatedAt: null,
                                    createdAt: null,
                                    nodeTypeData: {
                                        ...values.nodeTypeData,
                                        __typename: 'NodeTypeData',
                                        id: 'node-type-data-id',
                                        createdAt: null,
                                        updatedAt: null,
                                    },
                                },
                            },
                        });
                    })}>
                        <Box sx={{
                            flex: 1,
                            overflowY: 'auto',
                        }}>
                            <NodeTypesPropsFormComponent />
                        </Box>
                        <Box p={'md'}>
                            <Button
                                type={'submit'}
                                fullWidth={true}
                            >Create type</Button>
                        </Box>
                    </form>
                </NodeTypeFormProvider>
            </Box>
        </Flex>
    );
};

export default NodeTypesPropsCreateComponent;