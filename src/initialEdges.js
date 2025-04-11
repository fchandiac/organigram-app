const initialEdges = [
    // ALCALDE → JEFE DAEM → COORDINADORA ADMINISTRATIVA
    {
      id: "e1-2", source: "1", target: "2", type: "straight", style: { stroke: "#154977", strokeWidth: 2 },
    },
    {
      id: "e2-3", source: "2", target: "3", type: "straight", style: { stroke: "#154977", strokeWidth: 2 },
    },
  
    // Conexiones desde COORDINADORA ADMINISTRATIVA
    { id: "e3-4", source: "3", target: "4", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-5", source: "3", target: "5", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-6", source: "3", target: "6", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-7", source: "3", target: "7", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-8", source: "3", target: "9", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-10", source: "3", target: "10", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-21", source: "3", target: "21", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-30", source: "3", target: "30", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-40", source: "3", target: "40", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e3-47", source: "3", target: "47", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
  
    // RRHH hijos
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `e10-${i + 11}`, source: "10", target: `${i + 11}`, type: "step", style: { stroke: "#154977", strokeWidth: 2 },
    })),
  
    // UTP hijos
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `e21-${i + 22}`, source: "21", target: `${i + 22}`, type: "step", style: { stroke: "#154977", strokeWidth: 2 },
    })),
  
    // SOCIAL hijos
    ...Array.from({ length: 9 }, (_, i) => ({
      id: `e30-${i + 31}`, source: "30", target: `${i + 31}`, type: "step", style: { stroke: "#154977", strokeWidth: 2 },
    })),
  
    // FINANZAS hijos
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `e40-${i + 41}`, source: "40", target: `${i + 41}`, type: "step", style: { stroke: "#154977", strokeWidth: 2 },
    })),
  
    // INFRAESTRUCTURA hijos
    { id: "e47-48", source: "47", target: "48", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e47-49", source: "47", target: "49", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e47-50", source: "47", target: "50", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
    { id: "e47-51", source: "47", target: "51", type: "step", style: { stroke: "#154977", strokeWidth: 2 } },
  ];
  
  export default initialEdges;
  