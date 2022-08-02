<template>
    <div>
        <!-- <ul v-for="post in fetchDataAPI" :key="post.id">
            <li>{{post.id}}</li>
            <li>{{post.title}}</li>
            <li>{{post.body}}</li>
        </ul> -->
        <div class="data-fetch">
            <div class="loader" v-if="loading">
                <half-circle-spinner
                    :animation-duration="1000"
                    :size="60"
                    color="#ff1d5e"
                />
            </div>
            <a-table :columns="columns" :data-source="fetchDataAPI" bordered v-else>
                <template #bodyCell="{ column, text }">
                    <template v-if="column.dataIndex === 'name'">
                        <a>{{ text }}</a>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>

<script>
    import { HalfCircleSpinner } from 'epic-spinners'

    export default {
        name: 'Data',
        components: {
            HalfCircleSpinner
        },
        data: function() {
            return {
                fetchDataAPI: [],
                columns: [
                    {
                        title: 'User ID',
                        dataIndex: 'userId',
                    },
                    {
                        title: 'ID',
                        dataIndex: 'id',
                    },
                    {
                        title: 'Title',
                        className: 'column-money',
                        dataIndex: 'title',
                    },
                    {
                        title: 'Body',
                        dataIndex: 'body',
                    },
                ],
                loading: true,
            }
        },
        methods: {
            // upCounter() {
            //   this.count++;
            // },
            // downCounter() {
            //   if(this.count > 0) {
            //     this.count--;
            //   }
            // },
            // resetCounter() {
            //   this.count = 0;
            // },
            async FetchData() {
                this.loading = true;
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                this.fetchDataAPI = data;
                this.loading = false;
                // console.log(this.fetchDataAPI)
            }
        },
        mounted() {
            this.FetchData();
        }
    }
</script>

<style lang="scss" scoped>
    .data-fetch {
        position: relative;
    }
    
    .loader {
        height: calc(100vh - 39px);
    }
    
    .half-circle-spinner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-30px, -30px);
    }
</style>