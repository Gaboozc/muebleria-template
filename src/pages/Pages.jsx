// Paginas de la muebleria Warm Craft Studio
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Ruler, Hammer, Leaf, Shield, Users, Truck, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react"
import { content } from "../data/content"
import { pageTransition, staggerContainer, scaleIn, fadeInUp, fadeInLeft, fadeInRight, staggerSlow, viewportOnce } from "../styles/animations"
import { QuoteCTA } from "../components/sections/Sections"
import { SectionHeader } from "../components/layout/Layout"
import { Hero, Ambientes, CatalogPreview, Materials, Testimonials } from "../components/sections/Sections"

const roomColors = { Sala: "#6b4c36", Comedor: "#c4704f", Recamara: "#8a7f76", Estudio: "#1e1e1e" }
const valueIcons = { hammer: Hammer, leaf: Leaf, shield: Shield, users: Users }

// Banner reutilizable
const PageBanner = ({ eyebrow, title, titleItalic }) => (
  <div className="pt-28 pb-14 relative overflow-hidden" style={{ background: "#1e1e1e" }}>
    <div className="absolute inset-0 pattern-wood opacity-20" />
    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-8" style={{ background: "#6b4c36" }} />
        <span className="text-[11px] tracking-[0.22em] uppercase font-medium" style={{ color: "#c4a07f" }}>
          {eyebrow}
        </span>
      </div>
      <h1 className="font-display"
        style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", color: "#f7f3ee", fontFamily: "'DM Serif Display', Georgia, serif" }}
      >
        {title}{titleItalic && <em className="italic"> {titleItalic}</em>}
      </h1>
    </div>
  </div>
)

// ── Home ──────────────────────────────────────────────────────────────────
export const Home = () => (
  <motion.main initial="initial" animate="animate" exit="exit" variants={pageTransition}>
    <Hero />
    <Ambientes />
    <CatalogPreview />
    <Materials />
    <Testimonials />
    <QuoteCTA />
  </motion.main>
)
export default Home

// ── Catalogo ──────────────────────────────────────────────────────────────
export const CatalogoPage = () => {
  const [active, setActive] = useState("Todos")
  const filtered = active === "Todos" ? content.catalog : content.catalog.filter(p => p.category === active)

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <PageBanner eyebrow="Coleccion" title="Catalogo de" titleItalic="Muebles" />

      {/* Filtros por habitacion */}
      <div className="sticky top-16 z-30 py-3" style={{ background: "#f7f3ee", borderBottom: "1px solid rgba(107,76,54,0.1)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex gap-3 overflow-x-auto">
          {content.categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200"
              style={{
                background: active === cat ? "#6b4c36" : "transparent",
                color: active === cat ? "#f7f3ee" : "#8a7f76",
                border: "1px solid",
                borderColor: active === cat ? "#6b4c36" : "rgba(107,76,54,0.18)",
              }}
            >{cat}</button>
          ))}
        </div>
      </div>

      {/* Grid de productos */}
      <section className="py-14 section-linen">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div key={active}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              initial="hidden" animate="visible" variants={staggerContainer}
            >
              {filtered.map((product) => (
                <motion.div key={product.id} variants={scaleIn} className="product-card rounded-2xl overflow-hidden cursor-default">
                  {/* Imagen */}
                  <div className="relative h-52 overflow-hidden" style={{ background: "#ede8e1" }}>
                    <motion.img src={product.image} alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
                      <span className="room-badge px-2 py-0.5 text-white text-[9px]"
                        style={{ background: roomColors[product.category] || "#6b4c36" }}
                      >{product.category}</span>
                      {product.new && <span className="room-badge px-2 py-0.5 text-white text-[9px]" style={{ background: "#c4704f" }}>Nuevo</span>}
                      {product.custom && <span className="room-badge px-2 py-0.5 text-[9px]" style={{ background: "#1e1e1e", color: "#f7f3ee" }}>A medida</span>}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-display italic text-base mb-1"
                      style={{ color: "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >{product.name}</h3>
                    <p className="text-[11px] mb-1" style={{ color: "#8a7f76" }}>{product.material}</p>
                    <p className="text-[10px] mb-2" style={{ color: "#c4a07f" }}>{product.finish}</p>
                    <div className="flex items-center gap-1 mb-3">
                      <Ruler size={10} style={{ color: "#8a7f76" }} />
                      <span className="text-[10px]" style={{ color: "#8a7f76" }}>{product.dimensions}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2.5"
                      style={{ borderTop: "1px solid rgba(107,76,54,0.1)" }}
                    >
                      <span className="font-display italic text-base"
                        style={{ color: "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif" }}
                      >{product.price}</span>
                      <a href={`https://wa.me/${content.business.whatsapp}?text=${encodeURIComponent(`Hola, me interesa el mueble "${product.name}". Podrian darme informacion?`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all duration-200"
                        style={{ background: "#6b4c36", color: "#f7f3ee" }}
                        onMouseEnter={e => e.currentTarget.style.background = "#3d2b1f"}
                        onMouseLeave={e => e.currentTarget.style.background = "#6b4c36"}
                      >Consultar</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <QuoteCTA />
    </motion.div>
  )
}

// ── Servicios ─────────────────────────────────────────────────────────────
export const ServiciosPage = () => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
    <PageBanner eyebrow="Lo que ofrecemos" title="Nuestros" titleItalic="Servicios" />

    <section className="py-16 md:py-24 section-linen">
      <div className="max-w-5xl mx-auto px-5 md:px-10 space-y-0">
        {content.services.map((service, i) => (
          <motion.div key={service.id}
            initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp}
            className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            style={{ borderBottom: "1px solid rgba(107,76,54,0.1)" }}
          >
            {/* Numero */}
            <div className="md:col-span-1">
              <span className="font-display italic text-4xl"
                style={{ color: "rgba(107,76,54,0.2)", fontFamily: "'DM Serif Display', Georgia, serif" }}
              >{String(service.id).padStart(2, "0")}</span>
            </div>

            {/* Contenido */}
            <div className="md:col-span-7">
              <h2 className="font-display italic text-3xl mb-3"
                style={{ color: "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif" }}
              >{service.title}</h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#8a7f76", maxWidth: "480px" }}>
                {service.description}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {service.includes.map((item, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle size={13} style={{ color: "#6b4c36" }} />
                    <span className="text-sm" style={{ color: "#8a7f76" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Precio */}
            <div className="md:col-span-4">
              <div className="p-5 rounded-2xl" style={{ background: "#ede8e1" }}>
                <p className="text-[10px] tracking-widest uppercase mb-1 font-semibold" style={{ color: "#6b4c36" }}>Precio</p>
                <p className="font-display italic text-2xl mb-1"
                  style={{ color: "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif" }}
                >{service.price}</p>
                <p className="text-xs" style={{ color: "#c4704f" }}>{service.priceNote}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <QuoteCTA />
  </motion.div>
)

// ── Nosotros ──────────────────────────────────────────────────────────────
export const NosotrosPage = () => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
    <PageBanner eyebrow="Quienes somos" title="Nuestra" titleItalic="Historia" />

    <section className="py-16 md:py-24 section-linen">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        {/* Historia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "#6b4c36" }} />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium" style={{ color: "#6b4c36" }}>Historia</span>
            </div>
            <h2 className="font-display italic mb-4 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif", whiteSpace: "pre-line" }}
            >{content.about.headline}</h2>
            <div className="walnut-line mb-5" />
            <p className="text-base leading-relaxed italic"
              style={{ color: "#8a7f76", fontFamily: "'DM Serif Display', Georgia, serif" }}
            >{content.about.body}</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeInRight}
            className="relative h-80 rounded-2xl overflow-hidden"
          >
            <img src={content.hero.image} alt="Taller de muebles" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, rgba(30,30,30,0.4))" }} />
            {/* Ano de fundacion flotante */}
            <div className="absolute bottom-5 right-5 text-right">
              <div className="font-display italic text-5xl leading-none"
                style={{ color: "rgba(247,243,238,0.9)", fontFamily: "'DM Serif Display', Georgia, serif" }}
              >{content.business.founded}</div>
              <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(247,243,238,0.55)" }}>Fundados</div>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <SectionHeader eyebrow="Nuestros valores" title="Lo que nos" titleItalic="Define" align="center" />
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}
        >
          {content.about.values.map((v, i) => {
            const Icon = valueIcons[v.icon] || Hammer
            return (
              <motion.div key={i} variants={fadeInUp}
                className="p-6 rounded-2xl flex gap-5"
                style={{ background: "#faf8f5", border: "1px solid rgba(107,76,54,0.09)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(107,76,54,0.1)" }}
                >
                  <Icon size={20} style={{ color: "#6b4c36" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "#1e1e1e" }}>{v.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#8a7f76" }}>{v.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
    <QuoteCTA />
  </motion.div>
)

// ── Contacto ──────────────────────────────────────────────────────────────
export const ContactoPage = () => {
  const waUrl = `https://wa.me/${content.business.whatsapp}?text=${encodeURIComponent(content.quote.whatsappMessage)}`
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <PageBanner eyebrow="Hablemos" title="Visita" titleItalic="nuestro Showroom" />

      <section className="py-16 md:py-24 section-linen">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Cotizacion */}
            <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
              <h2 className="font-display italic text-3xl mb-3"
                style={{ color: "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif" }}
              >{content.quote.headline}</h2>
              <div className="walnut-line mb-5" />
              <p className="text-base leading-relaxed mb-8" style={{ color: "#8a7f76" }}>
                {content.quote.subheadline}
              </p>
              <motion.a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white w-full justify-center"
                style={{ background: "#25D366" }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                {content.quote.cta}
              </motion.a>
              <p className="text-center text-xs italic mt-3" style={{ color: "#8a7f76" }}>{content.quote.note}</p>
            </motion.div>

            {/* Datos de contacto */}
            <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="space-y-5">
              <div className="p-7 rounded-2xl" style={{ background: "#1e1e1e" }}>
                <h3 className="font-display italic text-xl mb-5"
                  style={{ color: "#f7f3ee", fontFamily: "'DM Serif Display', Georgia, serif" }}
                >Showroom & Taller</h3>
                {[
                  { Icon: MapPin, label: "Direccion",  val: `${content.business.address}, ${content.business.city}` },
                  { Icon: Phone,  label: "Telefono",   val: content.business.phone },
                  { Icon: Mail,   label: "Email",      val: content.business.email },
                  { Icon: Clock,  label: "Lun-Vie",    val: content.business.hours.weekdays },
                  { Icon: Clock,  label: "Sabado",     val: content.business.hours.saturday },
                  { Icon: Clock,  label: "Domingo",    val: content.business.hours.sunday },
                ].map(({ Icon, label, val }) => (
                  <div key={label} className="flex items-start gap-3 py-3"
                    style={{ borderBottom: "1px solid rgba(247,243,238,0.06)" }}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(107,76,54,0.2)" }}
                    >
                      <Icon size={13} style={{ color: "#c4a07f" }} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "#6b4c36" }}>{label}</p>
                      <p className="text-sm" style={{ color: "rgba(247,243,238,0.55)" }}>{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Navbar, Footer, WhatsAppButton } from "./components/layout/Layout"

export const App = () => {
  const location = useLocation()
  return (
    <div className="min-h-screen" style={{ background: "#f7f3ee" }}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"          element={<Home />} />
          <Route path="/catalogo"  element={<CatalogoPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/nosotros"  element={<NosotrosPage />} />
          <Route path="/contacto"  element={<ContactoPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
