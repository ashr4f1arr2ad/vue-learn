<template>
    <div class="about">
        <h1>Works Better Way</h1>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style lang="scss" scoped>
    .about {
        height: calc(100vh - 39px);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dark {

        .about {

            h1 {
                color: #fff;
                font-size: 55px;
            }
        }
    }
</style>