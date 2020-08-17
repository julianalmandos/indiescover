<template>
  <div class="landpage">
    <div class="information">
      <div>
        <div class="logo">
          <img class="logo-image" src="@/assets/logo-grey.png" alt="Indiescover Logo">
          <h1 class="logo-title">Indiescover</h1>
        </div>
      </div>
      <h6 class="subtitle">
        Ready to discover your next favourite band?<br>
        Connect your Spotify account and you're ready to go.
      </h6>
      <button
        class="connect-with-spotify"
        @click="authorizeSpotify()"
      >
        <strong><font-awesome-icon :icon="['fab', 'spotify']" size="lg"/> Connect my account</strong>
      </button>
    </div>
    <div class="image">

    </div>
  </div>
</template>

<script>
import config from '../config.js'
import querystring from 'querystring'
import Vuex from 'vuex'

export default {
  name: 'Home',
  methods: {
    authorizeSpotify() {
      window.location = 'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        client_id: config.CLIENT_ID,
        response_type: 'token',
        redirect_uri: 'http://localhost:8080/dashboard',
        scope: 'user-read-recently-played user-top-read',
        show_dialog: true
      })
    }
  }
}
</script>

<style scoped>

.landpage {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.connect-with-spotify {
  background-color: var(--secondary);
  border-radius: 15px;
  padding: 10px 20px;
  border: none;
  color: var(--backgroundColor);
  margin-top: 40px;
  cursor: pointer;
}

.connect-with-spotify:hover {
  background-color: var(--secondary);
  transform: scale(1.08);
}

.information {
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.image {
  flex: 1 1 0px;
}

.logo {
  display: flex;
  align-items: center;
  color: var(--red);
}

.logo-title {
  font-size: 5rem;
}

.logo-image {
  height: 4rem;
}

.subtitle {
  text-align: center;
  margin-top: 40px;
  font-size: 1.5rem;
}
</style>
