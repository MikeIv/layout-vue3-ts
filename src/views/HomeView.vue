<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <Main msg="Welcome"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from '@/components/Main.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Main,
  },
});
</script>
