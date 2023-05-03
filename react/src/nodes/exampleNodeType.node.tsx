import { Box, CSSObject, MantineTheme } from '@mantine/core';
import { FC, memo } from 'react';
import { NodeTypeCreateInput } from '../__generated__/graphql';

type ExampleNodeTypeNode = {
    data: NodeTypeCreateInput
}

const styles = (theme: MantineTheme): CSSObject => ({
    width: 150,
    border: '1px solid red',
    wordWrap: 'break-word'
});

const ExampleNodeTypeNode: FC<ExampleNodeTypeNode> = ({ data }): JSX.Element => {
    return (
        <Box sx={styles}>
            {'' !== data.name ? data.name : 'Node type name'}
        </Box>
    );
};

export default memo(ExampleNodeTypeNode);