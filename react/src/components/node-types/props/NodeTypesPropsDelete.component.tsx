import { useMutation } from '@apollo/client';
import { Button, createStyles, Grid, MantineTheme, Stack, Text } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Maybe, Scalars } from '../../../__generated__/graphql';
import { REMOVE_NODE_TYPE } from '../../../gql/RemoveNodeType.mutation';

type NodeTypesPropsDeleteComponentProps = {
    nodeTypeId?: Maybe<Scalars['String']>;
};

const useStyles = createStyles((theme: MantineTheme) => ({
    container: {
        border: `1px solid ${theme.colors.red[8]}`,
        boxShadow: `3px 3px 0 0 ${theme.colors.red[5]}`,
        padding: theme.spacing.md,
        margin: theme.spacing.md,
    },
    deleteButton: {
        boxShadow: 'none',
        '& > div': {
            justifyContent: 'flex-start',
        },
    },
    header: {
        borderBottom: `1px solid ${theme.colors.red[8]}`,
        flex: 1,
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        marginBottom: theme.spacing.xs,
        marginTop: 'calc(-1rem / 2)',
        marginLeft: 'calc(-1rem / 2)',
        marginRight: 'calc(-1rem / 2)',
    },
}));

const NodeTypesPropsDeleteComponent: FC<NodeTypesPropsDeleteComponentProps> = ({ nodeTypeId }) => {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const [removeNodeType] = useMutation(REMOVE_NODE_TYPE, {
        update(cache, { data }): void {
            const nodeTypeId: string | undefined = cache.identify({
                __typename: data?.removeNodeType.__typename,
                id: data?.removeNodeType.id,
            });

            const nodeTypeDataId: string | undefined = cache.identify({
                __typename: data?.removeNodeType.nodeTypeData.__typename,
                id: data?.removeNodeType.nodeTypeData.id,
            });

            cache.evict({ id: nodeTypeId });
            cache.evict({ id: nodeTypeDataId });
        },
        onCompleted(): void {
            navigate('/node-types', {
                replace: true,
            });
        },
    });

    const deleteNodeType = useCallback(async () => {
        await removeNodeType({
            variables: {
                nodeTypeWhereUniqueInput: {
                    id: nodeTypeId,
                },
            },
        });
    }, [nodeTypeId]);

    return (
        <Stack
            justify={'flex-start'}
            spacing={'md'}
            className={classes.container}
        >
            <Grid>
                <Text className={classes.header} color={'red.7'} weight={'bold'}>Danger zone:</Text>
                <Grid.Col span={12}>
                    <Button
                        variant={'light'}
                        color={'red'}
                        fullWidth={true}
                        leftIcon={<IconTrash size={18} />}
                        className={classes.deleteButton}
                        onClick={deleteNodeType}
                    >
                        Delete node type
                    </Button>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Button
                        variant={'light'}
                        color={'red'}
                        fullWidth={true}
                        leftIcon={<IconTrash size={18} />}
                        className={classes.deleteButton}
                    >
                        Safe delete node type
                    </Button>
                </Grid.Col>
            </Grid>
        </Stack>
    );
};

export default memo(NodeTypesPropsDeleteComponent);