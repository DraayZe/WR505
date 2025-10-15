<script setup>
import { ref } from 'vue'
import FilmService from '@/services/FilmService'

const query = ref('')
const films = ref([])
const loading = ref(false)
const error = ref(null)

const searchFilms = async () => {
  if (!query.value.trim()) {
    error.value = 'Veuillez entrer un terme de recherche'
    return
  }

  // Vérifier que le titre fait au moins 1 caractère
  if (query.value.trim().length < 1) {
    error.value = 'Le titre doit contenir au moins 1 caractère'
    return
  }

  error.value = null
  loading.value = true

  try {
    const response = await FilmService.search(query.value.trim())
    films.value = response.films || response.movies || response.results || response
  } catch (err) {
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      error.value = '❌ Impossible de se connecter au serveur. Vérifiez que le backend est démarré sur http://localhost:3030'
    } else if (err.message.includes('403') || err.message.includes('Forbidden')) {
      error.value = '🔒 Accès refusé. Vous devez être connecté pour effectuer cette recherche.'
    } else if (err.message.includes('401') || err.message.includes('Unauthorized')) {
      error.value = '🔐 Session expirée. Veuillez vous reconnecter.'
    } else if (err.message.includes('title query parameter')) {
      error.value = '⚠️ Le titre de recherche est requis (au moins 1 caractère)'
    } else {
      error.value = `❌ ${err.message}`
    }
    films.value = []
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div id="search-film">
    <h1>Rechercher un film</h1>

    <form @submit.prevent="searchFilms">
      <div class="search-container">
        <input
          type="text"
          v-model="query"
          placeholder="Entrez le nom d'un film..."
          :disabled="loading"
        />
        <button type="submit" :disabled="loading">
          {{ loading ? 'Recherche...' : 'Rechercher' }}
        </button>
      </div>
    </form>

    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="films.length > 0" class="results">
      <h2>Résultats ({{ films.length }})</h2>
      <div class="films-grid">
        <div v-for="film in films" :key="film.imdbid" class="film-card">
          <img
            v-if="film.poster"
            :src="film.poster"
            :alt="film.title"
          />
          <div class="film-info">
            <h3>{{ film.title }}</h3>
            <p><strong>Année :</strong> {{ film.year }}</p>
            <p><strong>Sortie :</strong> {{ film.released }}</p>
            <p><strong>Durée :</strong> {{ film.runtime }}</p>
            <p><strong>Réalisateur :</strong> {{ film.director }}</p>
            <p><strong>Acteurs :</strong> {{ film.actors }}</p>
            <p><strong>Note IMDb :</strong> ⭐ {{ film.imdbrating }}</p>
            <p v-if="film.boxoffice && film.boxoffice !== 'N/A'"><strong>Box Office :</strong> {{ film.boxoffice }}</p>
            <p class="overview">{{ film.plot }}</p>
          </div>
        </div>
      </div>
    </div>

    <p v-else-if="!loading && query" class="no-results">
      Aucun film trouvé pour "{{ query }}"
    </p>
  </div>
</template>


<style scoped>
#search-film {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error {
  color: #d32f2f;
  background-color: #ffebee;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.no-results {
  text-align: center;
  color: #666;
  font-style: italic;
}

.results h2 {
  margin-bottom: 20px;
}

.films-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.film-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.film-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.film-card img {
  width: 100%;
  height: auto;
  display: block;
}

.film-info {
  padding: 15px;
}

.film-info h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.film-info p {
  margin: 5px 0;
  color: #666;
  font-size: 14px;
}

.overview {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
