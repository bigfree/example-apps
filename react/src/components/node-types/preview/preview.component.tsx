import { Box } from '@mantine/core';
import { FC, useEffect } from 'react';
import { Background, BackgroundVariant, Node, ReactFlow, useNodesState } from 'reactflow';
import ExampleNodeTypeNode from '../../../nodes/exampleNodeType.node';
import usePreviewNodeTypeStore, { PreviewNodeType } from '../../../store/PreviewNodeType.store';

const initialNodes: Node<PreviewNodeType>[] = [{
    id: 'preview-id',
    type: 'previewNode',
    position: {
        x: 0,
        y: 0,
    },
    data: {
        name: '',
        nodeTypeData: {},
    },
}];

const nodeTypes = {
    previewNode: ExampleNodeTypeNode,
};

const NodeTypesPreview: FC = (): JSX.Element => {
    const nodeTypeInput: PreviewNodeType = usePreviewNodeTypeStore(store => store.previewNodeType);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

    useEffect(() => {
        setNodes((nodes) => nodes.map((node) => {
            if ('preview-id' === node.id) {
                node.data = {
                    ...node.data,
                    ...nodeTypeInput,
                };
            }

            return node;
        }));
    }, [nodeTypeInput, setNodes]);

    return (
        <Box
            sx={{
                flex: '0 0 50%',
            }}
        >
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                panOnDrag={false}
                zoomOnScroll={false}
                nodesFocusable={false}
                nodesDraggable={false}
                elementsSelectable={false}
                defaultViewport={{
                    x: 0,
                    y: 0,
                    zoom: 1,
                }}
                fitView={true}
                fitViewOptions={{
                    minZoom: 1,
                    maxZoom: 1,
                }}
                // lock={true}
            >
                <Background variant={BackgroundVariant.Dots} gap={6} size={0.6} />
            </ReactFlow>
        </Box>
    );
};

export default NodeTypesPreview;