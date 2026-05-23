// Secciones de la muebleria Warm Craft Studio
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Hammer, Leaf, Shield, Users, Ruler, Truck, Palette, CheckCircle } from "lucide-react"
import { SectionHeader } from "../layout/Layout"
import { content } from "../../data/content"
import { heroTitle, heroSubtitle, heroCTA, fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerSlow, scaleIn, viewportOnce, imgZoom } from "../../styles/animations"

const valueIcons = { hammer: Hammer, leaf: Leaf, shield: Shield, users: Users }
const roomColors  = { Sala: "#6b4c36", Comedor: "#c4704f", Recamara: "#8a7f76", Estudio: "#1e1e1e" }

// ── Hero ──────────────────────────────────────────────────────────────────
export const Hero = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: "#1e1e1e" }}>

    {/* Imagen de fondo con zoom lento */}
    <motion.div className="absolute inset-0 z-0"
      initial={{ scale: 1.07 }} animate={{ scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <img src={content.hero.image} alt="Sala amueblada" className="w-full h-full object-cover" />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0.5) 55%, rgba(30,30,30,0.15) 100%)" }}
      />
    </motion.div>

    {/* Textura de madera sutil sobre la imagen */}
    <div className="absolute inset-0 z-0 pattern-wood opacity-30" />

    {/* Contenido anclado al fondo */}
    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full pb-16 pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

        {/* Columna izquierda — texto */}
        <motion.div initial="hidden" animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "#6b4c36" }} />
            <span className="text-[11px] tracking-[0.22em] uppercase font-medium"
              style={{ color: "#c4a07f" }}>{content.hero.eyebrow}</span>
          </motion.div>

          {/* Titulo serif italic */}
          <motion.h1 variants={heroTitle}
            className="font-display leading-tight mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#f7f3ee",
              fontFamily: "'DM Serif Display', Georgia, serif",
              whiteSpace: "pre-line",
            }}
          >{content.hero.headline}</motion.h1>

          {/* Linea nogal */}
          <motion.div variants={heroSubtitle} className="walnut-line mb-5" />

          {/* Subtitulo */}
          <motion.p variants={heroSubtitle}
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "rgba(247,243,238,0.6)" }}
          >{content.hero.subheadline}</motion.p>

          {/* Badges de diferenciadores */}
          <motion.div variants={heroSubtitle} className="flex flex-wrap gap-2 mb-8">
            {content.business.badges.map((badge, i) => (
              <span key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: "rgba(107,76,54,0.25)", color: "#c4a07f", border: "1px solid rgba(107,76,54,0.35)" }}
              >
                <CheckCircle size={11} />{badge}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={heroCTA} className="flex flex-col sm:flex-row gap-4">
            <Link to="/catalogo"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: "#6b4c36", color: "#f7f3ee" }}
              onMouseEnter={e => e.currentTarget.style.background = "#3d2b1f"}
              onMouseLeave={e => e.currentTarget.style.background = "#6b4c36"}
            >{content.hero.cta.primary} <ArrowRight size={14} /></Link>
            <Link to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ border: "1px solid rgba(247,243,238,0.25)", color: "#f7f3ee" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#6b4c36"; e.currentTarget.style.color = "#c4a07f" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(247,243,238,0.25)"; e.currentTarget.style.color = "#f7f3ee" }}
            >{content.hero.cta.secondary}</Link>
          </motion.div>
        </motion.div>

        {/* Columna derecha — stats flotantes */}
        <motion.div
          className="hidden lg:flex flex-col items-end gap-4"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {content.hero.stats.map((stat, i) => (
            <div key={i}
              className="px-6 py-4 rounded-2xl text-right"
              style={{ background: "rgba(30,30,30,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(107,76,54,0.2)" }}
            >
              <div className="font-display text-3xl italic"
                style={{ color: "#c4a07f", fontFamily: "'DM Serif Display', Georgia, serif" }}
              >{stat.value}</div>
              <div className="text-xs tracking-wider uppercase mt-0.5" style={{ color: "rgba(247,243,238,0.45)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)

// ── Ambientes — 3 habitaciones en grid editorial ──────────────────────────
export const Ambientes = () => (
  <section className="py-24 md:py-28 section-linen">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <SectionHeader eyebrow="Inspiracion" title="Crea tu" titleItalic="Ambiente Ideal" />

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5"
        initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}
      >
        {content.ambientes.map((amb, i) => (
          <motion.div key={amb.id} variants={scaleIn}
            className="relative overflow-hidden group cursor-default rounded-2xl"
            style={{ height: i === 1 ? "460px" : "380px" }}
          >
            {/* Imagen con zoom en hover */}
            <motion.img src={amb.image} alt={amb.title}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={imgZoom} transition={{ duration: 0.55 }}
            />
            {/* Overlay degradado */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(30,30,30,0.85), transparent 55%)" }}
            />
            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="room-badge px-3 py-1 text-white mb-2 inline-block"
                style={{ background: roomColors[amb.room] || "#6b4c36" }}
              >{amb.room}</span>
              <h3 className="font-display text-xl italic mb-1"
                style={{ color: "#f7f3ee", fontFamily: "'DM Serif Display', Georgia, serif" }}
              >{amb.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(247,243,238,0.65)" }}>
                {amb.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// ── Catalogo preview — 3 productos destacados ─────────────────────────────
export const CatalogPreview = () => {
  const featured = content.catalog.filter(p => p.featured)
  return (
    <section className="py-24 md:py-28" style={{ background: "#f7f3ee" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader eyebrow="Coleccion" title="Piezas" titleItalic="Destacadas" align="left" className="mb-0" />
          <Link to="/catalogo"
            className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium transition-colors duration-200"
            style={{ color: "#8a7f76" }}
            onMouseEnter={e => e.currentTarget.style.color = "#6b4c36"}
            onMouseLeave={e => e.currentTarget.style.color = "#8a7f76"}
          >Ver todo el catalogo <ArrowRight size={12} /></Link>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={scaleIn} className="product-card rounded-2xl overflow-hidden cursor-default">
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden" style={{ background: "#ede8e1" }}>
                <motion.img src={product.image} alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={imgZoom} transition={{ duration: 0.55 }}
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="room-badge px-2.5 py-1 text-white"
                    style={{ background: roomColors[product.category] || "#6b4c36" }}
                  >{product.category}</span>
                  {product.new && (
                    <span className="room-badge px-2.5 py-1" style={{ background: "#c4704f", color: "#fff" }}>Nuevo</span>
                  )}
                  {product.custom && (
                    <span className="room-badge px-2.5 py-1" style={{ background: "#1e1e1e", color: "#f7f3ee" }}>A medida</span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display italic text-lg mb-1"
                  style={{ color: "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif" }}
                >{product.name}</h3>

                {/* Material y acabado */}
                <p className="text-xs mb-1" style={{ color: "#8a7f76" }}>{product.material}</p>
                <p className="text-[11px] mb-3" style={{ color: "#c4a07f" }}>Acabado: {product.finish}</p>

                {/* Dimensiones */}
                <div className="flex items-center gap-1.5 mb-4">
                  <Ruler size={11} style={{ color: "#8a7f76" }} />
                  <span className="dim-tag">{product.dimensions}</span>
                </div>

                {/* Precio y CTA */}
                <div className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(107,76,54,0.1)" }}
                >
                  <div>
                    <span className="font-display italic text-xl"
                      style={{ color: "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >{product.price}</span>
                    <p className="text-[10px] mt-0.5" style={{ color: "#8a7f76" }}>{product.priceNote}</p>
                  </div>
                  <a href={`https://wa.me/${content.business.whatsapp}?text=${encodeURIComponent(`Hola, me interesa el mueble "${product.name}". Podrian darme mas informacion?`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                    style={{ background: "#6b4c36", color: "#f7f3ee" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#3d2b1f"}
                    onMouseLeave={e => e.currentTarget.style.background = "#6b4c36"}
                  >Consultar</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── Materiales ────────────────────────────────────────────────────────────
export const Materials = () => (
  <section className="py-20 md:py-24 section-carbon">
    <div className="max-w-6xl mx-auto px-5 md:px-10">
      <SectionHeader eyebrow="Lo que usamos" title="Materiales de" titleItalic="Primera Calidad" light align="center" />
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}
      >
        {content.materials.map((mat, i) => (
          <motion.div key={i} variants={fadeInUp}
            className="p-5 rounded-xl flex items-start gap-4 group transition-all duration-300"
            style={{ background: "rgba(107,76,54,0.1)", border: "1px solid rgba(107,76,54,0.15)" }}
            whileHover={{ background: "rgba(107,76,54,0.18)", borderColor: "rgba(107,76,54,0.3)" }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(107,76,54,0.2)" }}
            >
              <span className="font-display italic text-lg" style={{ color: "#c4a07f", fontFamily: "'DM Serif Display', serif" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1" style={{ color: "#f7f3ee" }}>{mat.name}</h4>
              <p className="text-xs" style={{ color: "rgba(247,243,238,0.5)" }}>{mat.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// ── Testimonios ───────────────────────────────────────────────────────────
export const Testimonials = () => (
  <section className="py-24 md:py-28 section-cream">
    <div className="max-w-5xl mx-auto px-5 md:px-10">
      <SectionHeader eyebrow="Clientes" title="Lo que dicen de" titleItalic="Nuestros Muebles" />
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerSlow}
      >
        {content.testimonials.map((item) => (
          <motion.div key={item.id} variants={fadeInUp}
            className="p-7 rounded-2xl relative"
            style={{ background: "#faf8f5", boxShadow: "0 4px 24px rgba(30,30,30,0.07)" }}
          >
            {/* Comilla serif */}
            <span className="absolute top-4 right-5 font-display italic text-6xl leading-none select-none"
              style={{ color: "rgba(107,76,54,0.07)", fontFamily: "'DM Serif Display', Georgia, serif" }}
            >"</span>

            {/* Badge de habitacion */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(107,76,54,0.08)" }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#6b4c36" }}>
                {item.room}
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-5 italic"
              style={{ color: "#3d2b1f", fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "0.95rem" }}
            >"{item.text}"</p>

            <div className="h-px mb-4" style={{ background: "rgba(107,76,54,0.08)" }} />
            <div className="flex items-center gap-3">
              <img src={item.avatar} alt={item.name}
                className="w-9 h-9 rounded-full object-cover"
                style={{ border: "2px solid rgba(107,76,54,0.2)" }}
              />
              <div>
                <div className="text-sm font-semibold" style={{ color: "#1e1e1e" }}>{item.name}</div>
                <div className="text-xs" style={{ color: "#8a7f76" }}>{item.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// ── CTA de cotizacion ─────────────────────────────────────────────────────
export const QuoteCTA = () => {
  const waUrl = `https://wa.me/${content.business.whatsapp}?text=${encodeURIComponent(content.quote.whatsappMessage)}`
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "#6b4c36" }}>
      <div className="absolute inset-0 pattern-wood opacity-30" />
      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6 }}>
          <h2 className="font-display italic mb-3 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f7f3ee", fontFamily: "'DM Serif Display', Georgia, serif" }}
          >{content.quote.headline}</h2>
          <div className="w-10 h-px mx-auto mb-5" style={{ background: "rgba(247,243,238,0.3)" }} />
          <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(247,243,238,0.65)" }}>
            {content.quote.subheadline}
          </p>
          <motion.a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200"
            style={{ background: "#25D366" }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(37,211,102,0.35)" }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {content.quote.cta}
          </motion.a>
          <p className="mt-4 text-xs italic" style={{ color: "rgba(247,243,238,0.45)" }}>{content.quote.note}</p>
        </motion.div>
      </div>
    </section>
  )
}
