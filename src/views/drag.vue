<!--
 * @Author: lichenxi
 * @Date: 2023-05-11 22:16:05
 * @LastEditors: lichenxi
 * @LastEditTime: 2023-05-11 23:18:16
 * @Description: 
-->
<template>
  <div class="drag" v-resizable="'right, bottom'">
    <a class="top-drag"></a>
    <a class="right-drag"></a>
    <a class="bottom-drag"></a>
    <a class="left-drag"></a>
  </div>
</template>
<script setup>
// const
</script>
<style lang="scss" scoped>
.drag {
  max-width: 500px;
  max-height: 400px;
  background: beige;
  width: 200px;
  height: 200px;
  border: 1px red solid;
  position: relative;
  /* bottom: ; */
  a {
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 8px;
    background-color: gray;
    border-radius: 10000px;
    &:nth-of-type(2n) {
      width: 8px;
      height: 50px;
    }
    &:nth-child(1) {
      top: -4px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:nth-child(2) {
      right: -4px;
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(3) {
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:nth-child(4) {
      left: -4px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
xs
