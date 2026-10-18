# 🧀🍌 Tequeños El Papoi!

[![CI & Netlify Deploy](https://github.com/antobarroso31-cpu/tequepapoii.com/actions/workflows/ci-deploy.yml/badge.svg)](https://github.com/antobarroso31-cpu/tequepapoii.com/actions/workflows/ci-deploy.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/deploy-status?branch=main)](https://app.netlify.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite)](https://vitejs.dev/)

Página web oficial de **Tequeños El Papoi**, el negocio gastronómico de tequeños artesanales venezolanos más crujiente, delicioso y divertido de la galaxia, caracterizado con la energía y el humor de los **Minions**.

---

## 👑 Propietarios y Fundadores

El negocio está fundado, desarrollado y gestionado con orgullo por:

- **👨‍🍳 Antony Contreras** — *Co-Fundador & Maestro Quesero / Chef de Innovación Gastronómica*  
  Especialista en la formulación de la masa artesanal y selección del queso blanco con el estirón más largo.
- **👨‍🍳 Diego Tigrera** — *Co-Fundador & Maestro del Crujiente / Director de Fritura & Operaciones*  
  Guardián de la temperatura de cocción ideal y el sonido crujiente perfecto en cada bocado.
- **👨‍🍳 Richard Rodriguez** — *Co-Fundador & Creador de Sabor / Especialista en Experiencia & Salsas*  
  Creador de las salsas de la casa (Salsa Papoi de Ajo, Tártara Gru, Miel Mostaza) y atención al cliente.

---

## ✨ Características Principales

1. **Identidad Visual Minions ("Papoi")**:
   - Paleta de color temática: Amarillo Minion (`#FACC15`), Azul Mezclilla Overalls (`#1E3A8A`) y Dorado Queso Derretido (`#F59E0B`).
   - Logotipo vectorial oficial y favicons SVG personalizados.
   - Ilustración principal interactiva con Minions y queso estirable.
   - Ilustraciones vectoriales personalizadas de los tres propietarios vestidos de Minion Chefs.

2. **Menú Digital Completo & Filtros**:
   - **Tequeños Clásicos Tradicionales** (100% queso blanco llanero).
   - **Tequeños Mega Papoi** (doble queso fundido elástico).
   - **Tequeños Dulces "¡Bananaaa & Nutella!"** (banana caramelizada y auténtica crema de avellana).
   - **Tequeños Guayaba & Queso** (el clásico balance dulce y salado).
   - **Tequeños Bacon & Cheddar** (tocineta ahumada con cheddar derretido).
   - **Papoi Fiesta Boxes** (combos para fiestas de 25 y 50 piezas).
   - **Trío de Salsas Legendarias Papoi**.
   - Selector de salsas incluidas para cada producto y medidor de elasticidad de queso (*Cheese Pull Meter*).

3. **Simulador de Pedidos & Checkout directo por WhatsApp**:
   - Carrito de compras lateral (*drawer*) con persistencia en `localStorage`.
   - Modificador interactivo de cantidades y selección de modalidad: **Delivery a domicilio** o **Retiro (Pick-up)**.
   - Formato automático de mensaje de WhatsApp detallando cliente, dirección, tequeños, salsas y total a pagar en USD.

4. **Efectos de Sonido Web Audio API**:
   - Botón interactivo *"¡Gritar PAPOI!"* y sonidos divertidos de crujido y celebración al ordenar, generados por sintetizador en el navegador (sin dependencias pesadas de audio).

---

## 🛠️ Stack Tecnológico

- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) (estricto con soporte para `npx tsc --noEmit`).
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/) (HTML5 + TS + Vanilla CSS).
- **Estilos**: Vanilla CSS puro con variables CSS personalizadas, responsive design y micro-interacciones.
- **CI / CD**: [GitHub Actions](.github/workflows/ci-deploy.yml).
- **Hosting & Despliegue**: [Netlify](https://www.netlify.com/) con configuración en [`netlify.toml`](netlify.toml).

---

## 🚀 Instalación y Desarrollo Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/antobarroso31-cpu/tequepapoii.com.git
   cd tequepapoii.com
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar chequeo de tipos TypeScript (`tsc --noEmit`)**:
   ```bash
   npx tsc --noEmit
   # o bien:
   npm run typecheck
   ```

4. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.

5. **Construir para producción**:
   ```bash
   npm run build
   ```
   Los archivos estáticos optimizados se generarán en la carpeta `dist/`.

---

## 🌐 Despliegue en Netlify

El proyecto cuenta con el archivo [`netlify.toml`](netlify.toml) preconfigurado:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Opción A: Despliegue Automático por Git (Recomendado)
1. Entra a tu cuenta en [Netlify.com](https://www.netlify.com/).
2. Haz clic en **"Add new site"** &rarr; **"Import an existing project"**.
3. Selecciona **GitHub** y autoriza tu repositorio `tequepapoii.com`.
4. Netlify detectará automáticamente `netlify.toml` con comando `npm run build` y directorio `dist`.
5. Haz clic en **Deploy Site**. ¡Cada `git push` a la rama `main` desplegará automáticamente la página!

### Opción B: Despliegue mediante GitHub Actions
El flujo de trabajo [`.github/workflows/ci-deploy.yml`](.github/workflows/ci-deploy.yml) realiza:
1. Validación estricta con `npx tsc --noEmit`.
2. Compilación de producción con `npm run build`.
3. Despliegue automático a Netlify si configuras las variables secretas en tu repositorio de GitHub:
   - `NETLIFY_AUTH_TOKEN` (Tu token personal de Netlify)
   - `NETLIFY_SITE_ID` (El API ID del sitio en Netlify)

---

## 📄 Licencia

© 2026 **Tequeños El Papoi**. Creado para Antony Contreras, Diego Tigrera y Richard Rodriguez.
