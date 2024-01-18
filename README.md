# Grabador de Pantalla

## Descripción

Bienvenido al Proyecto Grabador de Pantalla, una aplicación sencilla y liviana para grabar la pantalla en línea, construida utilizando Astro. Este proyecto permite a los usuarios capturar y compartir fácilmente sus grabaciones de pantalla.

## Características

- Selección de Dispositivos: Elige qué dispositivos grabar: micrófono, sonido y cámara web.
- Opciones de Formato: Selecciona el formato deseado para descargar tu grabación de pantalla: webm o mp4.
- Inicio y Detención de Grabación: Inicia y detén el proceso de grabación de pantalla sin esfuerzo.
- Descarga de la Grabación: Descarga tu grabación de pantalla en el formato elegido.

## Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

El proyecto está estructurado utilizando Astro, un moderno generador de sitios estáticos. Los componentes clave incluyen:

- Layout.astro: El diseño principal de la aplicación.
- Input.astro: Componente de entrada personalizado para la selección de dispositivos.
- Button.astro: Componente de botón personalizado para iniciar la grabación.
- Varios iconos SVG para micrófono, sonido, cámara web, reproducir, detener y descargar.

## Inicio Rápido

Clona el repositorio.
Instala las dependencias usando tu administrador de paquetes preferido (npm install o yarn install).
Ejecuta el proyecto localmente (npm start o yarn start).
Abre tu navegador y accede al servidor de desarrollo local (generalmente http://localhost:3000).

## Tecnologías Utilizadas

- Astro: Un moderno generador de sitios estáticos.
- HTML, CSS y JavaScript: Las tecnologías principales para construir la aplicación.

¡Siéntete libre de contribuir, compartir y utilizar este proyecto según tus necesidades!
