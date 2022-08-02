<template>
    <div class="container">
        <span :class="mode === 'dark' ? 'text-white' : ''">fdsf</span>
        <div class="form">
            <a-form
                :model="formState"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                >
                <a-form-item
                    label="Username"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
    
                <a-form-item
                    label="Password"
                    name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>
    
                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

const formState = {
  username: '',
  password: '',
}

export default {
    name: 'Home',
    props: {
        msg: String
    },
    data: function() {
        return {
        formState
        }
    },
    methods: {
        onFinish(values) {
        console.log('Success:', values);
        },
        onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
        }
    },
    //Using composition API to get state from vuex
    // setup() {
    //     const store = useStore();
    //     const mode = computed(() => store.state.mode);

    //     return {
    //         mode
    //     }
    // },
    //Using computed to get state from vuex
    computed: {
        mode() {
            return this.$store.state.mode
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "style.module.scss";
</style>