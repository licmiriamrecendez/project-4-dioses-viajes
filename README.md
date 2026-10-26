# 4 Dioses Viajes ✈️

Sitio web de una agencia de viajes ubicada en Tonalá, Jalisco, México.

Este proyecto fue desarrollado como parte de mi formación en desarrollo web en TripleTen. Su objetivo es presentar los servicios de la agencia, facilitar el contacto con los clientes y permitirles explorar información de distintos países.

## Funcionalidades

- Página principal con información de la agencia.
- Secciones de excursiones, viajes a la playa y paquetes internacionales.
- Información sobre vuelos, viajes en autobús y grupos.
- Promociones y datos bancarios.
- Página "Sobre nosotros" con información del equipo.
- Página "Sobre la autora" con información de la desarrolladora.
- Explorador de países con búsqueda por nombre.
- Visualización de banderas, capitales y regiones.
- Botón para mostrar más países.
- Enlaces de WhatsApp para solicitar cotizaciones.
- Diseño adaptable a computadoras, tabletas y celulares.
- Estados de carga, error y resultados vacíos al consultar la API.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- HTML5
- CSS3
- React Router
- Fetch API
- Git y GitHub

## API externa

La sección "Explora destinos" consulta información de países mediante la API pública CountriesNow:

https://countriesnow.space/

Se utilizan datos de banderas y capitales, junto con una biblioteca de códigos de países para identificar sus regiones.

## Instalación y ejecución

1. Clona el repositorio:

   git clone https://github.com/licmiriamrecendez/project-4-dioses-viajes.git

2. Entra a la carpeta:

   cd project-4-dioses-viajes

3. Instala las dependencias:

   npm install

4. Inicia el servidor de desarrollo:

   npm run dev

5. Abre en el navegador la dirección que indique Vite.

## Compilación de producción

Para generar la versión de producción:

npm run build

Los archivos compilados se generan en la carpeta `dist`.

## Autora

Miriam Recendez

Estudiante de desarrollo web en TripleTen y creadora de este sitio web.

## Repositorio

https://github.com/licmiriamrecendez/project-4-dioses-viajes

## Sitio publicado

La aplicación está disponible en Vercel:

https://project-4-dioses-viajes.vercel.app
