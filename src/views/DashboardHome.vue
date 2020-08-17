<template>
  <div class="home">
    <section class="welcome">
      <h1 class="welcome-message">Welcome, {{this.userInformation.display_name}}!</h1>
      <h2>It's good to have you back.</h2>
    </section>
    <section class="recently-listened-to">
      <h2>You've been recently listening to...</h2>
      <div class="recently-listened-to-tracks">
        <div class="recently-listened-to-track-container" v-for="track in recentlyListenedTracks" :key="track.id">
          <img class="album-image" :src="getAlbumImageForTrack(track)" :alt="track.track.album.name"/>
          <h3 class="recently-listened-to-trackname">{{track.track.artists[0].name}}</h3>
          <h5>{{track.track.name}}</h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vuex from "vuex";
import axios from 'axios';

export default {
  data() {
    return {
        recentlyListenedTracks: []
    }
  },
  computed: {
    ...Vuex.mapState(['accessToken','userInformation']),
  },
  methods: {
    getAlbumImageForTrack(track) {
      console.log(track.track.album.images[1].url);
      return track.track.album.images[1].url;
    },
    getRecentlyListenedTo() {
      axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        params: {
            limit: 4
        },
        headers: {
            "Authorization": "Bearer " + this.accessToken
        }
      })
        .then(res => {
            //Get the data
            this.recentlyListenedTracks = res.data.items;
            console.log(this.recentlyListenedTracks);
            //Fetch for album images
        })
    }
  },
  created() {
    this.getRecentlyListenedTo();
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

.welcome {
  text-align: center;
  background-image: url('../assets/welcome.jpg');
  background-color: var(--lightRed);
  color: var(--backgroundColor);
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.welcome-message {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.recently-listened-to {
  margin: 100px 80px;
}

.recently-listened-to-tracks {
  display: flex;
  color: var(--black);
  margin-top: 15px;
  gap: 15px;
}

.recently-listened-to > h2 {
  margin-bottom: 5px;
}

.recently-listened-to-trackname {
  margin-top: 10px;
  color: var(--black);  
}

.recently-listened-to-track-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.album-image {
  height: 250px;
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}
</style>