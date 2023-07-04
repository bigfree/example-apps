import { ActionIcon, Box, CSSObject, Flex, MantineTheme, Menu, Text } from '@mantine/core';
import { IconSettings2 } from '@tabler/icons-react';
import { FC, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Maybe, NodeType, Scalars } from '../../../__generated__/graphql';
import NodeTypesAsideItemMenuComponent from './NodeTypesItemMenu.component';

type NodeTypesAsideItemProps = {
    nodeType: NodeType;
    isInBuilder?: boolean;
}

type NodeTypesDetailUriProps = {
    nodeTypeId: string;
}

/**
 * ItemContainerStyles
 * @param {MantineTheme} theme
 * @returns {CSSObject}
 */
const itemContainerStyles = (theme: MantineTheme): CSSObject => ({
    border: `1px solid ${theme.colors.gray[2]}`,
    width: '100%',
    boxShadow: `2px 2px 0 0 ${theme.colors.gray[1]}`,
    borderRadius: 0,
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    marginBottom: theme.spacing.xs,
    '&:last-child': {
        marginBottom: 0,
    },
});

const itemLinkStyles = (theme: MantineTheme): CSSObject => ({
    padding: theme.spacing.xs,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    color: theme.colors.dark,
    textDecoration: 'none',
    borderRight: `1px solid ${theme.colors.gray[2]}`,
});

const itemMenuContainerStyles = (): CSSObject => ({
    flex: '0 0 30px',
    width: 30,
});

const NodeTypesColorContainer: FC<{ color?: Maybe<Scalars['String']> }> = ({ color }) => {
    return (
        <Box
            sx={(theme: MantineTheme) => ({
                background: color ?? theme.colors.dark,
                flex: '0 0 9px',
                width: 9,
                height: 9,
                borderRadius: '100%',
            })}
        ></Box>
    );
};

const NodeTypesAsideItem: FC<NodeTypesAsideItemProps> = ({ nodeType, isInBuilder }: NodeTypesAsideItemProps) => {
    const params: Readonly<Partial<NodeTypesDetailUriProps>> = useParams<NodeTypesDetailUriProps>();

    return (
        <Box
            sx={[itemContainerStyles, (theme: MantineTheme) => ({
                boxShadow: params.nodeTypeId === nodeType.id
                    ? `0 0 0px 3px ${theme.colors.gray[1]}`
                    : `2px 2px 0 0 ${theme.colors.gray[1]}`,
            })]}
        >
            {isInBuilder ? (
                <Box sx={itemLinkStyles} title={'Open detail'}>
                    <Flex align={'center'} wrap={'nowrap'} gap={5}>
                        <NodeTypesColorContainer color={nodeType.nodeTypeData.color} />
                        <Text fz={'sm'} sx={{
                            flex: 1,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: 1,
                        }}>
                            {nodeType.name}
                        </Text>
                    </Flex>
                    <Text fz={'xs'} color={'gray'} h={19}>
                        {nodeType.externalId ?? `#${nodeType.externalId}`}
                    </Text>
                </Box>
            ) : (
                <Box
                    component={Link}
                    to={nodeType.id}
                    sx={itemLinkStyles}
                    title={'Open detail'}
                >
                    <Flex align={'center'} wrap={'nowrap'} gap={5}>
                        <NodeTypesColorContainer color={nodeType.nodeTypeData.color} />
                        <Text fz={'sm'} sx={{
                            flex: 1,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: 1,
                        }}>
                            {nodeType.name}
                        </Text>
                    </Flex>
                    <Text fz={'xs'} color={'gray'} h={19}>
                        {nodeType.externalId ? `#${nodeType.externalId}` : ''}
                    </Text>
                </Box>
            )}
            <Box sx={itemMenuContainerStyles}>
                <Menu
                    shadow={'md'}
                    width={200}
                >
                    <Menu.Target>
                        <ActionIcon
                            variant={'light'}
                            h={'100%'}
                            w={'100%'}
                            title={'Settings'}
                        >
                            <IconSettings2 size={'1.15rem'} />
                        </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <NodeTypesAsideItemMenuComponent nodeType={nodeType} />
                    </Menu.Dropdown>
                </Menu>
            </Box>
        </Box>
    );
};

export default memo(NodeTypesAsideItem);