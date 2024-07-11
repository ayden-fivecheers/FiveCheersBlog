<script setup>
  import Vditor from 'vditor'
  import 'vditor/dist/index.css';
  import {onMounted, ref} from "vue";

  const vditor = ref()
  onMounted(()=>{
    vditor.value = new Vditor('vditor',{

    })
  })
  /**
   * 测试数据
   * @type {{time: string, title: string, content: string}}
   */
    // const tmp = {
    //   title: '标题',
    //   time: '2024/07/11 12:25',
    //   content: '内容'
    // }
</script>

<template>
  <div class="content-container">
    <!--内容-->
    <div class="content-self" id="vditor"></div>
    <a href="https://github.com/Vanessa219/vditor">supported by Vditor</a>
  </div>
</template>

<style scoped>
  .content-container{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .content-container a{
    position: fixed;
    right: 16px;
    top: 8px;
    color: #91aefa;
  }
  .content-container .content-self{
    min-height: 90vh;
  }
</style>
