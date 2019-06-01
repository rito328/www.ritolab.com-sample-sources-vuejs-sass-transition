<template>
    <div class="container">
        <div class="item_wrapper">
            <div class="items">
                <transition-group name="list">
                    <div v-for="item in items" :key="item.id" class="item" v-show="item.show">{{ item.name }}</div>
                </transition-group>
            </div>
        </div>
        <div class="btns">
            <button v-for="item in items" :key="item.id" class="switch" :class="{ hiding: !item.show }" @click="toggle(item.id)">{{ item.id }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                items: [
                    { id: 1, name: 'item01', show: true },
                    { id: 2, name: 'item02', show: true },
                    { id: 3, name: 'item03', show: true },
                    { id: 4, name: 'item04', show: true },
                    { id: 5, name: 'item05', show: true },
                    { id: 6, name: 'item06', show: true },
                    { id: 7, name: 'item07', show: true },
                    { id: 8, name: 'item08', show: true },
                    { id: 9, name: 'item09', show: true }
                ],
            }
        },
        methods: {
            toggle (id) {
                let target = this.items.find((item) => {
                    return item.id === id
                })
                target.show = !target.show
            }
        }
    }
</script>

<style lang="scss" scoped>
    $item-bg: #a0d8ef;
    .item_wrapper {
        width: 100%;
    }

    .items {
        margin: auto;
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

    .btns {
        width: 100%;
        clear: both;
        text-align: center;
    }

    .hiding {
        background-color: #bfbfbf;
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

    .list-enter, .list-leave-to {
        opacity: 0;
    }
    .list-enter-to, .list-leave {
        opacity: 1;
    }
    .list-enter-active, .list-leave-active {
        transition: opacity 300ms ease-out;
    }
</style>