<template lang="pug">
h1 {{ msg }}
.card
  button(type="button", @click="count++") count is {{ count }}
  p
    | Edit2
    code components/HelloWorld.vue
    | to test HMR
p
  | Check out
  a(href="https://vuejs.org/guide/quick-start.html#local", target="_blank") create-vue
  | , the official Vue + Vite starter
p
  | Install
  a(href="https://github.com/vuejs/language-tools", target="_blank") Volar
  | in your IDE for a better DX
p.read-the-docs Click on the Vite and Vue logos to learn more
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0);
</script>



<style scoped>
.read-the-docs {
  color: #888;
}
</style>
