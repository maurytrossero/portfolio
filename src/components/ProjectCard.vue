<!--components/ProjectCard.vue-->
<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="card"
  >
    <img :src="image" :alt="title" class="card-image" />
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
defineProps<{
  title: string
  description: string
  image: string
  stack: string[]
  link: string
  linkText?: string
}>()
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.2);
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
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

/* Dark Mode */
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
}
</style>
