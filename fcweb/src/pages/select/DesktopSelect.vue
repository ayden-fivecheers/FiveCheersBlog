<script setup>
import SelectCardCom from "@/coms/select/SelectCardCom.vue";
import BackgroundCom from "@/coms/select/BackgroundCom.vue";


</script>

<template>
  <div>
    <BackgroundCom/>
    <SelectCardCom class="select_card_pos"/>
  </div>
</template>

<style scoped>
  .select_card_pos{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    min-width: 400px;
    height: 86%;
  }
</style>