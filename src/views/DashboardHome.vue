<template>
  <div class="home">
    <section class="welcome">
      <h2 class="welcome-message">Welcome, {{this.userInformation.display_name}}!</h2>
      <h3 class="welcome-submessage">It's good to have you back.</h3>
    </section>
    <section class="recently-listened-to">
      <ContentBox>
        <template v-slot:title>
          You've been recently listening to...
        </template>
        <template v-slot:content>
          <RecentlyListenedTo/>
        </template>
      </ContentBox>
    </section>
    <Statistics></Statistics>
  </div>
</template>

<script>
import Vuex from "vuex";
import axios from 'axios';
import ContentBox from '@/components/ContentBox.vue';
import RecentlyListenedTo from '@/components/RecentlyListenedTo.vue';
import Statistics from '@/components/Statistics.vue';

export default {
  components: {
    Statistics,
    ContentBox,
    RecentlyListenedTo
  },
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

.welcome-submessage {
  font-size: 1.5rem;
}

.recently-listened-to {
  margin: 70px 80px;
}
</style>