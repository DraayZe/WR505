<script setup>
import { ref, computed, watch, onMounted } from "vue";
import Film from "@/components/Film.vue";

const query = ref("");
const films = ref([]);

import { useSession } from '@/stores/session'
const session = useSession()

function searchFilms() {
  films.value = [
    {
      title: "Titanic",
      released: "19 Dec 1997",
      director: "James Cameron",
      actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
      poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      plot: "84 years later, a 100 year-old woman named Rose tells the story...",
      metascore: "75",
    },
    {
      title: "Blade Runner",
      released: "25 Jun 1982",
      director: "Ridley Scott",
      actors: "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      plot: "A blade runner must pursue and terminate four replicants...",
      metascore: "89",
    },
    {
      title: "The Shining",
      released: "13 Jun 1980",
      director: "Stanley Kubrick",
      actors: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
      poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      plot: "A family heads to an isolated hotel for the winter...",
      metascore: "63",
    },
  ];
}

watch(query, (newQuery) => {
  if (newQuery === "") {
    films.value = [];
  } else {
    searchFilms();
  }
});

const filteredFilms = computed(() =>
  films.value.filter((film) =>
    film.title.toLowerCase().includes(query.value.toLowerCase())
  )
);

const numberResults = computed(() => filteredFilms.value.length);

onMounted(() => {
  document.getElementById("search").focus();
});
</script>

<template> <div>
  <p v-if="session.loggedIn">✅ Connecté</p>
  <p v-else>❌ Non connecté</p>
</div>

  <div id="search-film">
    <form @submit.prevent="searchFilms">
      <label for="search">Rechercher :</label>
      <input id="search" type="text" v-model="query" placeholder="Recherchez un film" />
    </form>

    <p v-if="numberResults > 0">Le nombre de résultats : {{ numberResults }}</p>

    <ul class="films">
      <Film v-for="film in filteredFilms" :key="film.title" :film="film" />
    </ul>
  </div>
</template>
