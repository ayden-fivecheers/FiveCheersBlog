<script setup>
import {
  HomeOutlined,
} from '@ant-design/icons-vue';
import {jumphelper} from "@/js/jumphelper";
import { ref } from 'vue';
import DefaultBackground from "@/coms/all/DefaultBackground.vue";
import BuildingCom from "@/coms/all/BuildingCom.vue";

const showToast = ref(true);
setTimeout(() => {
  showToast.value = false;
}, 10000);

</script>

<template>
  <div class="all-container">
    <DefaultBackground/>
    <HomeOutlined @click="jumphelper.jumpToSelect()" style="color: #fff" class="home_icon"/>
    <BuildingCom/>
  </div>
</template>

<style scoped>
.all-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
}

</style>