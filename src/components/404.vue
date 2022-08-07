<template>
    <div class="not-found">
        <h1>404</h1>
    </div>
</template>

<script>
    export default {
        name: 'Error_Page'
    }
</script>

<style lang="scss" scoped>
    .not-found {
        height: calc(100vh - 39px);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dark {

        .not-found {

            h1 {
                color: #fff;
                font-size: 55px;
            }
        }
    }
</style>