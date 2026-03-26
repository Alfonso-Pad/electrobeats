# ElectroBeats - Blog de Producción Musical Electrónica

![ElectroBeats](https://img.shields.io/badge/ElectroBeats-Blog-purple?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Descripción

Blog educativo sobre producción de música electrónica creado con HTML, CSS y JavaScript. El proyecto está diseñado como una demostración práctica de conceptos de desarrollo web front-end, con un diseño moderno y atractivo enfocado en la temática de producción musical, implementando interactividad y validaciones con JavaScript vanilla (sin frameworks).

## ✨ Características

- ✅ **3 Entradas de Blog Completas** con contenido detallado sobre:
  - Introducción a la Producción Musical Electrónica
  - El Arte de los Sintetizadores
  - Mezcla y Masterización Profesional

- 🎨 **Diseño Atractivo y Moderno**:
  - Gradientes vibrantes inspirados en música electrónica
  - Video de fondo en hero section con YouTube embebido
  - Animaciones y efectos hover suaves
  - Diseño responsivo para todos los dispositivos

- 🧭 **Navegación Completa**:
  - Página principal (index.html) con grid de artículos
  - 3 páginas de artículos individuales completas
  - Página Acerca de con información del blog
  - Página de Contacto con formulario funcional

- 📱 **Responsive Design**: Adaptable a móviles, tablets y escritorio

- ⚡ **Funcionalidades JavaScript**:
  - Validación de formulario de contacto en tiempo real
  - Contador de caracteres (límite de 500) en campo de mensaje
  - Botón "Volver arriba" dinámico que aparece al hacer scroll
  - Video de fondo autoreproducible en la página principal

- 🖼️ **Imágenes Locales**: 9 imágenes optimizadas y personalizadas incluidas en el proyecto

## 🗂️ Estructura del Proyecto

```
blog-musica-electronica/
│
├── index.html              # Página principal con grid de entradas y video hero
├── acerca.html             # Información sobre el blog
├── contacto.html           # Formulario de contacto con validación
├── script.js               # Funcionalidad JavaScript (validación, contador, botón scroll)
│
├── css/
│   └── styles.css          # Estilos globales del sitio (gradientes, animaciones, responsive)
│
├── blog/
│   ├── entrada1.html       # Introducción a la Producción Musical
│   ├── entrada2.html       # El Arte de los Sintetizadores
│   └── entrada3.html       # Mezcla y Masterización
│
├── images/                 # 9 imágenes locales optimizadas para el blog
│   ├── produccion_intro_1040x520px.jpg
│   ├── sinte.jpg
│   ├── masterizacion portada.jpg
│   └── ...
│
└── README.md              # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Navega a la carpeta `blog-musica-electronica`
2. Abre `index.html` en tu navegador web favorito
3. ¡Explora el blog!

### Opción 2: Servidor Local
```bash
# Si tienes Python instalado
cd blog-musica-electronica
python -m http.server 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

### Opción 3: Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🎨 Paleta de Colores

El diseño utiliza colores inspirados en la estética de la música electrónica:

- **Primario Púrpura**: `#8a2be2` (Blue Violet)
- **Secundario Cyan**: `#00ffff`
- **Acento Magenta**: `#ff00ff`
- **Fondo Oscuro**: `#0a0a0a` - `#1a0a2e`
- **Texto**: `#e0e0e0` / `#c0c0c0`

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos, animaciones, gradientes y diseño responsive
- **JavaScript (ES6+)**: Interactividad, validación de formularios y funcionalidades dinámicas
- **Imágenes Locales**: 9 imágenes optimizadas incluidas en el proyecto
- **YouTube Embed**: Video de fondo integrado en la hero section

## 💡 Características JavaScript Implementadas

El proyecto incluye funcionalidades JavaScript interactivas sin dependencias externas:

### 🎬 **Video de Fondo**
- Video de YouTube embebido en la página principal
- Reproducción automática con overlay para mejor legibilidad del texto

### ✅ **Validación de Formulario**
- Validación en tiempo real del formulario de contacto
- Verificación de campos obligatorios (nombre, email, asunto, mensaje)
- Validación de formato de email
- Mensajes de alerta personalizados para cada tipo de error
- Limpieza automática del formulario tras envío exitoso

### 🔢 **Contador de Caracteres**
- Contador dinámico en el campo de mensaje (límite: 500 caracteres)
- Cambio de color según la cantidad de caracteres:
  - 🟣 Morado: Normal (0-80% del límite)
  - 🟠 Naranja: Advertencia (80-100% del límite)
  - 🔴 Rojo: Límite alcanzado (100%)
- Prevención automática de caracteres excedentes

### ⬆️ **Botón "Volver Arriba"**
- Botón flotante que aparece automáticamente al hacer scroll (>300px)
- Desplazamiento suave (smooth scroll) al inicio de la página
- Diseño con efecto hover y transiciones fluidas

## 📊 Resumen del Proyecto

### Páginas Totales
- **6 páginas HTML** completamente funcionales e interconectadas
- **1 archivo JavaScript** (script.js) con funcionalidades validadas
- **1 archivo CSS** (styles.css) con diseño responsivo completo
- **9 imágenes locales** optimizadas para web

### Contenido
- **+3000 palabras** de contenido original sobre producción musical
- **Formulario funcional** con validación completa
- **Video hero interactivo** con overlay personalizado
- **Navegación consistente** en todas las páginas


## 👨‍💻 Autor

Alfonso Padilla Padilla - DAR - 2026

## 📄 Licencia

Este proyecto es de uso educativo y académico.

---

