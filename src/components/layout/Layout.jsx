// Componentes de layout para la muebleria
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { content } from "../../data/content"

// Logo — silla estilizada SVG
export const PlaceholderLogo = ({ className = "", size = "md", light = false }) => {
  const s = {
    sm: { t: "text-base", sub: "text-[9px]",  i: 28 },
    md: { t: "text-lg",   sub: "text-[10px]", i: 34 },
    lg: { t: "text-xl",   sub: "text-[11px]", i: 40 },
  }[size] || { t: "text-lg", sub: "text-[10px]", i: 34 }
  const tc = light ? "#f7f3ee" : "#1e1e1e"
  const ac = light ? "#c4704f" : "#6b4c36"

  return (
    <motion.div className={`inline-flex items-center gap-2.5 cursor-default select-none ${className}`}
      whileHover={{ opacity: 0.85 }} transition={{ duration: 0.2 }}
    >
      {/* SVG de silla moderna estilizada */}
      <svg width={s.i} height={s.i} viewBox="0 0 36 36" fill="none">
        {/* Respaldo */}
        <rect x="8" y="4" width="20" height="13" rx="2" fill={ac} opacity="0.85"/>
        {/* Asiento */}
        <rect x="6" y="18" width="24" height="5" rx="1.5" fill={tc}/>
        {/* Pata izquierda delantera */}
        <line x1="10" y1="23" x2="9"  y2="33" stroke={tc} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Pata derecha delantera */}
        <line x1="26" y1="23" x2="27" y2="33" stroke={tc} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Pata izquierda trasera */}
        <line x1="12" y1="23" x2="11" y2="33" stroke={ac} strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
        {/* Pata derecha trasera */}
        <line x1="24" y1="23" x2="25" y2="33" stroke={ac} strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
      </svg>

      <div className="flex flex-col leading-none gap-0.5">
        <span className={`${s.t} font-display italic`}
          style={{ color: tc, fontFamily: "'DM Serif Display', Georgia, serif" }}
        >Tu Muebleria</span>
        <span className={`${s.sub} tracking-[0.18em] uppercase font-medium`}
          style={{ color: ac }}
        >Muebles & Diseno</span>
      </div>
    </motion.div>
  )
}

// Encabezado de seccion
export const SectionHeader = ({ eyebrow, title, titleItalic, subtitle, align = "center", light = false, className = "" }) => {
  const tc   = light ? "#f7f3ee" : "#1e1e1e"
  const tsub = light ? "rgba(247,243,238,0.6)" : "#8a7f76"
  return (
    <motion.div
      className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}
      initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
          <div className="w-8 h-px" style={{ background: "#6b4c36" }} />
          <span className="text-[11px] tracking-[0.22em] uppercase font-medium"
            style={{ color: "#6b4c36" }}>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display leading-tight mb-3"
        style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)", color: tc, fontFamily: "'DM Serif Display', Georgia, serif" }}
      >
        {title}
        {titleItalic && <em className="italic"> {titleItalic}</em>}
      </h2>
      <div className={`walnut-line mb-5 ${align === "center" ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
          style={{ color: tsub }}>{subtitle}</p>
      )}
    </motion.div>
  )
}

// Navbar — fondo arena con texto oscuro
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "#f7f3ee",
          boxShadow: scrolled ? "0 2px 24px rgba(30,30,30,0.08)" : "none",
          borderBottom: scrolled ? "1px solid rgba(107,76,54,0.1)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/"><PlaceholderLogo size="sm" /></Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-8">
              {content.nav.links.map((link) => (
                <Link key={link.href} to={link.href}
                  className="text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-200 relative"
                  style={{ color: location.pathname === link.href ? "#6b4c36" : "#8a7f76" }}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.span layoutId="activeMueble"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "#6b4c36" }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link to="/contacto"
                className="hidden md:inline-flex px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={{ background: "#6b4c36", color: "#f7f3ee" }}
                onMouseEnter={e => e.currentTarget.style.background = "#3d2b1f"}
                onMouseLeave={e => e.currentTarget.style.background = "#6b4c36"}
              >{content.nav.ctaText}</Link>
              <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: "#1e1e1e" }}
              >{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-8"
            style={{ background: "#f7f3ee" }}
          >
            {content.nav.links.map((link, i) => (
              <motion.div key={link.href}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to={link.href}
                  className="font-display text-3xl italic"
                  style={{ color: location.pathname === link.href ? "#6b4c36" : "#1e1e1e", fontFamily: "'DM Serif Display', Georgia, serif" }}
                >{link.label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}>
              <Link to="/contacto"
                className="px-8 py-3 rounded-full text-sm font-semibold"
                style={{ background: "#6b4c36", color: "#f7f3ee" }}
              >{content.nav.ctaText}</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Footer carbon oscuro
export const Footer = () => (
  <footer style={{ background: "#1e1e1e", borderTop: "2px solid #6b4c36" }}>
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

        {/* Logo y descripcion */}
        <div>
          <PlaceholderLogo size="sm" light className="mb-4" />
          <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(247,243,238,0.4)" }}>
            {content.business.description}
          </p>
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {content.business.badges.map((b, i) => (
              <span key={i} className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                style={{ background: "rgba(107,76,54,0.2)", color: "#c4a07f", border: "1px solid rgba(107,76,54,0.3)" }}
              >{b}</span>
            ))}
          </div>
        </div>

        {/* Navegacion */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase mb-5 font-semibold"
            style={{ color: "#6b4c36" }}>Navegacion</h4>
          <ul className="space-y-2.5">
            {content.nav.links.map(link => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(247,243,238,0.4)" }}
                  onMouseEnter={e => e.target.style.color = "#c4704f"}
                  onMouseLeave={e => e.target.style.color = "rgba(247,243,238,0.4)"}
                >{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase mb-5 font-semibold"
            style={{ color: "#6b4c36" }}>Showroom</h4>
          <p className="text-xs mb-3" style={{ color: "#c4a07f" }}>{content.business.showroom}</p>
          <ul className="space-y-2.5">
            {Object.values(content.business.hours).map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <Clock size={12} className="mt-0.5 shrink-0" style={{ color: "#6b4c36" }} />
                <span className="text-sm" style={{ color: "rgba(247,243,238,0.4)" }}>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto y redes */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase mb-5 font-semibold"
            style={{ color: "#6b4c36" }}>Contacto</h4>
          <ul className="space-y-3">
            {[
              { Icon: MapPin, val: `${content.business.address}, ${content.business.city}` },
              { Icon: Phone,  val: content.business.phone },
              { Icon: Mail,   val: content.business.email },
            ].map(({ Icon, val }, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icon size={13} className="mt-0.5 shrink-0" style={{ color: "#6b4c36" }} />
                <span className="text-sm" style={{ color: "rgba(247,243,238,0.4)" }}>{val}</span>
              </li>
            ))}
          </ul>
          {/* Redes */}
          <div className="flex gap-3 mt-5">
            {[
              { href: content.business.social.instagram, label: "IG" },
              { href: content.business.social.facebook,  label: "FB" },
              { href: content.business.social.pinterest, label: "PIN" },
            ].filter(s => s.href).map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-[10px] font-bold transition-all duration-200"
                style={{ border: "1px solid rgba(107,76,54,0.3)", color: "rgba(247,243,238,0.35)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c4704f"; e.currentTarget.style.color = "#c4704f" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(107,76,54,0.3)"; e.currentTarget.style.color = "rgba(247,243,238,0.35)" }}
              >{label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px mb-5" style={{ background: "rgba(247,243,238,0.06)" }} />
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs" style={{ color: "rgba(247,243,238,0.2)" }}>{content.footer.copyright}</p>
        <a href={content.footer.creditUrl} target="_blank" rel="noopener noreferrer"
          className="text-xs transition-colors duration-200" style={{ color: "rgba(247,243,238,0.2)" }}
          onMouseEnter={e => e.target.style.color = "#c4704f"}
          onMouseLeave={e => e.target.style.color = "rgba(247,243,238,0.2)"}
        >{content.footer.credit}</a>
      </div>
    </div>
  </footer>
)

// Boton flotante WhatsApp
export const WhatsAppButton = () => {
  const waUrl = `https://wa.me/${content.business.whatsapp}?text=${encodeURIComponent(content.quote.whatsappMessage)}`
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div className="absolute inset-0 rounded-full" style={{ background: "rgba(37,211,102,0.25)" }}
        animate={{ scale: [1,1.6,1.6], opacity: [0.5,0,0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.a href={waUrl} target="_blank" rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        style={{ background: "#25D366" }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        aria-label="Cotizar por WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  )
}
