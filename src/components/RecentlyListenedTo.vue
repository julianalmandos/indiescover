<template>
    <div class="recentlyListenedTo">
        <RoundArtist class="recentlyListenedToArtist" v-for="(artist, index) in artists" :key="artist.name" :artist="artist" :size="sizes[index]"></RoundArtist>
    </div>
</template>

<script>
import RoundArtist from '@/components/RoundArtist.vue';

export default {
    name: 'RecentlyListenedTo',
    components: {
        RoundArtist
    },
    data() {
        return {
            sizes: [
                '100px',
                '145px',
                '180px',
                '145px',
                '100px'
            ],
            artists: [
                {
                    name: 'The Academic',
                    image: 'https://static.wixstatic.com/media/7a7757_a9418a67291d4d369d33de47241d5624~mv2.jpg/v1/fill/w_914,h_593,al_c,q_90/7a7757_a9418a67291d4d369d33de47241d5624~mv2.jpg'
                },
                {
                    name: 'Arctic Monkeys',
                    image: 'https://www.rockandpop.cl/wp-content/uploads/2019/03/Arctic-Monkeys.jpg'
                },
                {
                    name: 'Circa Waves',
                    image: 'https://indiehoy.com/wp-content/uploads/2020/03/circa-waves-Katy-Cummings.jpg'
                },
                {
                    name: 'HARBOUR',
                    image: 'https://cdn.citybeat.com/files/base/scomm/cb/image/2017/07/960w/MUSIC1_0802_Harbour_Provided.597f86ca5a0a1.jpg'
                },
                {
                    name: 'The Kooks',
                    image: 'https://billboard.com.ar/wp-content/uploads/2018/06/5ea055ffacbea67fdf75e96188b66158-1.jpg'
                }
            ]
        }
    }
}
</script>

<style scoped>

.recentlyListenedTo {
    height: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}

.recentlyListenedToArtist:not(:last-child) {
    margin-right: 50px;
}
</style>