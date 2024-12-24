<template>
  <div id="app">
    <MenuComponent v-if="shouldShowMenu" />
    <router-view />
  </div>
</template>

<script>
import MenuComponent from './components/menu/MenuComponent.vue';

export default {
  components: {
    MenuComponent,
  },
  computed: {
    shouldShowMenu() {
      return this.$route.name !== 'login' && this.$route.name !== 'register';
    },
  },
};
</script>
