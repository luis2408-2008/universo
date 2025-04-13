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
    imageUrl: "https://images.nasa.gov/fileLibrary/nasa_images_gallery/hi_res/0301627.jpg",
    category: "Cosmología"
  },
  {
    title: "Teoría Inflacionaria",
    content: "Propone que el universo experimentó una expansión exponencial en sus primeros momentos, explicando su uniformidad a gran escala.",
    imageUrl: "https://stsci-opo.org/STScI-01GA6KKWG27HCQF5Z7C1RAPTT7.png",
    category: "Física Cuántica"
  },
  {
    title: "Teoría del Multiverso",
    content: "Sugiere la existencia de múltiples universos paralelos, cada uno con diferentes leyes físicas y constantes fundamentales.",
    imageUrl: "https://cdn.spacetelescope.org/archives/images/large/heic2017a.jpg",
    category: "Teoría de Cuerdas"
  }
];

export const conspiracies = [
  {
    title: "Hipótesis de la Simulación",
    content: "¿Y si toda nuestra realidad fuera una simulación computacional creada por una civilización avanzada? Exploramos esta controvertida teoría.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Mandelbrot_set_with_coloured_environment.png"
  },
  {
    title: "Intervención Extraterrestre",
    content: "Teorías que sugieren que civilizaciones alienígenas avanzadas pudieron haber influido en el desarrollo del universo o la vida en la Tierra.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/09/01/08/24/sombrero-galaxy-1635638_1280.jpg"
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
    thumbnailUrl: "https://img.youtube.com/vi/e1_EBjaaMc4/maxresdefault.jpg",
    duration: "11:23 min",
    category: "Cosmología"
  },
  {
    title: "¿Existe el Multiverso?",
    description: "Un análisis científico sobre la teoría del multiverso, sus implicaciones y las evidencias que podrían respaldarla.",
    videoId: "pGnOBGd_S-k",
    thumbnailUrl: "https://img.youtube.com/vi/pGnOBGd_S-k/maxresdefault.jpg",
    duration: "10:54 min",
    category: "Física Teórica"
  },
  {
    title: "Agujeros Negros Explicados",
    description: "Todo lo que necesitas saber sobre los agujeros negros: cómo se forman, sus características y los misterios que encierran.",
    videoId: "X5p-vZUmSdg",
    thumbnailUrl: "https://img.youtube.com/vi/X5p-vZUmSdg/maxresdefault.jpg",
    duration: "15:16 min",
    category: "Astrofísica"
  },
  {
    title: "La Materia Oscura",
    description: "Explorando el misterio de la materia oscura y cómo afecta a nuestra comprensión del universo.",
    videoId: "9W3RsaWuCuE",
    thumbnailUrl: "https://img.youtube.com/vi/9W3RsaWuCuE/maxresdefault.jpg",
    duration: "10:17 min",
    category: "Astrofísica"
  }
];

export const experts = [
  {
    name: "Dr. Carlos Ramírez",
    title: "Astrofísico, Universidad de Barcelona",
    quote: "La teoría de la relatividad general de Einstein nos ha proporcionado un marco increíblemente preciso para entender la estructura a gran escala del universo. Sin embargo, aún no hemos logrado reconciliarla con la mecánica cuántica, lo que sugiere que podría haber una teoría aún más fundamental por descubrir. Esta teoría unificada podría revolucionar nuestra comprensión sobre el origen del universo.",
    imageUrl: "https://cdn.pixabay.com/photo/2019/11/11/10/05/scientist-4617335_1280.jpg",
    tags: ["Relatividad", "Mecánica Cuántica"]
  },
  {
    name: "Dra. Elena Martínez",
    title: "Cosmóloga, Instituto de Astrofísica de Canarias",
    quote: "La materia oscura y la energía oscura representan el 95% del contenido del universo, pero aún desconocemos su naturaleza fundamental. Estas misteriosas componentes son quizás la pista más importante que tenemos sobre la estructura del cosmos y podrían proporcionarnos información crucial sobre sus orígenes. Los próximos experimentos y observatorios están diseñados específicamente para desentrañar estos misterios.",
    imageUrl: "https://cdn.pixabay.com/photo/2018/02/16/14/09/portrait-3157821_1280.jpg",
    tags: ["Materia Oscura", "Energía Oscura"]
  }
];
