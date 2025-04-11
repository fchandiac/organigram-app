import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, {
  useReactFlow,
  ReactFlowProvider,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';

import PNode from './PNode';
import SNode from './SNode';
import SLNode from './SLNode';
import SRNode from './SRNode';

import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import  initialNodes  from './initialNodes';
import  initialEdges  from './initialEdges';




const nodeTypes = {
  PNode: PNode,
  SNode: SNode,
  SLNode: SLNode,
  SRNode: SRNode,
};

const FlowCanvas = () => {
  const { fitView } = useReactFlow();
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    fitView({ padding: 0.2 });
  }, [fitView]);

  const onNodeClick = useCallback((_, node) => {
    setSelectedNode(node);
  }, []);

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        panOnDrag
        zoomOnScroll={false}
        nodesDraggable={false}
        nodesConnectable={false}      // 👈 importante
        elementsSelectable={false}
      >
        <Background gap={12} color="#ccc" />
      </ReactFlow>

      {selectedNode && (
        <Card
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 600,
            boxShadow: 6,
            zIndex: 10,
          }}
        >
          <CardContent>
          <CardContent>
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography variant="h6">{selectedNode.data.label}</Typography>
    <IconButton onClick={() => setSelectedNode(null)} size="small">
      <CloseIcon fontSize="small" />
    </IconButton>
  </Box>

  {selectedNode.data.title && (
    <Typography variant="subtitle1" mt={1} fontWeight="bold">
      {selectedNode.data.title}
    </Typography>
  )}

  {selectedNode.data.content && (
    <Typography variant="body2" mt={1} sx={{ whiteSpace: "pre-line" }}>
      {selectedNode.data.content}
    </Typography>
  )}

  {selectedNode.data.footer && (
    <Typography
      variant="caption"
      mt={2}
      color="text.secondary"
      sx={{ whiteSpace: "pre-line", display: "block" }}
    >
      {selectedNode.data.footer}
    </Typography>
  )}
</CardContent>

          </CardContent>
        </Card>
      )}
    </Box>
  );
};

const App = () => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  </div>
);

export default App;
