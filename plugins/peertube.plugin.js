import { PeerTubePlayer } from '@peertube/embed-api';

class PeerTubePlugin {
    player;
    async initPlayer(target) {
        this.player = new PeerTubePlayer(target)
        await this.player.ready;
    }
    play() {
        this.player.play()
    }
    setVolume(value) {
        this.player.setVolume(value)
    }
}

export default {
    install(Vue, options) {
        Vue.prototype.$peerTube = new PeerTubePlugin;
    }
};