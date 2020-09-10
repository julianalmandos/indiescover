<template>
    <div
        class="box"
        :style="{ 'align-items': alignment}"
    >
        <h2 class="title"><slot name="title"></slot></h2>
        <div class="content"><slot name="content"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'ContentBox',
    props: {
        alignment: {
            type: String,
            default: 'center'
        }
    }
}
</script>

<style scoped>

.title {
    font-size: 1.5rem;
}

.box {
    display: flex;
    flex-direction: column;
}

</style>