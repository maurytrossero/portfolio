<!-- views/PortfolioView.vue -->
<template>
  <section class="portfolio-section">
    <h2 class="portfolio-title">
      <span class="portfolio-icon">🧰</span>
      <span>Proyectos Destacados</span>
    </h2>

    <p class="portfolio-intro">
      Soy desarrollador/a web con experiencia en proyectos modernos usando tecnologías actuales. Aquí encontrarás algunos de mis trabajos más destacados que reflejan mis habilidades y estilo.  
      Si querés conocer más sobre mi trayectoria profesional, podés descargar mi hoja de vida.
    </p>

    <div class="cv-download">
      <a
        href="https://drive.google.com/file/d/1moI-ehmkfTTu6d2uIkBcWIWbruLT0tNm/view?usp=drive_link"
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
    title: 'Eventizate',
    description: 'Plataforma web para crear invitaciones digitales personalizadas para cumpleaños, bodas y eventos sociales. Permite diseñar y compartir invitaciones interactivas con funcionalidades como confirmación de asistencia, cuenta regresiva y galerías multimedia.',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/uvmpyu0maf6b59z4c7uk1/imagenEventizate1.jpg?rlkey=9phuw09gk7a1lvuzvz4d4u6ef&st=zyevlx6j',
      'https://dl.dropboxusercontent.com/scl/fi/9bj6hik2gylrqxuo8kjy9/imagenEventizate2.jpg?rlkey=1srgt3owic8nomogqb0k1x7f0&st=0no5fm9m',
      'https://dl.dropboxusercontent.com/scl/fi/au77f16urcmq3hnu20nrs/imagenEventizate3.jpg?rlkey=zakm18zajy3fc9381ns3toa26&st=o24ii7dk',
      'https://dl.dropboxusercontent.com/scl/fi/3v532uxoukgyoz9xpb18c/imagenEventizate4.jpg?rlkey=p56ubxvy01o4d24qpprnrxqdc&st=je2bd0b5'
    ],
    stack: ['Vue 3', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    link: 'https://eventizate.mtproducciones.com.ar/',
    linkText: 'Ver Proyecto'
  },
  {
    title: 'UDEC-Freyre',
    description: 'Sistema desarrollado con Laravel para la gestión de cursos, talleres y programas de la municipalidad de Freyre. Incluye módulos para administración, registro de docentes y alumnos.',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/afmtezzuqk7us8xjk78lo/udec1.jpg?rlkey=1uluqdc85q1u6j06attiohayg&st=wr9szyp7',
      'https://dl.dropboxusercontent.com/scl/fi/vvpx9rm71qdta8jaq8b36/udec2.jpg?rlkey=ro3kehklatuow5h42914fq3pp&st=typachy2',
      'https://dl.dropboxusercontent.com/scl/fi/vvpx9rm71qdta8jaq8b36/udec2.jpg?rlkey=ro3kehklatuow5h42914fq3pp&st=typachy2', // repetido, podés omitirlo si querés
      'https://dl.dropboxusercontent.com/scl/fi/0hxrczji5haefhexk18jb/udec4.jpg?rlkey=n71472tbra5myn0rz4puz1t9g&st=srcl5dzf'
    ]
,
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    link: 'https://github.com/maurytrossero/udec-freyre',
    linkText: 'Ver Código en GitHub'
  }
]

</script>

<style scoped>
.portfolio-section {
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
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
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: #374151;
  line-height: 1.5;
}

.cv-download {
  margin-bottom: 3rem;
}

.btn-cv {
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.btn-cv:hover {
  background-color: #1e40af;
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 640px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 🌙 DARK MODE */
@media (prefers-color-scheme: dark) {
  .portfolio-section {
    background-color: #1f2937;
    color: #f3f4f6;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  .portfolio-title {
    color: #f3f4f6;
  }

  .portfolio-icon {
    color: #fbbf24;
  }

  .portfolio-intro {
    color: #d1d5db;
  }

  .btn-cv {
    background-color: #3b82f6;
    color: #f3f4f6;
  }

  .btn-cv:hover {
    background-color: #2563eb;
  }
}
</style>
