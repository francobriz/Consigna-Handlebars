# Consigna-Handlebars
***Construimos una app para realizar búsquedas de discografias***
- Usamos configuración de **Handlebars** para Express.
- La ruta inicial ("/") nos redirige directamente al endpoint ("/búsqueda"), para buscar discografias. Tomando como referencia:(nombre del artista, titulo del albun o año de lanzamiento).
- Allí renderizamos la vista **"resultados"** con una lista de los datos obtenidos.
- Al seleccionar uno de los resultados, nos dirige al endpoint ("/detalleDiscografia).
- Por último renderizamos la vista **"detalleDiscografia"**, mostrando como resultado la información completa de la discografia:
 * Artista.
 * Título.
 * Año de lanzamiento.
 * Tapa con la imagen del disco.