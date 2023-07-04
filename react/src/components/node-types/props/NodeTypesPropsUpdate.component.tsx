import { QueryResult, useMutation, useQuery } from '@apollo/client';
import { Box, Button, Flex, MantineTheme } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NodeTypeQuery, NodeTypeQueryVariables } from '../../../__generated__/graphql';
import { NodeTypeFormProvider } from '../../../context/nodeType-form.context';
import { GET_NODE_TYPE } from '../../../gql/NodeType.query';
import { UPDATE_NODE_TYPE } from '../../../gql/UpdateNodeType.mutation';
import usePreviewNodeTypeStore, { initialPreviewNodeType, PreviewNodeType } from '../../../store/PreviewNodeType.store';
import NodeTypesPropsDeleteComponent from './NodeTypesPropsDelete.component';
import NodeTypesPropsFormComponent from './NodeTypesPropsForm.component';
import NodeTypesPropsHeaderComponent from './NodeTypesPropsHeader.component';


const NodeTypesPropsUpdateComponent: FC = () => {
    const { nodeTypeId } = useParams<{ nodeTypeId: string }>();
    const setPreviewNodeType = usePreviewNodeTypeStore(store => store.setPreviewNodeType);

    const { data }: QueryResult<NodeTypeQuery, NodeTypeQueryVariables> = useQuery(GET_NODE_TYPE, {
        fetchPolicy: 'cache-first',
        variables: {
            nodeTypeWhereUniqueInput: {
                id: nodeTypeId,
            },
        },
    });

    const [updateNodeType] = useMutation(UPDATE_NODE_TYPE, {
        onCompleted: () => {
            notifications.show({
                id: 'update-node-type',
                message: `Update node type has successful`,
                autoClose: 3000,
                icon: <IconCheck size='1.2rem' />,
                withCloseButton: false,
                color: 'green',
                radius: 'xs',
                withBorder: true,
            });
        },
    });

    const form: UseFormReturnType<PreviewNodeType> = useForm<PreviewNodeType>({
        initialValues: initialPreviewNodeType,
    });

    useEffect(() => {
        if (!data) {
            return;
        }

        const {
            name,
            externalId,
            nodeTypeData,
        } = data.nodeType;
        const {
            geometry,
            height,
            color,
            width,
            acronym,
            description,
        } = nodeTypeData;

        const previewNodeType: PreviewNodeType = {
            name,
            externalId,
            nodeTypeData: {
                geometry,
                height,
                color,
                width,
                acronym,
                description,
            },
        };

        setPreviewNodeType(previewNodeType);
        form.setValues(previewNodeType);
        form.resetDirty(previewNodeType);
    }, [data]);

    useEffect(() => {
        setPreviewNodeType(form.values);
    }, [form.values]);

    return (
        <Flex
            direction={'column'}
            sx={(theme: MantineTheme) => ({
                flex: '0 0 50%',
                borderRight: `1px solid ${theme.colors.gray[2]}`,
            })}
        >
            <NodeTypesPropsHeaderComponent
                nodeTypeId={data?.nodeType.id}
                name={data?.nodeType.name}
                pinned={data?.nodeType.pinned}
            />
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
                        await updateNodeType({
                            variables: {
                                nodeTypeWhereUniqueInput: {
                                    id: nodeTypeId,
                                },
                                nodeTypeUpdateInput: {
                                    name: {
                                        set: values.name,
                                    },
                                    externalId: {
                                        set: values.externalId,
                                    },
                                    nodeTypeData: {
                                        update: {
                                            color: {
                                                set: values.nodeTypeData.color,
                                            },
                                            acronym: {
                                                set: values.nodeTypeData.acronym,
                                            },
                                            height: {
                                                set: values.nodeTypeData.height,
                                            },
                                            width: {
                                                set: values.nodeTypeData.width,
                                            },
                                            description: {
                                                set: values.nodeTypeData.description,
                                            },
                                            geometry: {
                                                set: values.nodeTypeData.geometry,
                                            },
                                        },
                                    },
                                },
                            },
                            optimisticResponse: {
                                updateNodeType: {
                                    __typename: 'NodeType',
                                    id: nodeTypeId as string,
                                    externalId: values.externalId,
                                    name: values.name,
                                    nodeTypeData: {
                                        __typename: 'NodeTypeData',
                                        id: data?.nodeType.id as string,
                                        ...values.nodeTypeData,
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
                            <NodeTypesPropsDeleteComponent nodeTypeId={nodeTypeId} />
                        </Box>
                        <Box p={'md'}>
                            <Button
                                type={'submit'}
                                fullWidth={true}
                            >Update type</Button>
                        </Box>
                    </form>
                </NodeTypeFormProvider>
            </Box>
        </Flex>
    );
};

export default NodeTypesPropsUpdateComponent;