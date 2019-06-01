<template>
    <div class="container">
        <div class="items">
            <div v-for="item in items" :key="item.id" class="item">{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                items: [
                    { id: 1, name: 'item01' },
                    { id: 2, name: 'item02' },
                    { id: 3, name: 'item03' },
                    { id: 4, name: 'item04' },
                    { id: 5, name: 'item05' },
                    { id: 6, name: 'item06' },
                    { id: 7, name: 'item07' },
                    { id: 8, name: 'item08' },
                    { id: 9, name: 'item09' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    $item-bg: #a0d8ef;

    html {
        height: 100%;
        width: 100%;

        body {
            height: 100%;
            margin: 0;
            padding: 0;
            position: relative;
            text-align: center;
            width: 100%;

            .items {
                left: 50%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%) translateX(-50%);
                width: 330px;
            }

            .item {
                animation: 1s ease 0s pulse infinite;
                background: $item-bg;
                border-radius: 4px;
                float: left;
                height: 75px;
                margin: 5px;
                width: 100px;
                text-align: center;
            }
        }
    }

    @for $i from 1 through 9 {
        .item {
            &:nth-child(#{$i}) {
                animation-delay: $i * (1s / 18);
            }
        }
    }

    @keyframes pulse {
        0% {
            background: $item-bg;
            transform: scale(1);
        }
        25% {
            background: darken($item-bg, 10%);
            transform: scale(1.015);
        }
        50% {
            background: $item-bg;
            transform: scale(1);
        }
    }
</style>