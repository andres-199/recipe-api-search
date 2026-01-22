# Express Pagination Middleware

## 📖 Descripción

Esta es una aplicación de ejemplo que demuestra cómo implementar **paginación y búsqueda** en una API REST usando Express.js y middleware personalizado.

La aplicación expone un endpoint de recetas que permite:
- ✅ Paginar resultados
- ✅ Buscar recetas por nombre
- ✅ Limitar la cantidad de resultados por página

## 🎯 ¿Qué enseña esta app?

Esta aplicación es un ejemplo educativo que demuestra:

1. **Creación de Middleware Personalizado**: Cómo crear un middleware que procesa parámetros de consulta y los prepara para su uso en las rutas
2. **Paginación de Datos**: Implementación de paginación usando `skip` y `limit`
3. **Búsqueda con Expresiones Regulares**: Filtrado de datos usando RegExp para búsquedas case-insensitive
4. **Arquitectura de API REST**: Estructura básica de una API con Express.js
5. **Testing con Mocha y Chai**: Pruebas automatizadas para validar la funcionalidad

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar el servidor
npm start

# Ejecutar tests
npm test
```

El servidor se ejecutará en `http://localhost:3000`

## 📡 Endpoints

### GET /recipes

Obtiene una lista paginada de recetas con soporte para búsqueda.

**Parámetros de Query:**
- `page` (opcional): Número de página (default: 1)
- `limit` (opcional): Cantidad de resultados por página (default: 3)
- `search` (opcional): Término de búsqueda para filtrar recetas

**Ejemplos:**

```bash
# Obtener la primera página (3 recetas)
GET /recipes

# Obtener la segunda página con 5 recetas por página
GET /recipes?page=2&limit=5

# Buscar recetas que contengan "chicken"
GET /recipes?search=chicken

# Combinar búsqueda y paginación
GET /recipes?search=oatmeal&page=1&limit=2
```

**Respuesta:**

```json
{
  "page": 1,
  "limit": 3,
  "skip": 0,
  "search": "",
  "data": [
    { "id": 1, "name": "Crock Pot Roast" },
    { "id": 2, "name": "Roasted Asparagus" },
    { "id": 3, "name": "Curried Lentils and Rice" }
  ]
}
```

## 🔧 Tecnologías

- **Express.js**: Framework web para Node.js
- **Mocha & Chai**: Framework de testing
- **Morgan**: Logger de peticiones HTTP

## 📝 Estructura del Proyecto

```
├── app.js              # Configuración principal de Express
├── middleware.js       # Middleware de paginación y búsqueda
├── routes/
│   └── recipes.js      # Rutas de la API de recetas
├── recipes.json        # Datos de ejemplo
└── test/               # Tests automatizados
```

## 💡 Concepto Clave: El Middleware

El archivo `middleware.js` es el corazón de esta aplicación. Procesa los parámetros de query y crea un objeto `context` que contiene:

- `page`: Página actual
- `limit`: Cantidad de resultados por página
- `skip`: Cantidad de registros a saltar (calculado automáticamente)
- `searchTerm`: Término de búsqueda
- `search`: RegExp para búsqueda case-insensitive

Este patrón permite que las rutas se mantengan limpias y enfocadas en la lógica de negocio, mientras que el middleware maneja la preparación de datos.
