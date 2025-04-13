// This file contains all text content in Spanish for the application

export const authTexts = {
  loginTitle: "El Origen del Universo",
  loginSubtitle: "Inicia sesión para explorar los secretos cósmicos",
  registerTitle: "El Origen del Universo",
  registerSubtitle: "Crea una cuenta para iniciar tu viaje cósmico",
  username: "Nombre de usuario",
  password: "Contraseña",
  confirmPassword: "Confirmar contraseña",
  loginButton: "Iniciar Sesión",
  registerButton: "Registrarse",
  noAccount: "¿No tienes una cuenta?",
  register: "Regístrate",
  hasAccount: "¿Ya tienes una cuenta?",
  login: "Inicia sesión",
  usernamePlaceholder: "Tu nombre de usuario",
  passwordPlaceholder: "Tu contraseña",
  confirmPasswordPlaceholder: "Confirma tu contraseña",
  formError: "Por favor, completa todos los campos correctamente",
  passwordsNoMatch: "Las contraseñas no coinciden",
  registerSuccess: "Registro exitoso",
  redirecting: "Redirigiendo al inicio de sesión...",
};

export const navLinks = [
  { id: "teorias", label: "Teorías Científicas" },
  { id: "conspiraciones", label: "Conspiraciones" },
  { id: "curiosidades", label: "Curiosidades" },
  { id: "videos", label: "Videos" },
  { id: "opiniones", label: "Opiniones de Expertos" }
];

export const homeTexts = {
  title: "El Origen del Universo",
  heroTitle: "Explora los misterios del Universo",
  heroSubtitle: "Descubre las teorías científicas, historias ocultas y curiosidades sobre el origen de todo lo que conocemos.",
  sections: {
    theories: "Teorías Científicas",
    conspiracies: "Conspiraciones y Historias Ocultas",
    facts: "Curiosidades Cósmicas",
    videos: "Vídeos Explicativos",
    experts: "Opiniones de Expertos",
    newsletter: "Mantente Informado"
  },
  newsletter: {
    subtitle: "Suscríbete a nuestro boletín para recibir las últimas teorías, descubrimientos y curiosidades sobre el origen del universo.",
    placeholder: "Tu correo electrónico",
    button: "Suscribirse"
  },
  footer: {
    slogan: "Explorando los misterios del cosmos.",
    copyright: "© 2023 El Origen del Universo. Todos los derechos reservados.",
    categories: {
      explore: "Explorar",
      resources: "Recursos",
      community: "Comunidad",
      legal: "Legal"
    },
    links: {
      resources: [
        "Libros Recomendados",
        "Enlaces Científicos",
        "Documentales",
        "Glosario Cósmico"
      ],
      community: [
        "Foro de Discusión",
        "Eventos",
        "Contribuir",
        "Preguntas Frecuentes"
      ],
      legal: [
        "Términos de Servicio",
        "Política de Privacidad",
        "Política de Cookies",
        "Contacto"
      ]
    }
  },
  userMenu: {
    profile: "Mi Perfil",
    settings: "Configuración",
    logout: "Cerrar Sesión"
  }
};

export const theories = [
  {
    title: "Teoría del Big Bang",
    content: "La teoría más aceptada actualmente que explica el origen del universo como una gran explosión hace aproximadamente 13.800 millones de años.",
    imageUrl: "https://images.unsplash.com/photo-1544616326-a69b32cab9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Cosmología"
  },
  {
    title: "Teoría Inflacionaria",
    content: "Propone que el universo experimentó una expansión exponencial en sus primeros momentos, explicando su uniformidad a gran escala.",
    imageUrl: "https://images.unsplash.com/photo-1566560073340-decc8d1f19b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Física Cuántica"
  },
  {
    title: "Teoría del Multiverso",
    content: "Sugiere la existencia de múltiples universos paralelos, cada uno con diferentes leyes físicas y constantes fundamentales.",
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0b3a51e5aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Teoría de Cuerdas"
  }
];

export const conspiracies = [
  {
    title: "Hipótesis de la Simulación",
    content: "¿Y si toda nuestra realidad fuera una simulación computacional creada por una civilización avanzada? Exploramos esta controvertida teoría.",
    imageUrl: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Intervención Extraterrestre",
    content: "Teorías que sugieren que civilizaciones alienígenas avanzadas pudieron haber influido en el desarrollo del universo o la vida en la Tierra.",
    imageUrl: "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

export const facts = [
  {
    title: "El Eco del Big Bang",
    content: "La radiación cósmica de fondo de microondas es el \"eco\" del Big Bang, detectable en cualquier dirección como una temperatura de aproximadamente 2.7 Kelvin.",
    icon: "star"
  },
  {
    title: "Vacío Cósmico",
    content: "El Vacío de Boötes es una región enormemente vacía del universo que mide 250 millones de años luz de diámetro y contiene muy pocas galaxias.",
    icon: "planet"
  },
  {
    title: "Materia Oscura",
    content: "Aproximadamente el 85% de la materia en el universo es invisible y no interactúa con la luz. Los científicos llaman a esta misteriosa sustancia \"materia oscura\".",
    icon: "bubble-chart"
  },
  {
    title: "Entrelazamiento Cuántico",
    content: "El entrelazamiento cuántico permite que dos partículas estén conectadas instantáneamente a través de grandes distancias, un fenómeno que Einstein llamó \"acción fantasmal a distancia\".",
    icon: "fire"
  },
  {
    title: "Relatividad del Tiempo",
    content: "Según la teoría de la relatividad de Einstein, el tiempo transcurre más lentamente en objetos en movimiento o bajo fuertes campos gravitatorios, fenómeno comprobado experimentalmente.",
    icon: "time"
  },
  {
    title: "Límite Observable",
    content: "El universo observable tiene un radio de aproximadamente 46.500 millones de años luz, pero el universo real podría ser mucho más grande o incluso infinito.",
    icon: "spaceship"
  }
];

export const videos = [
  {
    title: "El Big Bang Explicado",
    description: "Una explicación detallada sobre la teoría del Big Bang, sus evidencias y cómo se ha desarrollado a lo largo del tiempo.",
    videoId: "e1_EBjaaMc4",
    thumbnailUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: "11:23 min",
    category: "Cosmología"
  },
  {
    title: "¿Existe el Multiverso?",
    description: "Un análisis científico sobre la teoría del multiverso, sus implicaciones y las evidencias que podrían respaldarla.",
    videoId: "pGnOBGd_S-k",
    thumbnailUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: "10:54 min",
    category: "Física Teórica"
  },
  {
    title: "Agujeros Negros Explicados",
    description: "Todo lo que necesitas saber sobre los agujeros negros: cómo se forman, sus características y los misterios que encierran.",
    videoId: "X5p-vZUmSdg",
    thumbnailUrl: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: "15:16 min",
    category: "Astrofísica"
  },
  {
    title: "La Materia Oscura",
    description: "Explorando el misterio de la materia oscura y cómo afecta a nuestra comprensión del universo.",
    videoId: "9W3RsaWuCuE",
    thumbnailUrl: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: "10:17 min",
    category: "Astrofísica"
  }
];

export const experts = [
  {
    name: "Dr. Carlos Ramírez",
    title: "Astrofísico, Universidad de Barcelona",
    quote: "La teoría de la relatividad general de Einstein nos ha proporcionado un marco increíblemente preciso para entender la estructura a gran escala del universo. Sin embargo, aún no hemos logrado reconciliarla con la mecánica cuántica, lo que sugiere que podría haber una teoría aún más fundamental por descubrir. Esta teoría unificada podría revolucionar nuestra comprensión sobre el origen del universo.",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Relatividad", "Mecánica Cuántica"]
  },
  {
    name: "Dra. Elena Martínez",
    title: "Cosmóloga, Instituto de Astrofísica de Canarias",
    quote: "La materia oscura y la energía oscura representan el 95% del contenido del universo, pero aún desconocemos su naturaleza fundamental. Estas misteriosas componentes son quizás la pista más importante que tenemos sobre la estructura del cosmos y podrían proporcionarnos información crucial sobre sus orígenes. Los próximos experimentos y observatorios están diseñados específicamente para desentrañar estos misterios.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Materia Oscura", "Energía Oscura"]
  }
];
