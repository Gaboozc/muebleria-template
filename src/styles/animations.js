// Variantes Framer Motion — movimientos calidos y deliberados para muebleria

export const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.1,0.25,1] } },
}
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55 } },
}
export const fadeInLeft = {
  hidden:  { opacity: 0, x: -45 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
}
export const fadeInRight = {
  hidden:  { opacity: 0, x: 45 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
}
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
export const staggerSlow = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
export const heroTitle = {
  hidden:  { opacity: 0, y: 55 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16,1,0.3,1] } },
}
export const heroSubtitle = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.22 } },
}
export const heroCTA = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.42 } },
}
export const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.22 } },
}
export const viewportOnce = { once: true, margin: "-70px" }
export const imgZoom = { scale: 1.06, transition: { duration: 0.6 } }
