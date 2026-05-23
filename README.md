# Template Muebleria — AlphaDev Studios

Sitio web para mueblerias boutique, talleres de diseno y tiendas de decoracion.
Estetica **Warm Craft Studio**: beige arena, nogal, carbon, terracota. DM Serif Display italico + DM Sans.

## Inicio rapido
```bash
npm install && npm run dev
```

## Paginas (Tier 2 — 5 paginas)
| Ruta | Contenido |
|---|---|
| `/` | Hero oscuro con imagen + Ambientes (3) + Catalogo destacado + Materiales + Testimonios + CTA |
| `/catalogo` | 8 productos con filtros por habitacion (Sala, Comedor, Recamara, Estudio) |
| `/servicios` | 3 servicios: Diseno de Interiores, Fabricacion a Medida, Entrega |
| `/nosotros` | Historia + ano de fundacion + 4 valores del taller |
| `/contacto` | Cotizacion por WhatsApp + datos del showroom |

## Paleta
| Token | Color | Uso |
|---|---|---|
| `walnut` | `#6b4c36` | Nogal — acento principal |
| `terra` | `#c4704f` | Terracota — acento secundario |
| `sand` | `#f7f3ee` | Arena — fondo base |
| `carbon` | `#1e1e1e` | Carbon — fondos oscuros |

## Caracteristicas unicas
- Hero anclado al fondo con imagen de ambiente
- Seccion "Ambientes" con cards de 3 alturas alternadas (grid editorial)
- Cards de producto con material, acabado, dimensiones y boton por pieza
- Patron de textura de madera sutil via CSS
- Ano de fundacion flotante en la foto de Nosotros
- CTA final con fondo nogal y patron de madera

## Personalizacion
- Textos → `src/data/content.js`
- Colores → `src/styles/theme.js` + `:root` en `src/index.css`
- Logo → `src/components/layout/Layout.jsx` → `PlaceholderLogo`

## Soporte
**AlphaDev Studios** · alphadevstudios.com
*Template #27 — Sistema de templates por nicho v1.0*
