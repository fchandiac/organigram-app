import { RampRightSharp, Title } from "@mui/icons-material";

const initialNodes = [
  {
    id: "1",
    type: "PNode",
    position: { x: 900, y: 50 },
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
    data: { label: "PERSONAL", role: "secondary" },
  },
  {
    id: "12",
    type: "SNode",
    position: { x: 100, y: 1300 },
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
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
    style: { cursor: "pointer" },
    data: {
      label: "SECCIÓN U.T.P.",
      role: "principal",
      title: "Juan Méndez Olave",
      content: `
  ● Asesorar a la jefatura DAEM en aspectos relacionados con programación, organización, supervisión y evaluación del desarrollo de las actividades curriculares de las Unidades Educativas, que administra y dirige el DAEM de Parral.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
      `,
    },
  },

  // 🔽 Nodos secundarios bajo SECCIÓN UTP
  {
    id: "22",
    type: "SNode",
    position: { x: 500, y: 1200 },
    style: { cursor: "pointer" },
    data: {
      label: "POLÍTICA DOCENTE",
      role: "secondary",
      title: "Juan Méndez Olave",
      content: `
  ● Coordinación de las oficinas de Evaluación Docente, Desarrollo Profesional Docente y ADECO.
  ● Monitoreo y seguimiento de los planes de desarrollo profesional (PDP) para el mejoramiento continuo en los establecimientos.
  ● Asesoría, seguimiento y evaluación de los proyectos ADECO, nivel comunal coordinación de los procesos de la carrera docente.
      `,
    },
  },

  {
    id: "23",
    type: "SNode",
    position: { x: 500, y: 1300 },
    style: { cursor: "pointer" },
    data: {
      label: "EDUCACIÓN PARVULARIA",
      role: "secondary",
      title: "María Angélica Moya",
      content: `
  ● Coordinar los procesos de asesoría, monitoreo y seguimiento de la implementación del currículo y desarrollo profesional continuo de la Educadoras de Párvulos, de acuerdo a los referentes normativos, en los niveles NT1 y NT2 de Educación Parvularia y Modalidad de Lenguaje TEL.
      `,
    },
  },
  {
    id: "24",
    type: "SNode",
    position: { x: 500, y: 1400 },
    style: { cursor: "pointer" },
    data: {
      label: "EPJAS Y MICROCENTROS",
      role: "secondary",
      title: "Luis Castillo",
      content: `
● Encargado de los procesos de asesorías, monitoreo y seguimiento de los procesos administrativos, pedagógicos y organizacionales de los microcentros y de los establecimientos EPJAS.
● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
    `,
    },
  },
  {
    id: "25",
    type: "SNode",
    position: { x: 500, y: 1500 },
    style: { cursor: "pointer" },
    data: {
      label: "P.I.E.",
      role: "secondary",
      title: "Marcela Tapia",
      content: `
● Encargada de los procesos de asesorías, monitoreo y seguimiento de la aplicación de las estrategias PIE, en consonancia con lo dispuesto en la normativa, para dar respuesta a los ejes de gestión operacional PIE, trabajo colaborativo de los equipos de aula y atención a la diversidad.
● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
    `,
    },
  },
  {
    id: "26",
    type: "SNode",
    position: { x: 500, y: 1600 },
    style: { cursor: "pointer" },
    data: {
      label: "PME-SEP",
      role: "secondary",
      title: "Edith Arroyo",
      content: `
  ● Brindar apoyo técnico pedagógico y administrar los recursos financieros percibidos por la subvención a los Establecimientos Educacionales municipalizados de la comuna para mejorar la calidad y equidad de la educación en los establecimientos que atienden estudiantes, cuyos resultados académicos se pueden ver afectados por sus condiciones socioeconómicas.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
      `,
    },
  },

  {
    id: "27",
    type: "SNode",
    position: { x: 500, y: 1700 },
    style: { cursor: "pointer" },
    data: {
      label: "EXTRAESCOLAR E INNOVACIÓN",
      role: "secondary",
      title: "Walter Belmar",
      content: `
  ● Extraescolar: Encargado de la coordinación de las actividades extraescolares deportivas y artístico - culturales emanadas del Mineduc y aquellas correspondientes a iniciativas locales.
  ● Innovación Tecnológica: Brinda apoyo en los ejes de soporte tecnológico y apoyo en la adopción e implementación de innovaciones tecnológicas TICs, que emprenden las unidades educativas.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
      `,
    },
  },
  {
    id: "28",
    type: "SNode",
    position: { x: 500, y: 1800 },
    style: { cursor: "pointer" },
    data: {
      label: "REDES Y ACOMPAÑAMIENTO",
      role: "secondary",
      title: "María Isabel Domínguez",
      content: `
● Coordinación de las redes de mejoramiento emanadas de la sección.
● Coordinación, implementación, monitoreo y seguimiento del Plan de acompañamiento focalizado a los establecimientos que lo requieran según necesidades.
    `,
    },
  },
  {
    id: "29",
    type: "SNode",
    position: { x: 500, y: 1900 },
    style: { cursor: "pointer" },
    data: {
      label: "EDUCACIÓN MEDIO AMBIENTAL",
      role: "secondary",
      title: "Claudia Parra",
      content: `
● Desarrollar un trabajo colaborativo con el municipio y los establecimientos educacionales que permita ejecutar iniciativas destinadas a la sensibilización, al alineamiento curricular y al desarrollo de acciones efectivas que promuevan una formación en ciudadanía de los estudiantes para el cuidado del medio ambiente.
● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.`,
    },
  },
  // 🟦 SECCIÓN SOCIAL
  {
    id: "30",
    type: "PNode",
    position: { x: 900, y: 1100 },
    style: { cursor: "pointer" },
    data: {
      label: "SECCIÓN SOCIAL",
      role: "principal",
      title: "Tatiana Sánchez",
      content: `
  ● Brindar apoyo integral a los estudiantes, apoderados y funcionarios, de los Establecimientos Municipalizados de la Comuna de Parral a través de los diversos programas que son ejecutados desde la sección social.
  ● Coordinar y apoyar a los establecimientos educacionales, creando condiciones que favorezcan el bienestar socioemocional de toda la comunidad educativa y con ello mejorar las condiciones de aprendizaje.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.`,
    },
  },
  // 🔽 Nodos secundarios bajo SECCIÓN SOCIAL
  {
    id: "31",
    type: "SNode",
    position: { x: 900, y: 1200 },
    style: { cursor: "pointer" },
    data: {
      label: "PROGRAMA H.P.V.",
      role: "secondary",
      title: "Silvia Soto / Ana María Hernández",
      content: `
  ● El Programa acompaña, apoya y asesora con metodologías basadas en la promoción y prevención en salud mental.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.`,
    },
  },
  {
    id: "32",
    type: "SNode",
    position: { x: 900, y: 1300 },
    style: { cursor: "pointer" },
    data: {
      label: "PROGRAMA 4 A 7",
      role: "secondary",
      title: "Marcia Vásquez",
      content: `
  ● Entrega un lugar protegido, mientras sus madres o mujeres responsables directas de su cuidado se encuentran trabajando, buscando un trabajo, nivelando estudios o capacitándose para una pronta inserción laboral. Se desarrolla en escuela Luis Armando Gómez y está abierto a toda la comunidad.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.`,
    },
  },
  {
    id: "33",
    type: "SNode",
    position: { x: 900, y: 1400 },
    style: { cursor: "pointer" },
    data: {
      label: "CONVIVENCIA ESCOLAR",
      role: "secondary",
      title: "MARCELO MORALES",
      content: `● Presente en todos los establecimientos educacionales, con un coordinador comunal y con apoyo jurídico desde el DAEM, con el objetivo de generar un ambiente cordial, de respeto y buen compartir entre los miembros de las diferentes unidades educativas.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.`,
    },
  },
  {
    id: "34",
    type: "SNode",
    position: { x: 900, y: 1500 },
    style: { cursor: "pointer" },
    data: {
      label: "PRO-RETENCIÓN",
      role: "secondary",
      title: "EDUARDO DESPOUSE",
      content: `● Subvención que llega a los sostenedores para que desarrollen acciones en post de lograr retener a sus alumnos en el sistema escolar.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.`,
    },
  },

  {
    id: "35",
    type: "SNode",
    position: { x: 900, y: 1600 },
    style: { cursor: "pointer" },
    data: {
      label: "SISTEMA DE ADMISIÓN ESCOLAR",
      role: "secondary",
      title: "MARCIA VÁSQUEZ",
      content: `● Sistema de admisión escolar, con postulación online para todos los cursos.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.`,
    },
  },
  {
    id: "36",
    type: "SNode",
    position: { x: 900, y: 1700 },
    style: { cursor: "pointer" },
    data: {
      label: "PROGRAMA RESIDENCIA FAMILIAR",
      role: "secondary",
      title: "PROGRAMA RESIDENCIA FAMILIAR: SILVIA SOTO",
      content: `● Ofrece una alternativa de vivienda estudiantil a aquellos alumnos de escasos recursos desde 7º año Básico a Cuarto de Enseñanza Media, preferentemente de sectores rurales, que deseen continuar sus estudios, y en cuyos lugares de residencia no existan establecimientos educacionales, con oferta completa hasta alcanzar los 12 años de escolaridad.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.`,
    },
  },

  {
    id: "37",
    type: "SNode",
    position: { x: 900, y: 1800 },
    style: { cursor: "pointer" },
    data: {
      label: "PROGRAMA SALUD ESTUDIANTE",
      role: "secondary",
      title: "JULISSA LEYTON",
      content: `
  ● Este es un programa de la JUNAEB y las prestaciones se focalizan de la siguiente forma:
  ● Oftalmología: Alumnos pesquisados en Pre Kínder, 1ero y 6to básico.
  ● Otorrino: Alumnos pesquisados en Pre Kínder, Kínder y 1ero básico.
  ● Columna: Alumnos pesquisados en 7o básico.
      `,
    },
  },
  {
    id: "38",
    type: "SNode",
    position: { x: 900, y: 1900 },
    style: { cursor: "pointer" },
    data: {
      label: "PROGRAMA ALIMENTACIÓN ESCOLAR",
      role: "secondary",
      title: "MARCELO MORALES",
      content: `
  ● El Programa de Alimentación Escolar (PAE), entrega durante el año y a nivel nacional, productos alimenticios a estudiantes en condiciones de desventaja social, económica, psicológica o biológica; que cursen educación parvularia, básica, media o de adultos en Establecimientos Educacionales Municipales, dependiente de Servicios Locales (SLEP) o Particulares Subvencionados adscritos al programa; aportando a los requerimientos nutricionales de cada etapa y facilitando la incorporación y permanencia en el sistema educacional.
  ● El beneficio lo reciben estudiantes pertenecientes al 60% de las familias más vulnerables o con mayor desventaja socioeconómica.
  ● Además, el programa beneficia a estudiantes diagnosticados con enfermedad celiaca, por medio de la entrega de una canasta con alimentos libres de gluten.
  ● El servicio cubre las actividades curriculares y extracurriculares que se desarrollan durante el año académico y en vacaciones de invierno y/o verano.
      `,
    },
  },
  {
    id: "39",
    type: "SNode",
    position: { x: 900, y: 2000 },
    style: { cursor: "pointer" },
    data: {
      label: "ASISTENCIA Y REVINCULACIÓN",
      role: "secondary",
      title: "CLAUDIA GUTIÉRREZ",
      content: `
  ● El Programa tiene por objetivo promover la asistencia, permanencia y revinculación de niños, niñas, jóvenes y personas adultas con alto ausentismo y trayectorias educativas interrumpidas, desde una estrategia de coordinación territorial e intersectorial.
  ● Estos equipos acompañan y orientan a las comunidades educativas en el despliegue de diversas acciones, articulándose con las mismas comunidades, otras instituciones públicas y organizaciones sociales para el desarrollo y ejecución de estrategias directas.
      `,
    },
  },

  // 🟨 SECCIÓN FINANZAS
  {
    id: "40",
    type: "PNode",
    position: { x: 1300, y: 1100 },
    style: { cursor: "pointer" },
    data: {
      label: "SECCIÓN FINANZAS",
      role: "principal",
      title: "KARINA HERNÁNDEZ",
      content: `
  ● Procurar la óptima provisión, asignación, utilización y mantención de los recursos humanos, económicos, financieros y materiales, con que pueda contar el DAEM para su funcionamiento.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
      `,
    },
  },

  // 🔽 Nodos secundarios bajo SECCIÓN FINANZAS
  {
    id: "41",
    type: "SNode",
    style: { cursor: "pointer" },
    position: { x: 1300, y: 1200 },
    data: {
      label: "CONTABILIDAD",
      role: "secondary",
      title: "MARÍA EUGENIA VÁSQUEZ AGUILERAZ",
      content:
        "● Encargada de registrar todos los eventos contables de acuerdo a la norma de la Contabilidad Nacional y las instrucciones de la Contraloría General de la República y entregar información económica, financiera y presupuestaria de cada una de las entidades que lo conforman, teniendo por objeto mostrar la imagen fiel del patrimonio, la situación financiera y los estados de resultados.",
    },
  },
  {
    id: "42",
    type: "SNode",
    style: { cursor: "pointer" },
    position: { x: 1300, y: 1300 },
    data: {
      label: "PRESUPUESTO",
      role: "secondary",
      title: "KARINA HERNÁNDEZ ORTEGA",
      content: `
  ● Encargada de la realización del presupuesto DAEM, monitorear la ejecución e implementación del presupuesto y realizar las modificaciones presupuestarias, según la normativa vigente.
      `,
    },
  },
  {
    id: "43",
    type: "SNode",
    position: { x: 1300, y: 1400 },
    style: { cursor: "pointer" },
    data: {
      label: "ADQUISICIONES",
      role: "secondary",
      title: "Alejandro Valdez",
      content: `
  ● Realizar los procesos de compras y contrataciones públicas de los bienes y servicios que solicitan los diferentes estamentos adscritos al DAEM Parral y en cumplimiento de la normativa Legal, Ley 19.886.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
  `,
    },
  },
  {
    id: "44",
    type: "SNode",
    position: { x: 1300, y: 1500 },
    style: { cursor: "pointer" },
    data: {
      label: "INVENTARIO",
      role: "secondary",
      title: "Luis Álvarez Silva",
      content: `
  ● Oficina encargada de registrar todos los bienes muebles adquiridos por los establecimientos Educacionales y Jardines Infantiles VTF y controlar las entradas y salidas de bienes desde la bodega del DAEM.
  `,
    },
  },
  {
    id: "45",
    type: "SNode",
    position: { x: 1300, y: 1600 },
    style: { cursor: "pointer" },
    data: {
      label: "FAEP",
      role: "secondary",
      title: "Marjorie Parada",
      content: `
  ● Este fondo de Apoyo a la Educación Pública Municipal, asigna recursos para ser utilizados en fines educacionales, principalmente enfocados en el proceso de saneamiento financiero del servicio educacional y fortalecimiento de la calidad de Educación Municipal.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
  `,
    },
  },

  {
    id: "46",
    type: "SNode",
    position: { x: 1300, y: 1700 },
    style: { cursor: "pointer" },
    data: {
      label: "RENDICIONES",
      role: "secondary",
      title: "",
      content:
        "● Encargada de realizar y presentar las distintas rendiciones a la Secreduc y a la Supereduc.",
    },
  },

  // 🟫 SECCIÓN INFRAESTRUCTURA Y REC. OFICIAL
  {
    id: "47",
    type: "PNode",
    position: { x: 1700, y: 1100 },
    style: { cursor: "pointer" },
    data: {
      label: "INFRAESTRUCTURA Y REC. OFICIAL",
      role: "principal",
      title: "Camilo Fuentes / Jhon Flores",
      content: `
  ● Regularizar y normalizar los establecimientos educacionales administrados por el Departamento de Administración de Educación Municipal de Parral.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
  `
    }
  },
  

  // 🔽 Nodos secundarios bajo esta sección
  {
    id: "48",
    type: "SNode",
    position: { x: 1700, y: 1200 },
    style: { cursor: "pointer" },
    data: {
      label: "SERVICIOS GENERALES",
      role: "secondary",
      title: "Camilo Fuentes",
      content: `
  ● Ejecutar reparaciones y trabajos de obras menores en los Establecimientos Educacionales.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
  `
    }
  },
  
  {
    id: "49",
    type: "SNode",
    position: { x: 1700, y: 1300 },
    style: { cursor: "pointer" },
    data: {
      label: "PROYECTOS",
      role: "secondary",
      title: "John Flores",
      content: `
  ● Elaborar una batería de proyectos que permitan mejorar, actualizar y/o reparar las condiciones de infraestructuras de los Establecimientos Educacionales.
  ● Elaborar proyectos de distinta índole (Medio ambiente, energía, cultura, agrícola, técnico profesional, etc.) y fomentar la participación de los Establecimientos Educacionales en los distintos fondos concursables que existen, tanto de entes públicos como de privados.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
  `
    }
  },
  {
    id: "50",
    type: "SNode",
    position: { x: 1700, y: 1400 },
    style: { cursor: "pointer" },
    data: {
      label: "RECONOCIMIENTO OFICIAL",
      role: "secondary",
      title: "John Flores",
      content: `
  ● Obtener y/o actualizar el Reconocimiento Oficial de los Establecimientos Educacionales (Escuelas y Jardines Infantiles) administrados por el Depto. Administración de Educación Municipal de Parral, de acuerdo a lo establecido a la Ley General de Educación y Ley N° 20.845 según corresponda.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
  `
    }
  },
  {
    id: "51",
    type: "SNode",
    position: { x: 1700, y: 1500 },
    style: { cursor: "pointer" },
    data: {
      label: "SEGURIDAD ESCOLAR Y LABORAL",
      role: "secondary",
      title: "Camilo Fuentes",
      content: `
  ● Mantener las condiciones de infraestructura y seguridad en condiciones óptimas para el buen funcionamiento de los Establecimientos Educacionales.
  ● Asegurar el cumplimiento de la Ley N° 16.744 sobre accidentes y enfermedades laborales y todas las normas que emanen de la misma, del Código del Trabajo y otras normas que atingen a la Seguridad Laboral en los Establecimientos Educacionales.
  ● Asegurar el cumplimiento y aplicación del Plan Integral de Seguridad Escolar en los Establecimientos Educacionales.
  ● Aprobado mediante Decreto Exento N° 13.413 del 24 de diciembre de 2015; se basa en la distribución jerárquica de unidades que dispone el artículo 15 de la Ley Orgánica Constitucional de Municipalidades y, en este sentido, organiza el Departamento en Secciones y luego en Oficinas, según la naturaleza de las tareas que realiza cada uno de sus funcionarios.
  `
    }
  }
  
];

export default initialNodes;
