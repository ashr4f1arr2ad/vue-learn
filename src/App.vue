<template>
  <div class="app" :class="mode === 'dark' ? 'dark' : 'light'">
    <!-- <h1 class="text-2xl">Counter <span>{{count}}</span> </h1> -->
    <!-- <button class="bg-black py-2 px-2 inline-block text-base text-white cursor-pointer" @click="upCounter">Up</button> -->
    <!-- <button class="bg-black py-2 px-2 inline-block text-base text-white cursor-pointer" @click="downCounter">Down</button>
    <button class="bg-black py-2 px-2 inline-block text-base text-white cursor-pointer" @click="resetCounter">Reset</button> -->
    <!-- <Home msg="Works"/> -->
    <!-- <span>{{ $store.state.count }}</span> -->
    <!-- <span :class="mode === 'dark' ? 'color' : ''">{{ count }}</span> -->
    <!-- <button @click="increment">Increment</button> -->
    <div class="nav">
      <ul class="menu pl-0 mb-0">
        <li class="text-fuchsia-500"><router-link to="/">Home</router-link></li>
        <li><router-link to="/data">Data</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <Toggle :mode= $store.state.mode @toggle="toggle" />
    </div>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Toggle from './components/Toggle.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

// import createStore from './store/index.js'
// import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Toggle
  },
  data: function() {
    return {
      // count: 0,
      // mode: JSON.parse(localStorage.getItem('mode'))
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
    toggle(value) {
      console.log(value);
      this.$store.commit("toggle");
    },
    increment() {
      this.$store.commit("increment", 6);
    }
  },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const mode = computed(() => store.state.mode);

    function increment() {
      store.commit("increment", 6);
    }

    return { 
      count,
      mode,
      increment 
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "./components/style.module.scss";
</style>
