<script setup>
import {loadSlim} from "tsparticles-slim";
import {random1} from "@/particles/random1";
import {random2} from "@/particles/random2";
import {random3} from "@/particles/random3";

const particlesInit = async engine => {
  await loadSlim(engine);
};
const currentDate = new Date();
const currentDay = currentDate.getDate();
let particlesOption;
switch (currentDay % 3) {
  case 0:
    particlesOption = random1;
    break;
  case 1:
    particlesOption = random2;
    break;
  case 2:
    particlesOption = random3;
    break;
  default:
    particlesOption = random1; // 默认为random1
}
</script>

<template>
  <div>
    <vue-particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="particlesOption"
    />
  </div>
</template>

<style scoped>

</style>