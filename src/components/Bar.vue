<template>
  <v-app-bar app permanent dense color="#00BCD5" dark>
    <v-icon>mdi-monitor-dashboard</v-icon>
    <v-toolbar-title class="ml-2">Plataforma educativa</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn small class="d-inline rounded-lg rounded-r-0" outlined>
      <span>{{ getUser.user.name }}</span>
      <v-divider vertical  class="mx-2"></v-divider>
      <v-icon left class="ml-2"> mdi-account </v-icon>
    </v-btn>
    <v-btn small class="d-inline ml-1 rounded-lg rounded-l-0" color="#FD6C6B" @click.prevent="logOut">
      <v-icon left class="mr-2"> mdi-door-open </v-icon>
      salir
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    getUser() {
      return this.$store.state.moduleLogin.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("moduleLogin/logout");
      this.$router.push("/login");
    },
  },
};
</script>