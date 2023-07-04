import { useMutation } from '@apollo/client';
import { ActionIcon, Box, Button, createStyles, Flex, Group, MantineTheme, Title } from '@mantine/core';
import { IconPin, IconPinned, IconShare2, IconX } from '@tabler/icons-react';
import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Maybe, Scalars } from '../../../__generated__/graphql';
import { UPDATE_NODE_TYPE_PINNED } from '../../../gql/UpdateNodeTypePinned.mutation';

type NodeTypesPropsHeaderComponentProps = {
    nodeTypeId?: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    pinned?: Maybe<Scalars['Boolean']>;
}

const useStyles = createStyles((theme: MantineTheme) => ({
    container: {
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
        alignItems: 'center',
    },
    closeContainer: {
        flex: '0 0 58px',
        borderLeft: `1px solid ${theme.colors.gray[3]}`,
        alignSelf: 'stretch',
    },
    title: {
        flex: 1,
        width: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    button: {
        boxShadow: 'none',
        borderRadius: 4,
        color: theme.colors.dark[4],
        fontSize: theme.fontSizes.sm,
        textAlign: 'left'
    },
    closeIcon: {
        width: '100%',
        height: '100%',
    },
    pinned: {
        borderColor: theme.colors.yellow[3],
    },
}));

const NodeTypesPropsHeaderComponent: FC<NodeTypesPropsHeaderComponentProps> = ({ nodeTypeId, name, pinned }) => {
    const { classes, cx } = useStyles();
    const [setPinned] = useMutation(UPDATE_NODE_TYPE_PINNED);

    const togglePin = useCallback(async () => {
        await setPinned({
            variables: {
                nodeTypeWhereUniqueInput: {
                    id: nodeTypeId,
                },
                nodeTypeUpdateInput: {
                    pinned: {
                        set: !pinned,
                    },
                },
            },
        });
    }, [nodeTypeId, pinned]);

    return (
        <Flex className={classes.container}>
            <Title order={4} p={'md'} className={classes.title} title={name ?? ''}>
                {name}
            </Title>
            <Group mr={'sm'} spacing={'xs'}>
                <Button
                    onClick={togglePin}
                    variant={pinned ? 'light' : 'outline'}
                    color={pinned ? 'yellow' : 'gray.4'}
                    leftIcon={pinned ? <IconPin size={22} /> : <IconPinned />}
                    className={cx(classes.button, { [classes.pinned]: pinned })}
                >
                    {pinned ? 'Unpin' : 'Pin'}
                </Button>
                <Button
                    variant={'outline'}
                    color={'gray.4'}
                    leftIcon={<IconShare2 size={22} />} className={classes.button}
                >
                    Share
                </Button>
            </Group>
            <Box className={classes.closeContainer}>
                <ActionIcon className={classes.closeIcon} component={Link} to={'/node-types'}>
                    <IconX size={26} color={'#000000'} />
                </ActionIcon>
            </Box>
        </Flex>
    );
};

export default NodeTypesPropsHeaderComponent;