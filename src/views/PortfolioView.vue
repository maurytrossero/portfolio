<!-- views/PortfolioView.vue -->
<template>
  <section class="portfolio-section">
    <h2 class="portfolio-title">
      <span class="portfolio-icon">🧰</span>
      <span>Proyectos Destacados</span>
    </h2>

    <p class="portfolio-intro">
      Concibo el desarrollo web como el arte de dar soluciones eficientes a través de la tecnología. 
      Mi objetivo en cada proyecto es traducir lógica de negocio compleja en plataformas intuitivas, 
      utilizando herramientas modernas para optimizar procesos y garantizar experiencias digitales sin fricciones. 
      En los siguientes trabajos podés ver cómo aplico esta filosofía en escenarios reales, 
      o descargar mi hoja de vida para conocer mi trayectoria completa
    </p>

    <div class="cv-download">
      <a
        href="https://drive.google.com/file/d/1w2z7GTyt9vfTJRSDWdtjfrC4IYQbQZF9/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-cv"
      >
        Descargar Hoja de Vida (PDF)
      </a>
    </div>

    <div class="project-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

interface Project {
  title: string
  description: string
  images: string[]
  stack: string[]
  link: string
  linkText?: string
}

const projects: Project[] = [
  {
    title: 'Plataforma de Gestión para Gimnasios',
    description: 'Sistema integral para entrenadores y gimnasios. Incluye un gestor avanzado de rutinas y un temporizador inteligente con asistencia por voz (Web Speech API) y feedback multisensorial. Permite compilar rutinas y exportarlas como imágenes al vuelo directamente desde el navegador.',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hqlgsyytv2dh68uolo6af/sistema-gym.png?rlkey=zag5vyfa5tez6si26yrlzijlp&st=cj23v1o3',
      'https://dl.dropboxusercontent.com/scl/fi/ulyote2g1l7cred0o21p2/sistema-gym-2.png?rlkey=pqdcffhqvg5wk5lcqvssq29sc&st=zi0cy6w7',
      'https://dl.dropboxusercontent.com/scl/fi/fp8blpoxrvhpxpk0wuioz/sistema-gym-3.png?rlkey=pwh900hma1z3ffjtmo28zo9v2&st=q1opte3m'
    ],
    stack: ['React', 'TypeScript', 'Firebase', 'CSS Modules'],
    link: 'https://sistema-gimnasio-mu.vercel.app/', // <-- Agrega tu link real
    linkText: 'Ver Proyecto'
  },
{
    title: 'Eventizate',
    description: 'Plataforma SaaS integral para eventos e invitaciones digitales. Incluye un panel modular de administración (RSVP, mesas, agenda) y experiencias en tiempo real para la fiesta, como Trivias y "PhotoLive": un sistema donde los invitados comparten fotos vía QR para proyectarlas al instante en pantalla gigante.',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/uvmpyu0maf6b59z4c7uk1/imagenEventizate1.jpg?rlkey=9phuw09gk7a1lvuzvz4d4u6ef&st=zyevlx6j',
      'https://dl.dropboxusercontent.com/scl/fi/9bj6hik2gylrqxuo8kjy9/imagenEventizate2.jpg?rlkey=1srgt3owic8nomogqb0k1x7f0&st=0no5fm9m',
      'https://dl.dropboxusercontent.com/scl/fi/au77f16urcmq3hnu20nrs/imagenEventizate3.jpg?rlkey=zakm18zajy3fc9381ns3toa26&st=o24ii7dk',
      'https://dl.dropboxusercontent.com/scl/fi/3v532uxoukgyoz9xpb18c/imagenEventizate4.jpg?rlkey=p56ubxvy01o4d24qpprnrxqdc&st=je2bd0b5'
    ],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Firebase', 'Cloudinary'],
    link: 'https://eventizate.mtproducciones.com.ar/',
    linkText: 'Ver Proyecto'
  },
  {
    title: 'UDEC-Freyre',
    description: 'Sistema desarrollado con Laravel para la gestión de cursos, talleres y programas de la municipalidad de Freyre. Incluye módulos para administración, registro de docentes y alumnos.',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/afmtezzuqk7us8xjk78lo/udec1.jpg?rlkey=1uluqdc85q1u6j06attiohayg&st=wr9szyp7',
      'https://dl.dropboxusercontent.com/scl/fi/vvpx9rm71qdta8jaq8b36/udec2.jpg?rlkey=ro3kehklatuow5h42914fq3pp&st=typachy2',
      'https://dl.dropboxusercontent.com/scl/fi/0hxrczji5haefhexk18jb/udec4.jpg?rlkey=n71472tbra5myn0rz4puz1t9g&st=srcl5dzf'
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    link: 'https://github.com/maurytrossero/udec-freyre',
    linkText: 'Ver Código en GitHub'
  },
  {
    title: 'Course Platform',
    description: 'Aplicación web educativa que permite crear, editar y administrar clases con recursos multimedia, niveles y categorías. Desarrollado con Vue 3, Laravel, Inertia.js y Tailwind CSS. Incluye formularios reutilizables, validación backend y diseño responsivo.',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/82vv5o76zqjef6atjte1g/course-platform.jpg?rlkey=5pp1000i5k7muwyegx97k1wo5'
    ],
    stack: ['Vue 3', 'Laravel', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
    link: 'https://github.com/maurytrossero/course-platform',
    linkText: 'Ver Código en GitHub'
  }
]
</script>

<style scoped>
/* Tu CSS se mantiene igual, es excelente */
.portfolio-section {
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05); /* Sombra más suave y moderna */
  font-family: 'Segoe UI', Roboto, sans-serif;
  text-align: center;
  color: #1f2937;
}

.portfolio-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1f2937;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.portfolio-icon {
  color: #d97706;
  font-size: 2rem;
}

.portfolio-intro {
  font-size: 1.1rem;
  max-width: 650px; /* Reduce el ancho para acortar las líneas */
  line-height: 1.7; /* Aumenta el espacio entre líneas */
  margin: 0 auto 2.5rem auto; /* Más espacio abajo (2.5rem) */
  color: #94a3b8; /* Un gris apenas más claro para modo oscuro */
}

/* Ajuste para separar el botón de las tarjetas */
.cv-download {
  margin-bottom: 4rem; /* Dale bastante aire antes de los proyectos */
}

.btn-cv {
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
}

.btn-cv:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px); /* Pequeño salto al hacer hover */
  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 🌙 DARK MODE */
@media (prefers-color-scheme: dark) {
  .portfolio-section {
    background-color: #1f2937;
    color: #f3f4f6;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  .portfolio-title {
    color: #f3f4f6;
  }

  .portfolio-intro {
    color: #d1d5db;
  }

  .btn-cv {
    background-color: #3b82f6;
  }

  .btn-cv:hover {
    background-color: #2563eb;
  }
  .stack-item {
    background-color: rgba(59, 130, 246, 0.15); /* Fondo azul semitransparente */
    color: #93c5fd; /* Texto celeste claro */
    border: 1px solid rgba(59, 130, 246, 0.3); /* Borde sutil */
  }
}

/* 📱 AJUSTES MOBILE */
@media (max-width: 768px) {
  .portfolio-section {
    padding: 2rem 1rem; /* Reduce el padding lateral y superior/inferior */
  }

  .portfolio-title {
    font-size: 1.6rem; /* Evita que el título se rompa en varias líneas de forma incómoda */
    margin-bottom: 1rem;
  }

  .portfolio-icon {
    font-size: 1.5rem; /* Ajusta el tamaño del emoji */
  }

  .portfolio-intro {
    font-size: 0.95rem; /* Texto más pequeño y legible en mobile */
    line-height: 1.5; /* Interlineado más compacto */
    margin-bottom: 2rem; 
  }

  .cv-download {
    margin-bottom: 2.5rem; /* Acorta la distancia exagerada hacia los proyectos */
  }

  .btn-cv {
    width: 100%; /* El botón ocupa todo el ancho, mejorando el área táctil (UX) */
    text-align: center;
    box-sizing: border-box;
  }
}
</style>