# Proyecto LLM con Ollama

Este repositorio contiene un ejemplo práctico de cómo configurar y ejecutar modelos de lenguaje de gran tamaño (LLMs) localmente, utilizando tanto GPUs como CPUs. El proyecto utiliza Docker para simplificar el despliegue de los servicios y facilitar la integración con sistemas que ya tienen Ollama instalado.

## Objetivo

El objetivo de este repositorio es demostrar cómo se pueden levantar LLMs open source y aprovechar su flexibilidad permitiendo desarrollar aplicaciones con capacidades de interaccion con LLMs.

## Estructura del Repositorio

- src/: Contiene el código fuente de la API en Node.js.
- docker-compose.yml: Archivo de Docker Compose para levantar los servicios de Ollama y la API Node.js.
- Dockerfile: Define la configuración necesaria para construir el contenedor de la API Node.js.
- package.json: Manifiesto del proyecto Node.js con dependencias y scripts.

## Pre-requisitos

Para ejecutar este proyecto, necesitarás tener instalado:

- Docker
- Node.js (para ejecución local fuera de Docker)

## Instrucciones de Despliegue

Si tienes una instancia de Ollama instalada localmente en el SO recorda detenerla.

### Con Docker

1. Clona este repositorio: git clone <url-del-repositorio>
2. Desde el directorio raíz del proyecto, ejecuta: docker-compose up --build

Esto levantará dos contenedores:

- ollama: Servicio de Ollama corriendo en Docker.
- nodeapp: API en Node.js corriendo en Docker.

### Sin Docker (ejecución local de la API)

Si tienes una instancia de Ollama instalada localmente y prefieres trabajar directamente en tu sistema operativo:

1. Asegúrate de que Ollama esté corriendo localmente.
2. Desde el directorio raíz del proyecto, ejecuta: npm run dev

Esto levantará la API en Node.js localmente, conectándose a la instancia local de Ollama.
