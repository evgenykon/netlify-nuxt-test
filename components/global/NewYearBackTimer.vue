<template>
    <div class="timer h-15 w-full">{{ nowTimeStr }} / {{ leastTime }}</div>
</template>

<script>

import moment from 'moment';

export default {
    props: {
        targetMoment: {
            type: String
        },
    },
    timers: {
        nextSecond: { time: 1000, autostart: true, repeat: true }
    },
    data() {
        return {
            targetTime: null,
            nowTime: null
        }
    },
    created() {
        this.targetTime = moment(this.targetMoment);
        this.nowTime = new moment();
    },
    methods: {
        nextSecond() {
            this.nowTime = new moment();
            const seconds = this.targetTime.diff(this.nowTime, 'seconds');
            this.$emit('seconds-else', seconds);
        }
    },
    computed: {
        nowTimeStr() {
            return this.nowTime ? this.nowTime.format('HH:mm:ss') : '...';
        },
        leastTime() {
            if (!this.targetTime) {
                return '...';
            }
            const days = this.targetTime.diff(this.nowTime, 'days');
            if (days > 1) {
                return `${days} days`;
            }
            const hours = this.targetTime.diff(this.nowTime, 'hours');
            if (hours > 1) {
                return `${hours} hours`;
            }
            const minutes = this.targetTime.diff(this.nowTime, 'minutes');
            if (minutes > 1) {
                return `${minutes} minutes`;
            }
            const seconds = this.targetTime.diff(this.nowTime, 'seconds');
            if (seconds > 0) {
                return `${seconds} seconds`;
            }
            return 'Its time!';
        }
    }
}

</script>