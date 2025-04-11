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
  ● Representar judicial y extrajudicialmente a la municipalidad.
  ● Proponer al concejo la organización interna de la municipalidad.
  ● Velar por la probidad administrativa dentro del municipio.
  ● Administrar los recursos financieros de la municipalidad.
  ● Administrar los bienes municipales y nacionales de uso público de la comuna que correspondan.
  ● Otorgar, renovar y poner término a permisos municipales.
  ● Coordinar el funcionamiento de la municipalidad con los órganos de la Administración del Estado que corresponda.
  ● Coordinar con los servicios públicos la acción de éstos en el territorio de la comuna.
  ● Convocar y presidir, con derecho a voto, el concejo.
  ● Convocar y presidir el Consejo Comunal de Organizaciones de la Sociedad Civil.
  ● Someter a plebiscito las materias de administración local.
      `,
      footer: "Ley Nº 18.695 Orgánica Constitucional de Municipalidades",
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
  ● Responsable de gestionar el accionar de las secciones del Departamento Administrativo de Educación Municipal.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015.
  ● Organiza el Departamento en Secciones y Oficinas según las tareas funcionales de los funcionarios.
      `,
    },
  },

  {
    id: "3",
    type: "SNode",
    position: { x: 900, y: 250 },
    data: {
      label: "COORDINADORA ADMINISTRATIVA",
      role: "secondary",
      title: "Paulina Osses Vásquez",
      content: `
  ● Coordinar las secciones administrativo-financieras, técnico-pedagógicas y social para su buen funcionamiento.
  ● Reemplazar o subrogar al Jefe DAEM en actividades oficiales, en ausencia formal de éste.
  ● Participar en reuniones de Directores y otras a que se convoque en el DAEM.
  ● Mantenerse informado de los estados contables y financieros del DAEM e informar al Jefe DAEM cuando sea necesario o se le solicite.
  ● Convocar, realizar y/o participar de reuniones técnicas y de coordinación con los encargados de las distintas dependencias que componen el DAEM, previa comunicación e información al Jefe DAEM.
  ● Apoyar al Jefe DAEM en la coordinación, reuniéndose periódicamente con los Directores de las Unidades Municipales en el Comité Técnico Municipal, con el objeto de planificar las actividades a realizar en el ámbito de la gestión municipal general y participar en las reuniones de Comité Técnico en el DAEM.
  ● Convocar, realizar y/o participar en reuniones mensuales con todos los Directores de las diferentes unidades educativas municipales, previa comunicación e información al Jefe DAEM.
  ● Participar en las reuniones del Consejo Comunal de Centros de Padres, para estudiar y resolver situaciones comunes.
  ● Revisar y visar los contratos del personal docente y asistente de la educación, para completar la dotación de cada establecimiento municipal.
      `,
    },
  },

  {
    id: "4",
    type: "SRNode",
    position: { x: 650, y: 400 },
    data: {
      label: "JURÍDICO",
      role: "secondary",
      title: "María Jesús Ruiz / Marcelo Valencia",
      content: `
  ● Proporcionar asesoría jurídica al Departamento de Administración de Educación Municipal en materia laboral administrativa y en la elaboración de los actos administrativos correspondientes.
  ● Velar por la correcta aplicación de la normativa laboral administrativa entre las relaciones laborales entre el municipio y el personal dependiente del DAEM, ya sea regido por la ley N°19.070, Código del Trabajo o ley N°19.464, así como en la tramitación de procedimientos disciplinarios instruidos.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
      `,
    },
  },
  {
    id: "6",
    type: "SRNode",
    position: { x: 650, y: 500 },
    data: {
      label: "DIFUSIÓN",
      role: "secondary",
      title: "Bárbara Silva Rodríguez",
      content: `
● Difusión de actividades propias del DAEM Parral, y de los diferentes establecimientos municipalizados de la comuna.
● Gestión de prensa, confección de estrategias comunicacionales, posicionamiento de la institución.
● Generación de material gráfico y publicitario, edición de contenido, análisis de medios y diagnóstico comunicacional.
● Manejo de redes sociales y plataformas online.
● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
    `,
    },
  },
  {
    id: "7",
    type: "SLNode",
    position: { x: 1200, y: 500 },
    data: {
      label: "OIRS",
      role: "secondary",
      title: "Yenifer Urrutia González",
      content: `
● Oficina de atención al usuario, recepcionando información, reclamos y sugerencias.
● Atención ciudadana integral.
● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
    `,
    },
  },
  {
    id: "8",
    type: "SRNode",
    position: { x: 650, y: 600 },
    data: {
      label: "V.T.F.",
      role: "secondary",
      title: "Karina Hernández",
      content: `
● La misión es velar por el desarrollo y promoción de una política para el fortalecimiento del primer nivel educativo.
● Se encarga de la elaboración, diseño e implementación de políticas y programas orientados a la educación parvularia.
● Articula mecanismos de coordinación con la comunidad educativa, en especial con las familias, para garantizar un sistema inclusivo, equitativo y de calidad para niños y niñas de 0 a 6 años.
● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
    `,
    },
  },
  {
    id: "9",
    type: "SLNode",
    position: { x: 1200, y: 600 },
    data: {
      label: "MOVILIZACIÓN",
      role: "secondary",
      title: "Juan Carlos Vallejos",
      content: `
● Organización y coordinación del servicio de transporte escolar otorgado por el Departamento de Educación Municipal, en los diferentes establecimientos municipalizados de la comuna.
● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
    `,
    },
  },
  {
    id: "10",
    type: "PNode",
    position: { x: 100, y: 1100 },
    data: {
      label: "SECCIÓN RR.HH",
      role: "principal",
      title: "Gloria Núñez",
      content: `
● Responsable del control de la dotación docente y de asistentes de la educación en los establecimientos municipalizados de Parral.
● Encargada de la asignación de horas, identificación de funciones específicas y provisión de reemplazos por licencias médicas, permisos u otras causas.
● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
    `,
    },
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
    data: {
      label: "REMUNERACIONES",
      role: "secondary",
      title: "Licarayen Jiménez Castillo",
      content: `
  ● Organismo encargado del procesamiento de las remuneraciones de los funcionarios de la institución.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
      `,
    },
  },
  {
    id: "13",
    type: "SNode",
    position: { x: 100, y: 1400 },
    data: {
      label: "LICENCIAS MÉDICAS",
      role: "secondary",
      title: "Patricia Castillo",
      content: `
  ● Recepción, ingreso, tramitación y reporte de licencias médicas a establecimientos educacionales.
  ● Recepción, ingreso, tramitación y reporte de licencias médicas del postnatal parental a la Inspección del Trabajo.
  ● Decretar licencias médicas pagadas y rechazadas.
  ● Atención de público y ventanilla única.
  ● Conocimiento y aplicación del Reglamento de Licencias Médicas DAEM, por Decreto Exento N° 1785 del 8 de abril de 2024.
      `,
    },
  },
  {
    id: "14",
    type: "SNode",
    position: { x: 100, y: 1500 },
    data: {
      label: "B.R.P.",
      role: "secondary",
      title: "Margarita Amaro",
      content: `
  ● Tramitación de las autorizaciones docente al DEPROE.
  ● Ingresar, registrar y decretar los permisos sin goce de sueldo del DAEM, de los establecimientos educacionales y VTF.
  ● Ingresar, registrar y decretar los permisos administrativos del DAEM, de los Establecimientos Educacionales y VTF.
  ● Tramitación de bienios cuando corresponda.
  ● Revisión de los reportes del reloj control del DAEM, Establecimientos Educacionales y VTF.
  ● Declaración del BRP ante el CPEiP de los docentes.
  ● Declaración mensual de los docentes a la Carrera Docente.
  ● Ingresar, registrar y decretar fianza, viáticos y horas extras, según corresponda.
  ● Actualizar mensualmente el SIGE del DAEM.
      `,
    },
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
    data: {
      label: "AUXILIARES SERVICIOS MENORES",
      role: "secondary",
      title: "Gloria Núñez",
      content: `
  ● Mantención de las dependencias del Departamento de Educación.
  ● Cuidado y aseo de las dependencias, muebles, enseres e instalaciones.
  ● Estafeta.
      `,
    },
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
    data: {
      label: "O.T. DECRETOS/CONTRATOS",
      role: "secondary",
      title:
        "Gloria Núñez, Margarita Amaro, Aida Ortega, Eladia Vásquez, Patricia Castillo",
      content: `
  ● Realizar órdenes de trabajo solicitadas por oficio en un plazo de dos días hábiles.
  ● Confección de contratos y/o decretos, los que son enviados para la revisión de jurídico, posteriormente se suben a SIGNIFLOW para la firma del Jefe DAEM y jurídico, y ser enviados a la municipalidad para el número de decreto y firma del Alcalde y Secretaria Municipal, para finalmente mandar copias al establecimiento y al interesado(a).
  ● Confeccionar la Planta Docente 2025.
  ● Revisión del SIGE (Idoneidad Docente).
  ● Contratación de reemplazos según la necesidad de las Unidades Educativas.
  ● Contratación de honorarios según necesidad del sistema y de los establecimientos educacionales.
  ● Confección, tramitación e ingresos de los finiquitos de término de contrato de docentes y asistentes de la educación.
  ● Ingreso al SIAPER de decretos y contratos.
  ● Postulación al bono de retiro docente y asistentes de la educación.
      `,
    },
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
