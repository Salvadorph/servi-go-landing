# ServiGo – Landing Page

Landing page de pre-lanzamiento de **ServiGo**, una plataforma que conecta profesionales con clientes en Perú. El objetivo principal es la captación de profesionales mediante un formulario de registro.

---

## Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Iconos:** Lucide React
- **Fuente:** Inter (Google Fonts)
- **Despliegue:** [Vercel](https://vercel.com/)
- **Analytics:** Google Tag Manager (GTM)

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx                  # Root layout: GTM, fuente, metadatos SEO
│   ├── page.tsx                    # Página principal (todas las secciones)
│   ├── globals.css
│   ├── politica-de-privacidad/
│   │   └── page.tsx
│   └── politica-de-cookies/
│       └── page.tsx
└── components/
    ├── Header.tsx                  # Navbar sticky responsive
    ├── Hero.tsx                    # Sección hero con CTA
    ├── Benefits.tsx                # 4 tarjetas de beneficios
    ├── HowItWorks.tsx              # Pasos para profesionales y clientes
    ├── AppFeatures.tsx             # Servicios por hora vs presupuesto
    ├── FAQ.tsx                     # Preguntas frecuentes (accordion)
    ├── CTAFinal.tsx                # CTA de cierre
    ├── Footer.tsx                  # Footer con email y links legales
    └── CookieBanner.tsx            # Banner de cookies (localStorage)

public/
└── images/
    ├── principal-simplificado.png  # Logo principal (header y footer)
    ├── principal.png
    ├── principal-alterno.png
    └── principal-simplificado-alterno.png

doc/                                # Documentación del proyecto
├── mvp-landing.md
├── style-specs.md
├── product-specs.md
├── privacy-policy.md
└── cookies-policy.md
```

---

## Variables de entorno

Crea un archivo `.env.local` en la raíz con el siguiente contenido:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

- Reemplaza `GTM-XXXXXXX` por tu ID real de Google Tag Manager.
- Si la variable no está definida, el script de GTM simplemente no se cargará (no rompe nada).

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción (tras el build)
npm start

# Linter
npm run lint
```

---

## Despliegue en Vercel

1. Conecta este repositorio en [vercel.com](https://vercel.com/).
2. Vercel detecta automáticamente Next.js; no es necesario configurar el build.
3. En **Settings → Environment Variables**, añade:
   - `NEXT_PUBLIC_GTM_ID` → tu ID de GTM

Cada `git push` a `main` genera un despliegue automático.

---

## Favicon

Coloca los archivos de icono directamente en `public/`:

| Archivo | Tamaño |
|---|---|
| `favicon.ico` | 32×32 / 16×16 |
| `favicon-32x32.png` | 32×32 |
| `favicon-16x16.png` | 16×16 |
| `apple-touch-icon.png` | 180×180 |

Los `<link>` correspondientes deben añadirse en `src/app/layout.tsx` dentro de `<head>`.  
Puedes generar todos los tamaños desde el logo en [favicon.io](https://favicon.io/) o [RealFaviconGenerator](https://realfavicongenerator.net/).

---

## Contacto

hola@usaservigo.com

