<template>
    <ol class="featured-list">
        <FeaturedListItem v-for="item in items" :item="item" :key="item.description"></FeaturedListItem>
    </ol>
</template>

<script>
import FeaturedListItem from '@/components/FeaturedListItem.vue';

export default {
    name: 'FeaturedList',
    components: {
        FeaturedListItem
    },
    data() {
        return {
            items: [
                {
                    description: 'HARBOUR',
                    image: 'https://cdn.citybeat.com/files/base/scomm/cb/image/2017/07/960w/MUSIC1_0802_Harbour_Provided.597f86ca5a0a1.jpg'
                },
                {
                    description: 'HARBOUR',
                    image: 'https://cdn.citybeat.com/files/base/scomm/cb/image/2017/07/960w/MUSIC1_0802_Harbour_Provided.597f86ca5a0a1.jpg'
                },
                {
                    description: 'HARBOUR',
                    image: 'https://cdn.citybeat.com/files/base/scomm/cb/image/2017/07/960w/MUSIC1_0802_Harbour_Provided.597f86ca5a0a1.jpg'
                },
                {
                    description: 'HARBOUR',
                    image: 'https://cdn.citybeat.com/files/base/scomm/cb/image/2017/07/960w/MUSIC1_0802_Harbour_Provided.597f86ca5a0a1.jpg'
                }   
            ]
        }
    }
}
</script>

<style>

.featured-list {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
}

</style>