# SnackOverflow Landing

Vite + React + TypeScript + TailwindCSS starter configured for the existing `src/` app.

## Resumen ejecutivo

Aplicación: landing estática (no hay API ni backend). Esta es una SPA front-end generada por Vite.

Stack principal: React 18 + TypeScript + Vite; estilos con TailwindCSS. Animaciones y UI usan librerías como framer-motion y componentes SVG/packaged assets. WebGL decorativo se encapsula en componentes (three.js) y puede lazy-load para no afectar TTI.

Tecnologias clave
- Lenguaje y bundler: 
    - TypeScript, React18, Vite

- Estilos:
    - TaildwindCss, PostCss 

- UI / animaciones / Util:
    - framer-motion, lucide-react, components Radix wrappers, sonner, recharts, react-day-picker, embla-carousel...

Arquitectura
- Static SPA generado por Vite. 
- Componentización por secciones (autónomas y exportables)
- UI primitivies que envuelven librerías externas
- Tipado estricto con TypeScript

Infraestructura
- Section Components (modulares y exportables)

Quick start (Windows PowerShell):

```powershell
npm install
npm run dev
```

To build:

```powershell
npm run build
```



