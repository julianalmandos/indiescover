<template>
    <li class="featured-list-item">
        <img class="featured-list-item-image" :src="item.image" alt="">
        <span>{{item.description}}</span>
    </li>
</template>

<script>
export default {
    name: 'FeaturedListItem',
    props: [
        'item'
    ]
}
</script>

<style scoped>

.featured-list-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 35px;
}

.featured-list-item:not(:first-child) {
    margin-top: 20px;
}

.featured-list-item-image {
    margin-right: 20px;
    height: 35px;
    width: 35px;
}
</style>