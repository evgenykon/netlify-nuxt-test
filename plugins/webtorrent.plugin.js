import WebTorrent from 'webtorrent';

class WebTorrentPlugin {
    player;
    target;
    async initPlayer(target) {
        this.player = new WebTorrent();
        this.target = target;
    }
    setMagnetUrl(url, ext) {
        this.player.add(url, function (torrent) {
            console.log('player.add');
            // Torrents can contain many files. Let's use the .mp4 file
            const file = torrent.files.find(function (file) {
                return file.name.endsWith(ext)
            })
            console.log('player.file', file);
            file.appendTo(this.target)
        })
    }
}

export default {
    install(Vue, options) {
        Vue.prototype.$webTorrent = new WebTorrentPlugin;
    }
};