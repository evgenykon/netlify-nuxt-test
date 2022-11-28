<template>
    <div class="video-container">
        <youtube v-if="playerType === 'youtube'" ref="yt" :video-id="videoId" player-width="1280" player-height="750"
            :player-vars="playerVars" v-on:playing="onPlaying" v-on:ended="onEnded" />

        <iframe ref="peertube" v-if="playerType === 'peertube'"
            v-bind:src="`https://tube.xy-space.de/videos/embed/${videoId}?autoplay=1&api=1&muted=${muted}`"
            frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups"></iframe>

    </div>
</template>

<script>
export default {
    props: {
        videoId: {
            type: String
        },
        playerType: {
            type: String
        },
        isFirst: {
            type: Boolean
        },
        volume: {
            type: Number
        }
    },
    data() {
        return {
            playerVars: {
                autoplay: 1,
                modestbranding: 0,
                rel: 0,
                showinfo: 0
            },
            webtorrentClient: null
        }
    },
    async mounted() {
    },
    methods: {
        onPlaying(e) {
            this.$emit('playing', e);
        },
        onEnded(e) {
            this.$emit('ended', e);
        }
    },
    computed: {
        muted() {
            return this.isFirst ? '1' : '0';
        }
    }
}
</script>

<style lang="pcss">
.video-container {
  width: 100vw;
  height: 100vh;
}
.video-container iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  z-index: 0;
}
</style>