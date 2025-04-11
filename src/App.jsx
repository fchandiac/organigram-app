import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  useReactFlow,
  ReactFlowProvider,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import PNode from "./PNode";
import SNode from "./SNode";
import SLNode from "./SLNode";
import SRNode from "./SRNode";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import initialNodes from "./initialNodes";
import initialEdges from "./initialEdges";

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
    fitView({ padding: 0.01 });
  }, [fitView]);

  const onNodeClick = useCallback((_, node) => {
    if (node?.data?.content?.trim()) {
      setSelectedNode(node);
    }
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <AppBar position="static" sx={{ backgroundColor: "#154977" }}>
        <Toolbar
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            px: 2,
            py: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Organigrama DAEM Parral
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap={4}
            mt={1}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+56 9 2380 3446</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">Balmaceda 206</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="body2">
                Lun-Jue 8:30 - 17:30 | Vie 8:30 - 16:30
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ height: "calc(100% - 64px)" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          panOnDrag
          zoomOnScroll={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          defaultViewport={{ x: 0, y: 0, zoom: 0.4 }}
        >
          <Background gap={12} color="#ccc" />
        </ReactFlow>
      </Box>

      {selectedNode && (
        <Card
          sx={{
            position: "absolute",
            top: 90,
            right: 20,
            width: 600,
            boxShadow: 6,
            zIndex: 10,
          }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
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
              <Typography
                variant="body2"
                mt={1}
                sx={{ whiteSpace: "pre-line" }}
              >
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
        </Card>
      )}
    </Box>
  );
};

const App = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  </div>
);

export default App;
