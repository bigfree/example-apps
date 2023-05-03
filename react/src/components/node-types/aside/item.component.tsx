import { Box, CSSObject, MantineTheme } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NodeType } from '../../../__generated__/graphql';

type NodeTypesAsideItemProps = {
    nodeType: NodeType
}

const styles = (theme: MantineTheme): CSSObject => ({
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: '5px',
    padding: theme.spacing.xs,
    display: 'bloc',
});

const NodeTypesAsideItem: FC<NodeTypesAsideItemProps> = ({nodeType}): JSX.Element => {
    return (
        <Box
            component={Link}
            to={nodeType.id}
            sx={[styles, {
                borderColor: nodeType.color ?? ''
            }]}>
                <span>{nodeType.id}</span>
                <span>{nodeType.name}</span>
        </Box>
    );
};

export default NodeTypesAsideItem;