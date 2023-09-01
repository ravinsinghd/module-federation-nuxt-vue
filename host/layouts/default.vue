<template>
  <div>
    Some default layout shared across all pages
    <slot />
    <div id="content"></div>
    <div>
      <NavBar></NavBar>
    </div>
  </div>
</template>
<script setup>
import NavBar from 'remote_app/NavBar';
onMounted(() => {});
</script>
