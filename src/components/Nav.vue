<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      mini-variant-width="56"
      
      app
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="../assets/teacher.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Modulo Docente</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav class="grow">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    drawer: true,
    mini: true,
    items: [],
    management: [],
    right: null,
  }),
  created() {
    if (this.user.user.isAdmin == true) {
      this.items = [
        { title: "Tablero", icon: "mdi-view-dashboard", route: "/dashboard" },
        { title: "Mis Cursos", icon: "mdi-book-education", route: "/course" },
        { title: "Asistencias", icon: "mdi-list-status", route: "/attendance" },
        { title: "Calificaciones", icon: "mdi-ab-testing", route: "/ratings" },
        { title: "Docentes", icon: "mdi-shield-account", route: "/teacher" },
        { title: "Alumnos", icon: "mdi-account-school", route: "/student" },
        {
          title: "Asignaciones",
          icon: "mdi-cast-education",
          route: "/assignament",
        },
        {
          title: "Gestiones",
          icon: "mdi-human-male-board-poll",
          route: "/management",
        },
      ];
    } else {
      this.items = [
        { title: "Tablero", icon: "mdi-view-dashboard", route: "/dashboard" },
        { title: "Mis Cursos", icon: "mdi-book-education", route: "/course" },
        { title: "Asistencias", icon: "mdi-list-status", route: "/attendance" },
        { title: "Calificaciones", icon: "mdi-ab-testing", route: "/ratings" },
        { title: "Alumnos", icon: "mdi-account-school", route: "/student" },
      ];
    }
  },
  computed: {
    ...mapState("moduleLogin", ["user"]),
  },
  mounted() {},
  methods: {},
};
</script>