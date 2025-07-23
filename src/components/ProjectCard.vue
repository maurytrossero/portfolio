<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="card"
  >
    <!-- Carrusel de imágenes -->
    <div class="carousel-container">
      <transition name="fade" mode="out-in">
        <img
          :src="images[currentIndex]"
          :key="images[currentIndex]"
          :alt="title"
          class="card-image"
        />
      </transition>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <ul class="stack-list">
        <li v-for="tech in stack" :key="tech" class="stack-item">{{ tech }}</li>
      </ul>
      <span class="link-text">{{ linkText || 'Ver proyecto' }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { images } = defineProps<{
  title: string
  description: string
  images: string[]
  stack: string[]
  link: string
  linkText?: string
}>()

const currentIndex = ref(0)
let intervalId: number

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>


<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  transform: scale(1);
}

.card:hover {
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.2);
  transform: scale(1.02); /* <- pequeña animación */
}


.carousel-container {
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  border: 2px solid #d1d5db; /* Gris claro */
  border-radius: 0.5rem;
  background-color: #111827; /* Simula marco de pantalla oscura */
  padding: 0.5rem;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.4);
}


.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}

.card-content {
  padding: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}

.card-description {
  font-size: 1rem;
  margin: 0;
  color: #374151;
  flex-grow: 1;
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.stack-item {
  background-color: #e5e7eb;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1f2937;
}

.link-text {
  color: #2563eb;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: auto;
}

.card:hover .link-text {
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 🌙 Dark Mode */
@media (prefers-color-scheme: dark) {
  .card {
    background-color: #374151;
    color: #f3f4f6;
  }

  .card-description {
    color: #d1d5db;
  }

  .stack-item {
    background-color: #4b5563;
    color: #e5e7eb;
  }

  .link-text {
    color: #60a5fa;
  }
.stack-item {
    background-color: #60a5fa; /* Azul brillante */
    color: #0f172a;
  }
.carousel-container {
    border: 2px solid #4b5563;
    background-color: #1f2937;
  }  
}

</style>
