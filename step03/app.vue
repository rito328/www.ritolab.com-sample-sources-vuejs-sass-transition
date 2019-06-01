<template>
    <div class="container">
        <div class="msgBox">
            <transition name="fade">
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
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;
    }
    .fade-enter-active, .fade-leave-active {
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