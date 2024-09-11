<template>
  <v-app fluid>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title class="mx-2">Alumnos</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-icon>mdi-account-school</v-icon>
        <v-spacer></v-spacer>
        <v-text-field
          class="mt-6"
          v-model="search"
          append-icon="mdi-magnify"
          label="buscar"
          outlined
          dense
        ></v-text-field>
        <v-select
          class="mt-6 mx-2"
          v-model="reqdata.degree"
          :items="degrees"
          label="Grado"
          outlined
          dense
          ><template v-slot:item="{ item }">
            {{ item.Degree.name }}
          </template>
          <template v-slot:selection="{ item }">
            {{ item.Degree.name }}
          </template></v-select
        >
        <v-select
          class="mt-6"
          v-model="reqdata.section"
          :items="sections"
          label="Seccion"
          outlined
          dense
          ><template v-slot:item="{ item }">
            {{ item.name }}
          </template>
          <template v-slot:selection="{ item }">
            {{ item.name }}
          </template></v-select
        >

        <v-spacer></v-spacer>
        <v-btn outlined class="d-inline rounded-lg rounded-r-0 mx-1" color="primary" @click="getStudent(reqdata)">
          <v-icon>mdi-text-search</v-icon>
          <span>Listar</span>
        </v-btn>
        <v-btn outlined color="success"  class="d-inline rounded-lg rounded-l-0"> + nuevo </v-btn>
      </v-toolbar>
    </v-card>
    <v-card class="mt-2">
      <v-data-table
        :items="students"
        :headers="headers"
        :key="students.id"
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
      { text: "DNI", value: "dni" },
      { text: "Nombre", value: "name", width: "30%" },
      { text: "Fecha nacimiento", value: "datebirth" },
      { text: "Genero", value: "gender" },
      { text: "Opciones", value: "actions" },
    ],
  }),
  computed: {
    ...mapState("moduleStudent", ["students"]),
    ...mapState("moduleDegree", ["degrees"]),
    ...mapState("moduleSection", ["sections"]),
    ...mapState("moduleLogin", ["user"]),
  },
  mounted() {
    this.getDegree(this.user.user.id);
    this.getSection();
  },
  methods: {
    ...mapActions("moduleStudent", ["getStudent"]),
    ...mapActions("moduleDegree", ["getDegree"]),
    ...mapActions("moduleSection", ["getSection"]),
  },
};
</script>