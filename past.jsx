

// import React, { useRef, useState, useEffect } from "react";
// import Tree from "react-d3-tree";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const data = {
//   name: "ALCALDE",
//   children: [{ name: "JEFE DAEM" }],
// };

// const App = () => {
//   const containerRef = useRef();
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

//   const [translate, setTranslate] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);

//   useEffect(() => {
//     const dimensions = containerRef.current?.getBoundingClientRect();
//     if (dimensions) {
//       // Calculamos un zoom automático (simple)
//       const baseNodeWidth = 200;
//       const desiredWidth = baseNodeWidth * 3; // estimamos 3 nodos visibles
//       const estimatedZoom = dimensions.width / desiredWidth;

//       setZoom(Math.min(1, estimatedZoom)); // no pasar de zoom = 1
//       setTranslate({
//         x: dimensions.width / 2,
//         y: 150, // espacio desde arriba
//       });
//     }
//   }, []);


//   const handleNodeClick = (nodeDatum) => {
//     const { x, y } = nodeDatum.__rd3t;
//     console.log("Nodo clickeado está en:", x, y);
//   };
  
  

//   const handleCloseCard = () => {
//     setSelectedNode(null);
//   };

//   const renderStyledNode = ({ nodeDatum }) => {
//     const { x, y } = nodeDatum.__rd3t;
  
//     const handleClick = () => {
//       handleNodeClick(nodeDatum, x, y);
//     };
  
//     return (
//       <g onClick={handleClick} style={{ cursor: "pointer" }}>
//         <rect
//           width={160}
//           height={70}
//           x={-80}
//           y={-35}
//           fill="#154977"
//           stroke="#9ac8cb"
//           strokeWidth={2}
//           rx={10}
//         />
//         <text
//           fill="#ffffff"
//           stroke="none"
//           x="0"
//           y="0"
//           textAnchor="middle"
//           alignmentBaseline="central"
//           style={{
//             fontWeight: "bold",
//             fontFamily: "sans-serif",
//             fontSize: "14px",
//           }}
//         >
//           {nodeDatum.name}
//         </text>
//       </g>
//     );
//   };
  
//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "#f0f4f7",
//         position: "relative",
//       }}
//       ref={containerRef}
//     >
//       <Tree
//         data={data}
//         orientation="vertical"
//         translate={translate}
//         zoom={zoom}
//         collapsible={false}
//         zoomable={true}
//         scaleExtent={{ min: 0.3, max: 2 }}
//         pathFunc="elbow"
//         renderCustomNodeElement={(rd3tProps) => renderStyledNode(rd3tProps)}
//       />

//       {selectedNode && (
//         <Card
//           sx={{
//             position: "absolute",
//             top: cardPosition.y,
//             left: cardPosition.x,
//             width: 220,
//             boxShadow: 6,
//             zIndex: 10,
//           }}
//         >
//           <CardContent>
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Typography variant="h6">{selectedNode.name}</Typography>
//               <IconButton size="small" onClick={handleCloseCard}>
//                 <CloseIcon fontSize="small" />
//               </IconButton>
//             </Box>
//             <Typography variant="body2" mt={1}>
//               Aquí irá la info detallada de este nodo.
//             </Typography>
//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default App;
// // FIT TO SCREEN
