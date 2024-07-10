<template>
  <div class="blog-page-container">
    <LeftOutlined @click="jumphelper.jumpToHello()" class="home_icon"/>
    <!--树形折叠导航栏，可折叠，管理员可编辑-->
    <BlogMenuCom class="blog-menu-com"/>
    <!--滚动页面，包括文章属性、博客区（md组件）、评论区-->

  </div>
</template>

<script setup>
import {
  LeftOutlined,
} from '@ant-design/icons-vue';
import {jumphelper} from "@/js/jumphelper";
import BlogMenuCom from "@/coms/blog/BlogMenuCom.vue";

</script>

<style scoped>
  .blog-page-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: top-fade-in .6s 1;
  }
  .blog-menu-com{
    height: 100%;
  }
</style>
