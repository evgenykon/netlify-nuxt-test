<template>
  <main id="tv" class="p-0 m-0">

    <client-only>
      <new-year-back-timer target-moment="2023-01-01 00:00:00" v-on:seconds-else="onBackTimerSecondsElse">
      </new-year-back-timer>
    </client-only>

    <client-only>
      <video-player v-if="isPlayerShow" v-bind:video-id="videoId" v-bind:player-type="playerType"
        v-bind:is-first="isFirst" v-on:playing="onPlaying" v-on:ended="onEnded" />
    </client-only>

    <greetings-modal v-if="!isPlayerShow">
      <div class="grid justify-items-center pb-3">
        <h1>Свободное Новогоднее TV</h1>
      </div>
      <p>В эпоху засилия рекламы и проплаченых эфиров ... (дописать стартовый текст) ...</p>
      <div class="shadow p-4 grid justify-items-center">
        <button type="button" class="box-border h-10 w-32 border-2 border-primary rounded-lg"
          v-on:click="onClickWatch">Смотреть</button>
      </div>
    </greetings-modal>

  </main>
</template>

<script>

export default {
  data() {
    return {
      isPlayerShow: false,
      videoId: '',
      playerType: '',
      isFirst: true,
      videoStack: [
        { player: "youtube", id: 'FsjoLhbD5m4' }, // carol of the bells
        { player: "youtube", id: '22YRAj2j2P4' }, // get lucky
        { player: "youtube", id: 'ZzERTATm4aM' }, // dont stop me now
        { player: "youtube", id: '-C58xvJcUPU' }, // песенка о хорошем настроении
        { player: "youtube", id: 'kottjfEd7Zw' }, // interstellar
        { player: "youtube", id: 'xWPd2zMAh1M' }, // let it be
        { player: "youtube", id: 'ivBg3C-U82c' }, // no woman no cry
        { player: "youtube", id: 'A0esgcONk4c' }, // последняя поэма
        { player: "youtube", id: 'AGRfJ6-qkr4' }, // halleluya
        // {
        //   player: "peertube",
        //   id: '07388f23-4972-46b4-88bc-5d091469013f'
        // },
        // {
        //   player: "peertube",
        //   id: '50cfb1ed-fde4-4a15-b24d-9cee0d67a4be'
        // }
      ],
      lastSecondsVideoId: 'ijG1jbxWDko',
      firstNewYearVideoId: '',
      timeIsCome: false,
      currentVideoNum: 0
    }
  },
  mounted() {
    this.$colorMode.preference = 'dark'
    if (localStorage.currentVideoNum) {
      this.currentVideoNum = localStorage.currentVideoNum;
    }
  },
  methods: {
    playNextVideo(n) {
      n = parseInt(n);
      if (!this.videoStack[n]) {
        console.error('video stack finished');
        n = 0;
      }
      this.currentVideoNum = n;
      this.videoId = this.videoStack[n].id;
      this.playerType = this.videoStack[n].player;
      localStorage.currentVideoNum = n;
    },
    onClickWatch() {
      this.isPlayerShow = true;
      this.playNextVideo(this.currentVideoNum);
    },
    onPlaying(e) {
      console.log('onPlaying', e);
    },
    onEnded(e) {
      this.playNextVideo(this.currentVideoNum + 1);
    },
    onBackTimerSecondsElse(seconds) {
      if (
        seconds < 60 * 5 &&  // @todo paste lastSecondsVideo duration in seconds
        seconds > 0 &&
        this.videoId !== this.lastSecondsVideoId
      ) {
        this.videoId = this.lastSecondsVideoId;
      } else if (seconds < 0 && !this.timeIsCome) {
        this.timeIsCome = true;
        this.videoId = this.firstNewYearVideoId;
      }
    }
  },
}
</script>

<style lang="pcss">
.timer {
  position: fixed;
  z-index: 999;
}
</style>