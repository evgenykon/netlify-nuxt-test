import Vue from 'vue';

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

import PeertubePlugin from './peertube.plugin.js';
Vue.use(PeertubePlugin);

/*
import WebTorrentPlugin from './webtorrent.plugin.js';
Vue.use(WebTorrentPlugin);

Module parse failed: Unexpected token (954:20)                                                                                                                     friendly-errors 19:29:27  
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|
|   removePeer (peer) {
>     const id = peer?.id || peer
|     if (peer && !peer.id) peer = this._peers?.[id]
|
          
*/