<script setup>
  import Vditor from 'vditor'
  import 'vditor/dist/index.css';
  import {onMounted, ref} from "vue";
  import {checkManager} from "@/js/jshelper";

  onMounted(()=>{
    vditor.value = new Vditor('vditor',options.value)
  })

  /**
   * 获取当前文本内容
   */
  const getContent = ()=>{
    const tmp = "# TODO"
    if(isManager){
      vditor.value.setValue(tmp)
    }else{
      Vditor.preview(document.getElementById(`vditor`), tmp, {});
      document.getElementById(`vditor`).style.padding = '0 24px'
    }
  }

  /**
   * 编辑器设置
   */
  const isManager = checkManager()
  const vditor = ref()
  const options = ref({
    toolbar:[
       'emoji' , 'upload', '|' , 'line' , 'quote' , 'list', 'ordered-list' , 'check' , 'code' , '|' , 'outline' , 'edit-mode', 'fullscreen' , 'export',  'preview', '|', 'undo' , 'redo' ,
    ],
    preview:{
      maxWidth: 1400
    },
    toolbarConfig:{
      pin: true,
      hide: false
    },
    cache: {
      enable: false
    },
    after: getContent,
    value: 'loading...'
  })

  /**
   * 测试数据
   * @type {{time: string, title: string, content: string}}
   */
    // const tmp = {
    //   title: '标题',
    //   time: '2024/07/11 12:25',
    //   content: '# 内容'
    // }
</script>

<template>
  <div class="content-container">
    <!--内容-->
    <div class="content-self" id="vditor">loading...</div>
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
    font-family: 清泉;
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
