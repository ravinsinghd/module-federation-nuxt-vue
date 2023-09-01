<template>
  Home Dashboard Component
  <Button label="Submit" />
</template>
<script setup lang="ts">
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import { app } from '../main';
app.use(PrimeVue);
app.component('Button', Button);
</script>
