<template>
  <v-app fluid style="background-color: lightgray">
    <v-card>
        <v-toolbar flat>
          <v-toolbar-title>Asignaciones</v-toolbar-title>
          <v-divider class="ml-2 mr-2" inset vertical></v-divider>
          <v-icon>mdi-cast-education</v-icon>
          <v-spacer></v-spacer>
          <v-text-field
            class="mt-5"
            v-model="search"
            append-icon="mdi-magnify"
            label="buscar"
            outlined
            dense
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn class="d-inline rounded-lg rounded-l-0" outlined color="success" dark > + nuevo </v-btn>
        </v-toolbar>
    </v-card>
    <v-card class="mt-2">
      <v-data-table
        :items="managements"
        :headers="headers"
        :key="managements.id"
        :search="search"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn fab x-small @click="EditarDialog(item)" color="info">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn
            class="ml-2"
            fab
            dark
            x-small
            @click="EliminarDialog(item)"
            color="red"
          >
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    dialog: false,
    search: null,
    record: {
      date: new Date().toISOString().slice(0, 10),
    },
    reqdata: {
      degree: null,
      section: null,
    },
    headers: [
      { text: "id", value: "id" },
      { text: "Grado", value: "Degree.name" },
      { text: "Curso", value: "Course.name" },
      { text: "Docente", value: "Teacher.name" },
      { text: "Opciones", value: "actions" },
    ],
  }),
  computed: {
    ...mapState("moduleManagement", ["managements"]),
  },
  mounted() {
    this.getManagement();
  },
  methods: {
    ...mapActions("moduleManagement", ["getManagement"]),
  },
};
</script>