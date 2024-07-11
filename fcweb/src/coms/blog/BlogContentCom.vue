<script setup>
  import Vditor from 'vditor'
  import 'vditor/dist/index.css';
  import {onMounted, ref} from "vue";

  onMounted(()=>{
    vditor.value = new Vditor('vditor',options.value)
  })

  /**
   * 编辑器设置
   */
  const vditor = ref()
  const editing = ref(false)
  const options = ref({
    mode: editing.value ? 'sv' : 'ir',
    toolbar:[
       'emoji' , 'upload', '|' , 'line' , 'ordered-list' , 'check' , 'code' , 'link' , 'table', '|' , 'outline' , 'edit-mode', 'fullscreen' , 'export',  'br', '|', 'undo' , 'redo' ,
    ],
    preview:{
      maxWidth: 1000
    },
    toolbarConfig:{
      pin: true,
      hide: false
    }
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
    z-index: 999;
  }
  .content-container .content-self{
    min-height: 90vh;
    border: 0;
    position: relative;
  }
  .content-container ::v-deep(.vditor-toolbar) {
    padding: 0;
    line-height: 0;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #eee;
    background: linear-gradient(to right bottom, #edf0fc88, #faf3f988);
    backdrop-filter: blur(4px);
  }
</style>
