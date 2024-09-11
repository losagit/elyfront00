<template>
  <v-container fluid >
    <appbar />
    <navigation />
    <router-view />
  </v-container>
</template>
<script>
import appbar from "../components/Bar.vue";
import navigation from "../components/Nav.vue";

export default {
  name: "App",
  components: {
    navigation,
    appbar,
  },
};
</script>