<script setup>
import {ref, computed, watch} from "vue";
const email = ref("");
const password = ref("");
const loggedIn = ref(false);
const query = ref("");

watch(query, (newQuery, oldQuery) => {
  if (query.value === "") {
    films.value = [];
  } else {
    searchFilms();
  }
});

console.log(loggedIn.value);

const handleLogin = (event) => {
  event.preventDefault();
  loggedIn.value = true;
  console.log(loggedIn.value);
}

const films = ref([]);

function searchFilms(){
  films.value = [
    {
      title: 'Titanic',
      released: '19 Dec 1997',
      director: 'James Cameron',
      actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
      plot: '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.',
      metascore: '75'
    },
    {
      title: 'Blade Runner',
      released: '25 Jun 1982',
      director: 'Ridley Scott',
      actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
      poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      plot: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
      metascore: '89'
    },
    {
      title: 'The Shining',
      released: '13 Jun 1980',
      director: 'Stanley Kubrick',
      actors: 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers',
      poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      plot: 'A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
      metascore: '63'
    }
  ]
}

const filteredFilms = computed(() => {
  return films.value.filter((film) => film.title.toLowerCase().includes(query.value.toLowerCase()));
})

const numberResults = computed(() => filteredFilms.value.length);

// const getStars = (metascore) => {
//   if (metascore === "N/A") return 0;
//   const score = parseInt(metascore, 10);
//   return Math.ceil(score / 20);
// };

const afficheMetascore = function(film){
  return'⭐'.repeat(Math.ceil(film.metascore / 20));
  // if (film.metascore >= 80) {
  //   return '⭐⭐⭐⭐⭐'
  // } else if (film.metascore >= 60) {
  //   return '⭐⭐⭐⭐'
  // } else if (film.metascore >= 40) {
  //   return '⭐⭐⭐'
  // } else if (film.metascore >= 20) {
  //   return '⭐⭐'
  // } else {
  //   return ''
  // }
}


</script>

<template>
  <div id="search-film">
    <form @submit.prevent="searchFilms">
      <label for="search" >Rechercher :</label>
      <input id="search" type="text" v-model="query" >
    </form>

    <p v-if="numberResults === 0" ></p>
    <p v-else> Le nombre de résultats : {{numberResults}}</p>

    <div id="login-form" v-show="!loggedIn">
      <form @submit="handleLogin">
        <h1>Authentification</h1>
        <p>Remplissez ce formulaire pour vous connecter.</p>
        <hr>

        <label for="email"><b>Email</b></label>
        <input type="text" v-model="email" placeholder="Entrez votre courriel" id="email" required>

        <label for="psw"><b>Mot de passe</b></label>
        <input type="password" v-model="password" placeholder="Entrez votre mot de passe" id="psw" required>

        <p><button type="submit">Se connecter</button></p>
      </form>
    </div>

    <div v-if="loggedIn">
      <ul class="films">
        <li class="film card" v-for="film in filteredFilms" :key="film.title">
          <h2>
            {{ film.title }}
            {{ afficheMetascore(film) }}
          </h2>
          <img :src="film.poster" :alt="`Poster of the movie ${film.title}`" />
          <p><strong>Released:</strong> {{ film.released }}</p>
          <p><strong>Director:</strong> {{ film.director }}</p>
          <p><strong>Actors:</strong> {{ film.actors }}</p>
          <p><strong>Plot:</strong> {{ film.plot }}</p>
          <p><strong>Metascore:</strong> {{ film.metascore }}</p>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>Attention, vous devez être connecté.</p>
    </div>
  </div>
</template>
