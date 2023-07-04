import { Box, CSSObject, MantineTheme } from '@mantine/core';
import { FC, memo } from 'react';
import useHexToRgb from '../common/hexToRgb.hook';
import { PreviewNodeType } from '../store/PreviewNodeType.store';

type ExampleNodeTypeNode = {
    data: PreviewNodeType
}

const previewBoxStyles = (theme: MantineTheme): CSSObject => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: theme.radius.sm,
    wordWrap: 'break-word',
    fontSize: theme.fontSizes.md,
    background: '#ffffff',
});

const previewTextStyles: CSSObject = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '5px 10px',
};

const ExampleNodeTypeNode: FC<ExampleNodeTypeNode> = ({ data }): JSX.Element => {
    return (
        <Box sx={[previewBoxStyles, {
            width: data.nodeTypeData.width ?? 150,
            height: data.nodeTypeData.height ?? 'auto',
            borderColor: data.nodeTypeData.color ?? '',
            boxShadow: `3px 3px 0 0 ${useHexToRgb(data.nodeTypeData.color ?? '', 0.2)}`,
        }]}>
            <Box sx={[previewTextStyles, {
                backgroundColor: useHexToRgb(data.nodeTypeData.color ?? '', 0.05),
            }]}>
                {'' !== data.name ? data.name : 'Node type name'}
            </Box>
        </Box>
    );
};

export default memo(ExampleNodeTypeNode);