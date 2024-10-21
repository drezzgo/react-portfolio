import project1 from "../assets/projects/simplexUD.png";
import project2 from "../assets/projects/sogamosoAqua.png";
import project3 from "../assets/projects/Portfolio.png";

export const HERO_CONTENT = `I am a passionate student of Data Systematization at the Francisco José de Caldas University. My focus is on web development and database management, with experience in agile methodologies and projects that seek to optimize processes through efficient solutions. With knowledge in HTML, CSS, JavaScript, and frameworks like Tailwind, my goal is to continue growing in the full stack field while applying my skills to solve real problems. Currently, I am finishing my studies and open to new job opportunities where I can contribute and continue learning.`;

export const HERO_CONTENT_ES = `Soy estudiante de Sistematización de Datos en la Universidad Francisco José de Caldas. Mi enfoque está en el desarrollo web y la gestión de bases de datos, con experiencia en metodologías ágiles y proyectos que buscan optimizar procesos a través de soluciones eficientes. Con conocimientos en HTML, CSS, JavaScript, y frameworks como Tailwind, mi objetivo es seguir creciendo en el ámbito full stack mientras aplico mis habilidades para resolver problemas reales. Actualmente, estoy finalizando mis estudios y abierto a nuevas oportunidades laborales donde pueda aportar y seguir aprendiendo.`;

export const ABOUT_ME_PART1 = `As a final-year student in Data Systematization at the Francisco José de Caldas University, I have built a strong foundation in web development, database management, and agile methodologies. My academic journey has allowed me to work on impactful projects that optimize processes and improve operational efficiency. I am passionate about applying technology to solve real-world problems and I continuously seek opportunities to expand my full stack knowledge. My experience ranges from building integrated data management systems for healthcare institutions to handling operational tasks in fast-paced environments like Codere. I possess technical skills in HTML, CSS, JavaScript, MySQL, and frameworks like Tailwind, and I am constantly improving my coding abilities.`;

export const ABOUT_ME_PART2 = `I am also a team player with strong leadership experience, having served in various leadership roles within the Scout Movement. This has allowed me to develop excellent communication, problem-solving, and time-management skills. I am currently looking for opportunities where I can leverage my skills in development and data management to make a meaningful contribution while continuing to grow as a professional.`;

export const ABOUT_ME_PART1_ES = `Soy un estudiante de último año en Sistematización de Datos en la Universidad Francisco José de Caldas, donde he desarrollado una sólida base en el desarrollo web, la gestión de bases de datos y las metodologías ágiles. Mi trayectoria académica me ha permitido trabajar en proyectos que optimizan procesos y mejoran la eficiencia operativa. Me apasiona aplicar la tecnología para resolver problemas del mundo real y siempre busco oportunidades para ampliar mis conocimientos en el campo full stack. Mi experiencia abarca desde la creación de sistemas integrados de gestión de datos para instituciones de salud hasta la gestión de operaciones en entornos dinámicos como Codere. Poseo habilidades técnicas en HTML, CSS, JavaScript, MySQL y frameworks como Tailwind, y me esfuerzo constantemente por mejorar mis habilidades de programación.`;

export const ABOUT_ME_PART2_ES = `También soy un jugador de equipo con experiencia en liderazgo, habiendo desempeñado varios roles de liderazgo en el Movimiento Scout, lo que me ha permitido desarrollar excelentes habilidades de comunicación, resolución de problemas y gestión del tiempo. Actualmente, estoy buscando oportunidades donde pueda aprovechar mis habilidades en desarrollo y gestión de datos para hacer una contribución significativa mientras continúo creciendo como profesional.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Operational Manager",
    company: "Venecia Sport",
    description: `Specialized in the operational management of a sports betting shop, focusing on store administration, customer service, and proper implementation of recharge and betting validation processes. Coordinated store opening and closing operations, managed inventory, and handled internal platforms to ensure optimal customer experience.`,
    technologies: ["Excel", "Power Bi", "Microsoft Office"]
  },
  {
    year: "2023",
    role: "Data Management System Developer",
    company: "Francisco José de Caldas University (Subject project)",
    description: `Developed an integrated data management system for a Health Promoting Entity (EPS) to optimize clinical and administrative information management. The project involved data collection, processing, and analysis to improve operational efficiency and support decision-making in healthcare and EPS management.`,
    technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
  },
  {
    year: "2014 - Present",
    role: "Rover Scout Member",
    company: "Scout Movement",
    description: `Acted as a leader in the Scout Movement, serving as Patrol Guide, Community President, and Clan President. Represented Colombia in national and international events, fostering global collaboration. Coordinated the "CCL for Dummies" project, ensuring active and informed participation among members.`,
    technologies: ["Leadership", "Project Management", "Event Organization"]
  }
];

export const EXPERIENCES_ES = [
  {
    year: "2023 - 2024",
    role: "Gestor Operativo",
    company: "Venecia Sport",
    description: `Especializado en la gestión operativa de una casa de apuestas deportivas, enfocándome en la administración del establecimiento, atención al cliente y correcta implementación de los procesos de recarga y validación de apuestas. Coordinación de la apertura y cierre del establecimiento, gestión de inventarios y manejo de plataformas internas para asegurar una experiencia óptima del cliente.`,
    technologies: ["Excel", "Power Bi"]
  },
  {
    year: "2023",
    role: "Desarrollador de Sistema de Gestión de Datos",
    company: "Universidad Francisco José de Caldas (Projecto de materia)",
    description: `Desarrollo de un sistema integral de gestión de datos para una Entidad Promotora de Salud (EPS), con el objetivo de optimizar la administración de la información clínica y administrativa. El proyecto incluyó la recopilación, procesamiento y análisis de datos para mejorar la eficiencia operativa y apoyar la toma de decisiones en la atención médica y la gestión de la EPS.`,
    technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
  },
  {
    year: "2014 - Presente",
    role: "Miembro Rover Scout",
    company: "Movimiento Scout",
    description: `Desempeñé roles de liderazgo en el Movimiento Scout, sirviendo como Guía de Patrulla, Presidente de Comunidad y Presidente de Clan. Representé a Colombia en eventos nacionales e internacionales, promoviendo la colaboración global. Coordiné el proyecto "CCL para Dummies", garantizando una participación activa e informada de los miembros.`,
    technologies: ["Liderazgo", "Gestión de Proyectos", "Organización de Eventos"]
  }
];

export const PROJECTS = [
  {
    title: "SimplexUD App",
    image: project1,
    description:
      "A web application that solves your linear programming problems step by step using the simplex two-phase or graphic method until the answer is given.",
    technologies: ["HTML", "TailwindCSS", "CSS", "JavaScript"],
  },
  {
    title: "Sogamoso Aqua Website",
    image: project2,
    description:
      "Website that collects the hydrographic analysis of Sogamoso, with the main objective of this project is to provide a comprehensive view of the hydrology of the region, including data on flows, water quality, hydraulic infrastructure and more.",
    technologies: ["HTML", "TailwindCSS","CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS"],
  }
];

export const PROJECTS_ES = [
  {
    title: "SimplexUD App",
    image: project1,
    description:
      "Una aplicacion web que soluciona paso a paso tus problemas de programacion lineal mediante el metodo simplex dos fases o grafico hasta dar la respuesta.",
    technologies: ["HTML", "TailwindCSS", "CSS", "JavaScript"],
  },
  {
    title: "Sitio web Sogamoso Aqua",
    image: project2,
    description:
      "Pagina web que recoge el análisis hidrográfico de Sogamoso, con el objetivo principal de este proyecto es proporcionar una visión integral de la hidrología de la región, incluyendo datos sobre caudales, calidad del agua, infraestructura hidráulica y más.",
    technologies: ["HTML", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Portafolio",
    image: project3,
    description:
      "Un sitio web de portafolio personal que muestra proyectos, habilidades e información de contacto.",
    technologies: ["React", "TailwindCSS"],
  }
];

export const STUDIES = [
  {
    year: "2021 - 2024",
    degree: "technology in data systematization",
    institution: "Francisco José de Caldas University",
    description: "Focused on web development and database management, with a focus on agile methodologies and projects that seek to optimize processes through efficient solutions.",
  },
  {
    year: "2021 - Present",
    degree: "telematics engineering",
    institution: "Francisco José de Caldas University",
    description: "Completed a comprehensive study of web development, database management, and agile methodologies, with a focus on advanced technologies and projects that require in-depth knowledge and expertise.",
  }
];

export const STUDIES_EN = [
  {
    year: "2021 - 2024",
    degree: "Tecnologia en sistematización de datos",
    institution: "Universidad Distrital Francisco José de Caldas",
    description: "Focused on web development and database management, with a focus on agile methodologies and projects that seek to optimize processes through efficient solutions.",
  },
  {
    year: "2021 - Present",
    degree: "Ingeneria Telematica",
    institution: "Universidad Distrital Francisco José de Caldas",
    description: "Completed a comprehensive study of web development, database management, and agile methodologies, with a focus on advanced technologies and projects that require in-depth knowledge and expertise.",
  }
];


export const CONTACT = {
  address: "Bogota D.C, Calle 57 B Sur #64-03",
  phoneNo: "+57 319 267 1998",
  email: "agongoraramirez@gmail.com",
};
