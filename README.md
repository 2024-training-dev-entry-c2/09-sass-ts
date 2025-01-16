# Rediseño de la Página de Gamma
[![GitHub last commit](https://img.shields.io/github/last-commit/KJRM20/09-sass-ts)](#)<br><br>

Este proyecto consiste en la reconstrucción de la página de **Gamma**, enfocándome en mejorar la semántica del HTML, implementar principios de accesibilidad (WCAG) y organizar los estilos utilizando **SASS**.

## 🎯 Objetivos del Proyecto

1. **Semántica HTML**:  
   Reorganizar y estructurar el código HTML utilizando etiquetas semánticas para mejorar la comprensión del contenido por parte de navegadores, buscadores y tecnologías de asistencia.

2. **Accesibilidad**:  
   Asegurar que la página sea accesible para todos los usuarios, incluyendo aquellos con discapacidades, siguiendo los estándares de accesibilidad web (WCAG 2.1).

3. **SASS**:  
   Modularizar y optimizar los estilos CSS usando SASS, aprovechando variables, mixins, anidación y otros beneficios.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Para una estructura semántica sólida.
- **CSS3/SASS**: Para gestionar los estilos de forma eficiente y escalable.
- **TypeScript**: Para mejorar la interactividad en componentes clave.
- **WCAG 2.1**: Directrices para garantizar la accesibilidad de la página.

---

## 🚀 Principales Mejoras Implementadas

### 1. Estructura Semántica
- Reemplazo de etiquetas genéricas (`div`, `span`) por etiquetas semánticas como `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc.
- Uso de `<h1>` a `<h6>` en un orden lógico para reflejar la jerarquía de contenidos.
- Inclusión de elementos como `<figure>`, `<blockquote>` y `<aside>` donde corresponde.

### 2. Accesibilidad (A11Y)
- Uso adecuado de atributos ARIA (`aria-label`, `aria-labelledby`, `aria-expanded`, etc.) para mejorar la interacción con lectores de pantalla.
- Inclusión de texto alternativo (`alt`) en todas las imágenes.
- Uso de controles accesibles para elementos interactivos, como botones, enlaces y formularios.
- Garantía de un contraste suficiente entre texto y fondo para cumplir con WCAG 2.1 (AA).
- Navegación por teclado asegurada para todos los elementos interactivos.

### 3. Optimización de Estilos con SASS
- **Variables**: Definición de colores, fuentes y tamaños en un archivo de variables para consistencia y fácil mantenimiento.
- **Mixins**: Creación de mixins reutilizables para elementos comunes, como botones y contenedores.
- **Anidación**: Organización de estilos siguiendo la jerarquía del HTML para mayor legibilidad.

---

## 📌 Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/KJRM20/09-sass-ts.git
    ```
2. **Instalar dependencias**:
    Se requiere la carpeta de módulos de Node.js. Ejecuta el siguiente comando dentro de la carpeta del proyecto:
    ```bash
    npm install
    ```
3. **Compilar**:
    ```bash
    npm run dev
    ```
4. **Compilar**:
    Abre el dominio que aparece en la terminal. En este caso, por defecto es ```http://localhost:5173/```.

---

## Contacto
Para preguntas, problemas o colaboraciones, por favor, contáctame.