<template>
    <div class="roundArtist" :style="maxWidthStyle">
        <img
            class="image"
            :style="imageStyle"
            :src="artist.image"
            alt=""
        >
        <h3
            class="artist"
            :style="maxWidthStyle"
        >
            {{artist.name}}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'RoundArtist',
    props: {
        artist: {
            type: Object
        },
        size: {
            type: String,
            default: '180px'
        }
    },
    data() {
        return {
            maxWidthStyle: {
                'max-width': this.size
            },
            imageStyle: {
                width: this.size,
                height: this.size
            }
        }
    }
}
</script>

<style scoped>

.roundArtist {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image {
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.artist {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>