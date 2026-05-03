Proyecto Web en Equipo: Grupo N°25
Trabajo Práctico Grupal Nº 1 - IFTS N.°29

Enlace al Proyecto Desplegado: [Sitio en Vercel](https://tp-1-frontend-grupo25.vercel.app/)

Repositorio GitHub: [Código en GitHub](https://github.com/JulioAlegre-dev/TP1-Frontend-Grupo25)

📝 Descripción del Proyecto
Este proyecto es un sitio web colaborativo desarrollado como parte del Trabajo Práctico Nº 1. Consiste en una plataforma de presentación grupal que incluye una portada interactiva, una bitácora del proceso de desarrollo y páginas individuales para cada integrante. El objetivo es demostrar habilidades en la estructuración de archivos, diseño responsive (400px, 900px y 1200px), y la implementación de interactividad mediante JavaScript.

👥 Integrantes
Julio Alegre - Perfil de GitHub


Walter Ciancio - Perfil de GitHub


Guillermina Zen Cáffaro - Perfil de GitHub


🛠️ Tecnologías Utilizadas
Lenguajes: HTML5, CSS3, JavaScript (Vanilla).

Fuentes: Google Fonts (Poppins).

Iconografía: FontAwesome.

Despliegue: Vercel.

📂 Estructura de Archivos
El proyecto sigue una organización modular y jerárquica:

* Raíz (/): Directorio principal que contiene la portada y las páginas individuales.  

    * index.html: Portada principal del sitio.  

    * bitacora.html: Registro del proceso de desarrollo.  

    * guillermina.html: Tarjeta de presentación de Guillermina.  

    * julio.html: Tarjeta de presentación de Julio.  

    * walter.html: Tarjeta de presentación de Walter.  

* README.md: Documentación técnica del proyecto.  

* /css: Contiene style.css con los estilos globales y breakpoints de diseño adaptable (400px, 900px, 1200px).  

* /js: Carpeta con los archivos de interactividad dinámica (main.js y bitacora.js).  

* /img: Directorio central de recursos visuales:  

    * /inicio: Imágenes y recursos del header y portada (ej. work_team.svg).  

    * /conocenos: Avatares y fotos de perfil de los integrantes.  

    * /integrantes: Subcarpetas organizadas por miembro (/julio, /walter, /guillermina) que contienen sus respectivos archivos de /peliculas y /canciones (visualizadas como Álbumes).


🎨 Guía de Estilos
Paleta de Colores:


Fondo: #ffffff / #f2f2f2

Títulos: #1d273b

Acentos y Botones: #4d44df

Tipografías: Se utiliza Poppins para todo el sitio, garantizando legibilidad y estética moderna.

Privacidad: Siguiendo las recomendaciones, el uso de imágenes es mixto. Guillermina utiliza una fotografía real, mientras que otros integrantes optaron por avatares generados por IA para resguardar su privacidad.

⚡ JavaScript e Interactividad
Navegación Dinámica (Scroll Tracking): Implementamos un "escuchador de eventos" (window.onscroll) que detecta el desplazamiento del usuario. Cuando el usuario baja, el menú cambia automáticamente su apariencia (fondo y color de fuente), garantizando la legibilidad en todas las secciones de la página.  

Menú Hamburguesa (Responsive Navigation): Desarrollamos una funcionalidad desplegable para dispositivos móviles. Mediante la manipulación de clases CSS desde JS, permitimos que el menú se oculte o se muestre de forma fluida en pantallas pequeñas.  (Insertar captura de pantalla de la portada interactiva aquí)  

Páginas Individuales:
    Actualización Dinámica de Contenido: Cada tarjeta de presentación cuenta con funciones específicas de JavaScript que permiten al usuario interactuar con la información. Se implementaron métodos para desplegar u ocultar detalles adicionales (como intereses o habilidades técnicas) y actualizaciones de estilo en tiempo real para mejorar la experiencia de usuario.  (Insertar captura de pantalla de la interactividad en una tarjeta aquí)

🤖 Uso de Inteligencia Artificial
Hemos integrado la IA como un asistente técnico estratégico:

Herramientas: Gemini 3 Flash y Claude 3.5 Sonnet.

Uso en Contenido y Código:

Asistencia en el debugging de CSS para resolver conflictos de jerarquía y asegurar que las fotos se mantengan circulares (object-fit: cover).

Optimización de la lógica de los Media Queries para los breakpoints obligatorios (específicamente para evitar que el texto empuje la imagen en móviles).

Imágenes: Se utilizó el modelo Nano Banana 2 para crear avatares digitales que mantengan una estética coherente con el diseño del sitio.

📓 Bitácora (Resumen)
Fase de Estructura: Diseñamos una arquitectura modular de carpetas para organizar los recursos de cada integrante de forma independiente y prolija.

Decisión de Diseño: Implementamos una identidad visual basada en la tipografía Poppins y unificamos el formato de imagen circular para todos los perfiles, buscando un estilo profesional y coherente.

Desarrollo Técnico: Programamos la interactividad mediante JavaScript Vanilla, destacando el menú que cambia de color al hacer scroll y el sistema de navegación para móviles.

Ajuste de Diseño Adaptable: Optimizamos el sitio para los tres tamaños de pantalla obligatorios (400px, 900px y 1200px), corrigiendo problemas de lectura en dispositivos pequeños.

Desafío Detectado: Documentamos una inconsistencia visual en el menú hamburguesa de la página de Bitácora, la cual fue resuelta mediante la unificación de selectores CSS.

Este proyecto fue realizado para la materia [Nombre de la Materia] del IFTS N.°29.
