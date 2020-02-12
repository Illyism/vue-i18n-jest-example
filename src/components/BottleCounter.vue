<template>
    <div>
        <h1>{{ $t('BOTTLES') }}</h1>
        <h2>{{ $tc('BOTTLE_ON_WALL', bottleCount, { bottleCount }) }}</h2>

        <button id="incr" @click="incr">Drink more</button>
        <button id="decr" @click="decr">Clean up</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bottleCount: 0
        }
    },
    methods: {
        decr() {
            this.bottleCount--
        },
        incr() {
            this.bottleCount++
        },
    }
}
</script>