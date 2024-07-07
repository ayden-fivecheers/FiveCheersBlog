<script setup>
import {CloseOutlined} from '@ant-design/icons-vue'
import {bus} from "vue3-eventbus";

const closeSelectCard = ()=>{
  bus.emit('closeSelectCard')
}
</script>

<template>
  <div class="select_com_background">
    <CloseOutlined @click="closeSelectCard()" class="card_cancel_btn" />
    <h2>- Default -</h2>
    <div class="select_com_card">

    </div>
  </div>
</template>

<style scoped>
.select_com_background{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #00000044;
  animation: fade-in .5s 1;
}
.select_com_background h2{
  position: absolute;
  top: calc(25vh - 145px);
  left: 50%;
  transform: translateX(-50%);
  color: white;
  letter-spacing: 6px;
  font-size: 20px;
  white-space: nowrap;
}
.select_com_card{
  position: absolute;
  left: 16px;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  max-height: 580px;
  height: calc(100% - 88px);
  background: #fff;
  border-radius: 8px;
  padding: 16px 12px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>