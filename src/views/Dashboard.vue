<template>
  <div class="about">
    <div class="dashboard">
      <header class="navbar">
        <ul class="navigation-bar">
          <li class="nav-item"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/">Discover</router-link></li>
          <li class="nav-item"><router-link to="/">About</router-link></li>
        </ul>
        <div class="logo">
          <img class="logo-image" src="@/assets/logo-grey.png" alt="Indiescover Logo">
          <h1 class="logo-title">Indiescover</h1>
        </div>
        <ul class="configuration-bar">
          <li class="nav-item"><router-link to="/">Settings</router-link></li>
          <li class="nav-item"><router-link to="/">Logout</router-link></li>
        </ul>
      </header>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      tracks: []
    }
  },
  computed: {
    ...Vuex.mapState(['accessToken', 'userInformation'])
  },
  methods: {
    ...Vuex.mapMutations(['setToken']),
    getUserInformation() {
      axios.get('https://api.spotify.com/v1/me', {
        headers: {
          "Authorization": "Bearer " + this.accessToken
        }
      })
        .then(res => {
          this.$store.commit('setUserInformation', res.data);
        })
    },
    getTopArtistsForUser() {
      axios.get('https://api.spotify.com/v1/me/top/artists', {
        params: {
          limit: 50
        },
        headers: {
          "Authorization": "Bearer " + this.accessToken
        }
      })
        .then(res => {
        })
    }
  },
  created() {
    //Save token
    this.setToken(window.location.hash.split('=')[1].split('&')[0]);
    this.getUserInformation();
    this.getTopArtistsForUser();
    //Save expiration time so we can compare it to the actual datetime
    axios.get('https://api.spotify.com/v1/me/player/recently-played', {
      params: {
        limit: 50
      },
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    })
      .then(res => {
        //Get the data
        this.tracks = res.data.items;
        //Fetch for album images
      })
  },
}
</script>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--secondary);
}

.album-image:hover {
  transform: scale(1.05);
  cursor: pointer;
}

a {
  text-decoration: none;
}

.dashboard {
  width: 70%;
  min-height: 100vh;
  margin-top: 80px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: var(--backgroundColor);
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
}

li {
  display: inline;
}

ul {
  margin: 0;
  padding: 0;
}

.navigation-bar {
  list-style: none;
  margin-left: 100px;
  flex: 1 1 0px;
  margin-top: 5px;
}

.configuration-bar {
  list-style: none;
  flex: 1 1 0px;
  margin-right: 100px;
  display: flex;
  justify-content: flex-end;
}

.nav-item > a {
  color: var(--black);
  border-bottom: 2px solid transparent;
}

.nav-item > a:hover {
  border-bottom: 2px solid var(--red);
}

.configuration-bar > li {
  margin-left: 50px;
}

.navigation-bar > li {
  margin-right: 50px;
}

.navbar {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  height: 100px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-family: 'Overpass', sans-serif;
}

.logo {
  flex: 1 1 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red);
}

.logo-title {
  font-size: 2rem;
  font-family: 'Overpass', sans-serif;
}

.logo-image {
  height: 2rem;
}
</style>
