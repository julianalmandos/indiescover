<template>
    <section class="statistics">
        <ContentBox class="statistics-box" :alignment="'flex-start'">
            <template v-slot:title>
                Your all-time favourites
            </template>
            <template v-slot:content>
                <FeaturedList/>
            </template>
        </ContentBox> 
        <ContentBox class="statistics-box" :alignment="'flex-start'">
            <template v-slot:title>
                Your rarest discoveries
            </template>
            <template v-slot:content>
                <FeaturedList/>
            </template>
        </ContentBox>
        <ContentBox class="statistics-box" :alignment="'flex-start'">
            <template v-slot:title>
                Your recent discoveries
            </template>
            <template v-slot:content>
                <FeaturedList/>
            </template>
        </ContentBox> 
    </section>  
</template>

<script>
import ContentBox from '@/components/ContentBox.vue';
import FeaturedList from '@/components/FeaturedList.vue';

export default {
    name: 'Statistics',
    components: {
        ContentBox,
        FeaturedList
    }
}
</script>

<style scoped>

.statistics {
  display: flex;
  margin: 0 50px;
  justify-content: space-around;
}

/*
Revisit this when checking out the responsive site.

.statistics-box {
  flex: 1 1 100%;
} 
*/

</style>