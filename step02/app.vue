<template>
    <div class="container">
        <div class="msgBox">
            <transition>
                <p v-show="isShow" class="message">{{ message }}</p>
            </transition>
        </div>
        <button @click="toggle">{{ btnLabel }}</button>
    </div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                message: 'Hello, world!',
                show: false
            }
        },
        computed: {
            isShow () {
              return this.show
            },
            btnLabel () {
                return this.show ? 'hide' : 'show'
            }
        },
        methods: {
            toggle () {
                this.show = !this.show
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-enter, .v-leave-to {
        opacity: 0;
    }
    .v-enter-to, .v-leave {
        opacity: 1;
    }
    .v-enter-active, .v-leave-active {
        transition: opacity 300ms;
    }

    .container {
        margin: 20px;

        .msgBox {
            height: 40px;
        }

        button {
            padding: 5px 10px;
        }
    }
</style>