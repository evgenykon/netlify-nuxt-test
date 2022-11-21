<template>
  <main id="tv" class="p-0 m-0">
    <div class="timer bg-black h-15 w-full">23:59:48 <button @click="playVideo">play</button></div>
    <client-only>
      <div class="video-container">

        <youtube ref="yt" :video-id="videoId" player-width="1280" player-height="750" :player-vars="playerVars" />

        <!-- video-embed no-ssr v-bind:src="`https://www.youtube.com/watch?v=${videoId}`"></video-embed -->
      </div>
    </client-only>
    <!-- section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Nuxt — Tailwind — Netlify CMS</h1>
      <h2 class="subtitle text-center">Boilerplate</h2>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section -->
  </main>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      videoId: null,
      playerVars: {
        autoplay: 1
      }
    }
  },
  mounted() {

  },
  methods: {
    playVideo() {
      this.videoId = 'OU8JK59ET4w';
    },
  },
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
.timer {
  position: fixed;
  z-index: 999;
}
</style>