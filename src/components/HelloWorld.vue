<template>
   <div class="hello">
  </div>
</template>

<script>

const formState = {
  username: '',
  password: '',
}

export default {
  name: 'HelloWorld',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "style.module.scss";
</style>
