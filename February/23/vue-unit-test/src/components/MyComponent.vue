<template>
  <div>
    <span>{{msg}}</span>
    <el-button :loading="loading" @click="handleChange">Change</el-button>
  </div>
</template>

<script>
  export default {
    props: ['propmsg'],
    data(){
      return {
        msg: 'hello world',
        loading: false
      }
    },
    mounted(){
      this.msg = 'bye bye'
    },
    methods: {
      handleChange(){
        this.msg = 'changed'
      }
    }
  }
</script>
