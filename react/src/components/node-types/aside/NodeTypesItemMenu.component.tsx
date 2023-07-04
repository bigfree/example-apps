import { Menu } from '@mantine/core';
import { IconEye, IconPin, IconTrash } from '@tabler/icons-react';
import { FC, Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import { NodeType } from '../../../__generated__/graphql';

type NodeTypesAsideItemMenuComponentProp = {
    nodeType: NodeType,
}

const NodeTypesItemMenuComponent: FC<NodeTypesAsideItemMenuComponentProp> = ({ nodeType }) => {
    return (
        <Fragment>
            <Menu.Label>{nodeType.name}</Menu.Label>
            <Menu.Item icon={<IconPin size={14} />}>Pin</Menu.Item>

            <Menu.Item
                component={Link}
                to={nodeType.id}
                icon={<IconEye size={14} />}
            >
                Open detail
            </Menu.Item>

            <Menu.Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item color={'red'} icon={<IconTrash size={14} />}>Delete</Menu.Item>
        </Fragment>
    );
};

export default memo(NodeTypesItemMenuComponent);