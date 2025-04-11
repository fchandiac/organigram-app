import { RampRightSharp } from "@mui/icons-material";

const initialNodes = [
  {
    id: "1",
    type: "PNode",
    position: { x: 900, y: 50 },
    data: {
      label: "ALCALDE",
      role: "principal",
      title: "Patricio Ojeda Alarcón",
      content: `
  ● Representar judicial y extrajudicialmente a la municipalidad;
  ● Proponer al concejo la organización interna de la municipalidad;
  ● Velar por la probidad administrativa dentro del municipio.
  ● Administrar los recursos financieros de la municipalidad.
  ● Administrar los bienes municipales y nacionales de uso público de la comuna que correspondan.
  ● Otorgar, renovar y poner término a permisos municipales;
  ● Coordinar el funcionamiento de la municipalidad con los órganos de la Administración del Estado que corresponda;
  ● Coordinar con los servicios públicos la acción de éstos en el territorio de la comuna;
  ● Convocar y presidir, con derecho a voto, el concejo; como asimismo, convocar y presidir el Consejo comunal de organizaciones de la sociedad civil;
  ● Someter a plebiscito las materias de administración local.
      `,
      footer: "Ley Nº 18.695, Orgánica Constitucional de Municipalidades",
    },
  },
  {
    id: "2",
    type: "PNode",
    position: { x: 900, y: 150 },
    data: {
      label: "JEFE DAEM",
      role: "principal",
      title: "Paulina Osses Vásquez",
      content: `
  ● Tiene la responsabilidad de gestionar el accionar de las secciones en que se subdivide el Departamento Administrativo de Educación Municipal.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
      `,
    },
  },
  {
    id: "3",
    type: "SNode",
    position: { x: 900, y: 250 },
    data: { label: "COORDINADORA ADMINISTRATIVA", role: "secondary" },
  },
  {
    id: "4",
    type: "SRNode",
    position: { x: 650, y: 400 },
    data: { label: "JURÍDICO", role: "secondary" },
  },
  {
    id: "6",
    type: "SRNode",
    position: { x: 650, y: 500 },
    data: { label: "DIFUSIÓN", role: "secondary" },
  },
  {
    id: "7",
    type: "SLNode",
    position: { x: 1200, y: 500 },
    data: { label: "OIRS", role: "secondary" },
  },
  {
    id: "8",
    type: "SRNode",
    position: { x: 650, y: 600 },
    data: { label: "V.T.F.", role: "secondary" },
  },
  {
    id: "9",
    type: "SLNode",
    position: { x: 1200, y: 600 },
    data: { label: "MOVILIZACIÓN", role: "secondary" },
  },
  {
    id: "10",
    type: "PNode",
    position: { x: 100, y: 1100 },
    data: { label: "SECCIÓN RR.HH", role: "principal" },
  },

  // 🔽 Nodos secundarios bajo RRHH
  {
    id: "11",
    type: "SNode",
    position: { x: 100, y: 1200 },
    data: { label: "PERSONAL", role: "secondary" },
  },
  {
    id: "12",
    type: "SNode",
    position: { x: 100, y: 1300 },
    data: { label: "REMUNERACIONES", role: "secondary" },
  },
  {
    id: "13",
    type: "SNode",
    position: { x: 100, y: 1400 },
    data: { label: "LICENCIAS MÉDICAS", role: "secondary" },
  },
  {
    id: "14",
    type: "SNode",
    position: { x: 100, y: 1500 },
    data: { label: "B.R.P.", role: "secondary" },
  },
  {
    id: "15",
    type: "SNode",
    position: { x: 100, y: 1600 },
    data: { label: "ASIGNACIONES", role: "secondary" },
  },
  {
    id: "16",
    type: "SNode",
    position: { x: 100, y: 1700 },
    data: { label: "VTE", role: "secondary" },
  },
  {
    id: "17",
    type: "SNode",
    position: { x: 100, y: 1800 },
    data: { label: "AUXILIARES SERVICIOS MENORES", role: "secondary" },
  },
  {
    id: "18",
    type: "SNode",
    position: { x: 100, y: 1900 },
    data: { label: "RELOJ CONTROL", role: "secondary" },
  },
  {
    id: "19",
    type: "SNode",
    position: { x: 100, y: 2000 },
    data: { label: "O.T. DECRETOS/CONTRATOS", role: "secondary" },
  },
  {
    id: "20",
    type: "SNode",
    position: { x: 100, y: 2100 },
    data: { label: "PERMISOS", role: "secondary" },
  },

  {
    id: "21",
    type: "PNode",
    position: { x: 500, y: 1100 },
    data: { label: "SECCIÓN U.T.P.", role: "principal" },
  },

  // 🔽 Nodos secundarios bajo SECCIÓN UTP
  {
    id: "22",
    type: "SNode",
    position: { x: 500, y: 1200 },
    data: { label: "POLÍTICA DOCENTE", role: "secondary" },
  },
  {
    id: "23",
    type: "SNode",
    position: { x: 500, y: 1300 },
    data: { label: "EDUCACIÓN PARVULARIA", role: "secondary" },
  },
  {
    id: "24",
    type: "SNode",
    position: { x: 500, y: 1400 },
    data: { label: "EPJAS Y MICROCENTROS", role: "secondary" },
  },
  {
    id: "25",
    type: "SNode",
    position: { x: 500, y: 1500 },
    data: { label: "P.I.E.", role: "secondary" },
  },
  {
    id: "26",
    type: "SNode",
    position: { x: 500, y: 1600 },
    data: { label: "PME-SEP", role: "secondary" },
  },
  {
    id: "27",
    type: "SNode",
    position: { x: 500, y: 1700 },
    data: { label: "EXTRAESCOLAR E INNOVACIÓN", role: "secondary" },
  },
  {
    id: "28",
    type: "SNode",
    position: { x: 500, y: 1800 },
    data: { label: "REDES Y ACOMPAÑAMIENTO", role: "secondary" },
  },
  {
    id: "29",
    type: "SNode",
    position: { x: 500, y: 1900 },
    data: { label: "EDUCACIÓN MEDIO AMBIENTAL", role: "secondary" },
  },

  // 🟦 SECCIÓN SOCIAL
  {
    id: "30",
    type: "PNode",
    position: { x: 900, y: 1100 },
    data: { label: "SECCIÓN SOCIAL", role: "principal" },
  },

  // 🔽 Nodos secundarios bajo SECCIÓN SOCIAL
  {
    id: "31",
    type: "SNode",
    position: { x: 900, y: 1200 },
    data: { label: "PROGRAMA H.P.V.", role: "secondary" },
  },
  {
    id: "32",
    type: "SNode",
    position: { x: 900, y: 1300 },
    data: { label: "PROGRAMA 4 A 7", role: "secondary" },
  },
  {
    id: "33",
    type: "SNode",
    position: { x: 900, y: 1400 },
    data: { label: "CONVIVENCIA ESCOLAR", role: "secondary" },
  },
  {
    id: "34",
    type: "SNode",
    position: { x: 900, y: 1500 },
    data: { label: "PRO-RETENCIÓN", role: "secondary" },
  },
  {
    id: "35",
    type: "SNode",
    position: { x: 900, y: 1600 },
    data: { label: "SISTEMA DE ADMISIÓN ESCOLAR", role: "secondary" },
  },
  {
    id: "36",
    type: "SNode",
    position: { x: 900, y: 1700 },
    data: { label: "PROGRAMA RESIDENCIA FAMILIAR", role: "secondary" },
  },
  {
    id: "37",
    type: "SNode",
    position: { x: 900, y: 1800 },
    data: { label: "PROGRAMA SALUD ESTUDIANTE", role: "secondary" },
  },
  {
    id: "38",
    type: "SNode",
    position: { x: 900, y: 1900 },
    data: { label: "PROGRAMA ALIMENTACIÓN ESCOLAR", role: "secondary" },
  },
  {
    id: "39",
    type: "SNode",
    position: { x: 900, y: 2000 },
    data: { label: "ASISTENCIA Y REVINCULACIÓN", role: "secondary" },
  },

  // 🟨 SECCIÓN FINANZAS
  {
    id: "40",
    type: "PNode",
    position: { x: 1300, y: 1100 },
    data: { label: "SECCIÓN FINANZAS", role: "principal" },
  },

  // 🔽 Nodos secundarios bajo SECCIÓN FINANZAS
  {
    id: "41",
    type: "SNode",
    position: { x: 1300, y: 1200 },
    data: { label: "CONTABILIDAD", role: "secondary" },
  },
  {
    id: "42",
    type: "SNode",
    position: { x: 1300, y: 1300 },
    data: { label: "PRESUPUESTO", role: "secondary" },
  },
  {
    id: "43",
    type: "SNode",
    position: { x: 1300, y: 1400 },
    data: { label: "ADQUISICIONES", role: "secondary" },
  },
  {
    id: "44",
    type: "SNode",
    position: { x: 1300, y: 1500 },
    data: { label: "INVENTARIO", role: "secondary" },
  },
  {
    id: "45",
    type: "SNode",
    position: { x: 1300, y: 1600 },
    data: { label: "FAEP", role: "secondary" },
  },
  {
    id: "46",
    type: "SNode",
    position: { x: 1300, y: 1700 },
    data: { label: "RENDICIONES", role: "secondary" },
  },

  // 🟫 SECCIÓN INFRAESTRUCTURA Y REC. OFICIAL
  {
    id: "47",
    type: "PNode",
    position: { x: 1700, y: 1100 },
    data: { label: "INFRAESTRUCTURA Y REC. OFICIAL", role: "principal" },
  },

  // 🔽 Nodos secundarios bajo esta sección
  {
    id: "48",
    type: "SNode",
    position: { x: 1700, y: 1200 },
    data: { label: "SERVICIOS GENERALES", role: "secondary" },
  },
  {
    id: "49",
    type: "SNode",
    position: { x: 1700, y: 1300 },
    data: { label: "PROYECTOS", role: "secondary" },
  },
  {
    id: "50",
    type: "SNode",
    position: { x: 1700, y: 1400 },
    data: { label: "RECONOCIMIENTO OFICIAL", role: "secondary" },
  },
  {
    id: "51",
    type: "SNode",
    position: { x: 1700, y: 1500 },
    data: { label: "SEGURIDAD ESCOLAR Y LABORAL", role: "secondary" },
  },
];

export default initialNodes;
