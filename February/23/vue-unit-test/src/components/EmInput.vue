<template>
  <div>
    <span>{{msg}}</span>
    <el-input v-model="input"></el-input>
    <el-button type="primary" @click="handleChange"> change </el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: '',
        input: 'hello world'
      }
    },
    methods: {
      handleChange(){
        this.msg = this.input
      }
    }
  }
</script>
