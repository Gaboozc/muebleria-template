// ============================================================
// content.js — Contenido editable de la Muebleria
// ============================================================

export const content = {

  business: {
    name:        "{{Nombre de la Muebleria}}",
    tagline:     "{{Muebles que cuentan tu historia}}",
    description: "{{Muebleria y taller de diseno con mas de X anos creando piezas unicas para el hogar. Fabricacion propia, materiales de primera calidad y entrega a domicilio.}}",
    founded:     "{{2005}}",
    phone:       "{{+52 55 0000 0000}}",
    whatsapp:    "{{5215500000000}}",
    email:       "{{hola@tumuebleria.com}}",
    address:     "{{Calle y numero, Colonia}}",
    city:        "{{Ciudad, Estado}}",
    showroom:    "{{Showroom abierto de Lunes a Sabado}}",
    hours: {
      weekdays: "Lunes a Viernes: 10:00 - 19:00",
      saturday: "Sabado: 10:00 - 17:00",
      sunday:   "Domingo: Cerrado",
    },
    social: {
      instagram: "{{https://instagram.com/tumuebleria}}",
      facebook:  "{{https://facebook.com/tumuebleria}}",
      pinterest: "{{https://pinterest.com/tumuebleria}}",
    },
    // Diferenciadores clave
    badges: [
      "Fabricacion propia",
      "Entrega a domicilio",
      "Garantia 2 anos",
      "Diseno personalizado",
    ],
  },

  // Hero
  hero: {
    eyebrow:    "{{Taller & Showroom en {{Ciudad}}}}",
    headline:   "{{El Mueble\nque Imaginaste}}",
    subheadline:"{{Fabricamos piezas unicas a medida y seleccionamos colecciones de autor para transformar tu hogar. Desde la sala hasta el comedor.}}",
    cta: { primary: "Ver Catalogo", secondary: "Cotizar Proyecto" },
    image:      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=85",
    stats: [
      { value: "{{+800}}", label: "Proyectos entregados" },
      { value: "{{20+}}",  label: "Anos de trayectoria"  },
      { value: "{{48}}",   label: "Materiales disponibles" },
    ],
  },

  // Ambientes — para la seccion de inspiracion
  ambientes: [
    {
      id: 1,
      title: "Sala de Estar",
      description: "{{Sofas, sillones, mesas de centro y libreros que convierten tu sala en el corazon del hogar.}}",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
      room: "Sala",
    },
    {
      id: 2,
      title: "Comedor",
      description: "{{Mesas extensibles, sillas tapizadas y vitrinas para los momentos mas especiales en familia.}}",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80",
      room: "Comedor",
    },
    {
      id: 3,
      title: "Recamara",
      description: "{{Camas tapizadas, cabeceras de diseno, buroes y armarios a medida para el descanso que mereces.}}",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
      room: "Recamara",
    },
  ],

  // Catalogo de productos
  catalog: [
    {
      id: 1,
      name: "{{Sofa Modular Loft}}",
      category: "Sala",
      material: "Lino belga",
      finish: "Natural / Gris / Terracota",
      dimensions: "260 x 90 x 75 cm",
      price: "${{18,500}}",
      priceNote: "Modulo adicional disponible",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
      featured: true,
      new: false,
      custom: true,
    },
    {
      id: 2,
      name: "{{Mesa de Comedor Nogal}}",
      category: "Comedor",
      material: "Madera de nogal maciza",
      finish: "Natural mate / Oscuro",
      dimensions: "200 x 90 x 76 cm",
      price: "${{22,000}}",
      priceNote: "Extensible hasta 280 cm",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80",
      featured: true,
      new: false,
      custom: false,
    },
    {
      id: 3,
      name: "{{Cama Plataforma Oslo}}",
      category: "Recamara",
      material: "MDF lacado + cabecera tapizada",
      finish: "Blanco / Arena / Carbon",
      dimensions: "King 200 x 200 cm",
      price: "${{14,800}}",
      priceNote: "Queen y Matrimonial disponibles",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      featured: true,
      new: true,
      custom: true,
    },
    {
      id: 4,
      name: "{{Librero Modular Estudio}}",
      category: "Estudio",
      material: "Madera de pino + acero",
      finish: "Natural / Negro mate",
      dimensions: "200 x 40 x 200 cm",
      price: "${{9,500}}",
      priceNote: "Configurable por modulos",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=700&q=80",
      featured: false,
      new: false,
      custom: true,
    },
    {
      id: 5,
      name: "{{Sillon Lectura Arco}}",
      category: "Sala",
      material: "Estructura de roble + felpa",
      finish: "Musgo / Ocre / Borgona",
      dimensions: "80 x 85 x 90 cm",
      price: "${{7,200}}",
      priceNote: "Con o sin ottoman",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&q=80",
      featured: false,
      new: true,
      custom: false,
    },
    {
      id: 6,
      name: "{{Buro Minimalista Duo}}",
      category: "Recamara",
      material: "Roble americano",
      finish: "Natural / Miel / Oscuro",
      dimensions: "50 x 40 x 55 cm",
      price: "${{3,800}}",
      priceNote: "Precio por unidad",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
      featured: false,
      new: false,
      custom: false,
    },
    {
      id: 7,
      name: "{{Mesa de Centro Travertino}}",
      category: "Sala",
      material: "Travertino natural + acero",
      finish: "Travertino beige / Carbon",
      dimensions: "120 x 60 x 38 cm",
      price: "${{12,500}}",
      priceNote: "Piedra natural unica",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=700&q=80",
      featured: false,
      new: true,
      custom: false,
    },
    {
      id: 8,
      name: "{{Comoda Japonesa Shoji}}",
      category: "Recamara",
      material: "Fresno natural + tela shoji",
      finish: "Natural / Blanco",
      dimensions: "120 x 45 x 80 cm",
      price: "${{8,900}}",
      priceNote: "6 cajones amplios",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      featured: false,
      new: false,
      custom: false,
    },
  ],

  // Categorias / habitaciones para filtros
  categories: ["Todos", "Sala", "Comedor", "Recamara", "Estudio"],

  // Materiales disponibles
  materials: [
    { name: "Nogal macizo",  desc: "Veta unica, durabilidad excepcional" },
    { name: "Roble americano", desc: "Textura abierta, tonos calidos" },
    { name: "Pino escandinavo", desc: "Ligero, ideal para estilos nordicos" },
    { name: "MDF lacado",    desc: "Acabados perfectos, colores a medida" },
    { name: "Tapizados",     desc: "Lino, terciopelo, cuero, bouclé" },
    { name: "Piedra natural", desc: "Travertino, marmol, cuarzo" },
  ],

  // Servicios
  services: [
    {
      id: 1,
      title: "Diseno de Interiores",
      description: "{{Trabajamos con tu arquitecto o de manera independiente para disenar espacios coherentes. Desde la seleccion de muebles hasta la propuesta de color y materiales.}}",
      price: "Desde ${{3,500}}",
      priceNote: "Precio por habitacion",
      includes: ["Plano de distribucion", "Render 3D fotorrealista", "Moodboard de materiales", "Supervision de instalacion"],
    },
    {
      id: 2,
      title: "Fabricacion a Medida",
      description: "{{Diseña el mueble exacto que necesitas. Dimensiones, materiales, acabados y funciones especiales. Nuestro taller lo fabrica con precision artesanal.}}",
      price: "Cotizacion",
      priceNote: "Segun materiales y complejidad",
      includes: ["Consulta de diseno incluida", "Plano tecnico previo a la fabricacion", "Tiempo de entrega: 4-8 semanas", "Garantia de 2 anos en taller propio"],
    },
    {
      id: 3,
      title: "Entrega e Instalacion",
      description: "{{Entregamos e instalamos en tu domicilio. Nuestro equipo verifica cada pieza y la instala correctamente para que solo te preocupes por disfrutarla.}}",
      price: "{{$800}}",
      priceNote: "Ciudad y zona metropolitana",
      includes: ["Empaque protegido", "Equipo especializado", "Instalacion en sitio", "Retiro de empaque"],
    },
  ],

  // Nosotros / Historia
  about: {
    headline: "{{Mas de X Anos\nCreando Espacios}}",
    body:     "{{Somos un taller y muebleria con alma artesanal. Cada pieza que fabricamos pasa por manos expertas que cuidan cada detalle, cada union, cada terminado. Creemos que los muebles no son simples objetos — son el marco donde vive tu historia.}}",
    values: [
      { icon: "hammer",    title: "Fabricacion Propia",    desc: "{{Todo lo que ves en nuestro showroom lo fabricamos en nuestro taller. Sin intermediarios, sin sorpresas.}}" },
      { icon: "leaf",      title: "Madera Responsable",    desc: "{{Trabajamos solo con proveedores certificados de madera de bosques gestionados de forma sostenible.}}" },
      { icon: "shield",    title: "Garantia de 2 Anos",    desc: "{{Todos nuestros muebles tienen garantia de fabricacion por 2 anos contra defectos de estructura y acabado.}}" },
      { icon: "users",     title: "Atencion Personalizada", desc: "{{Un asesor dedicado te acompana desde la primera visita hasta la entrega final. Sin presiones, sin citas.}}" },
    ],
  },

  // Testimonios
  testimonials: [
    {
      id: 1,
      name: "{{Daniela y Carlos R.}}",
      role: "Cliente de proyecto completo",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      text: "{{Equipamos toda nuestra casa nueva con ellos. El servicio de diseno fue increible — el render se parecio 100% al resultado final. Cada mueble es exactamente lo que imaginamos.}}",
      room: "Proyecto completo",
    },
    {
      id: 2,
      name: "{{Alejandro M.}}",
      role: "Cliente recurrente",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      text: "{{Ya van tres piezas que les compro y cada una supera a la anterior. La mesa de comedor de nogal que me hicieron a medida es la pieza central de mi casa. Calidad impresionante.}}",
      room: "Comedor a medida",
    },
    {
      id: 3,
      name: "{{Sofia T.}}",
      role: "Disenadora de interiores",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      text: "{{Los recomiendo a todos mis clientes. Los tiempos de entrega son reales, la calidad es consistente y el equipo entiende el lenguaje del diseno. Son el proveedor mas confiable que he encontrado.}}",
      room: "Proyectos de interiorismo",
    },
  ],

  // Cotizacion / contacto
  quote: {
    headline:        "{{Cotiza tu Proyecto}}",
    subheadline:     "{{Cuéntanos qué habitación quieres transformar, tu presupuesto aproximado y tus materiales favoritos. Respondemos con una propuesta en menos de 24 horas.}}",
    whatsappMessage: "Hola, me gustaria cotizar un proyecto de muebles. Podrian ayudarme?",
    cta:             "Cotizar por WhatsApp",
    note:            "{{Primera consulta sin costo. Visita al showroom siempre bienvenida.}}",
  },

  nav: {
    links: [
      { label: "Inicio",    href: "/"          },
      { label: "Catalogo",  href: "/catalogo"  },
      { label: "Servicios", href: "/servicios" },
      { label: "Nosotros",  href: "/nosotros"  },
      { label: "Contacto",  href: "/contacto"  },
    ],
    ctaText: "Cotizar Proyecto",
  },

  footer: {
    tagline:   "{{Muebles que permanecen.}}",
    copyright: `\u00a9 ${new Date().getFullYear()} {{Nombre de la Muebleria}}. Todos los derechos reservados.`,
    credit:    "Disenado por AlphaDev Studios",
    creditUrl: "https://alphadevstudios.com",
  },
}

export default content
