<template>
  <div>Host test</div>
  <ClientOnly>
    <NuxtLayout :name="layout"> <div>some page content</div> </NuxtLayout>
  </ClientOnly>
</template>
<script setup>
const layout = 'default';
</script>
