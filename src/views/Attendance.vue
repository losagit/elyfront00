<template>
  <v-app fluid style="background-color: lightgray">
    <v-card>
      <v-card-title>
        <span>Asistencia de alumnos</span>
        <v-divider vertical class="mx-2"></v-divider>
        <v-icon>mdi-account-school-outline</v-icon>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              append-icon="mdi-calendar"
              v-model="record.date"
              label="Fecha"
              outlined
              dense
              disabled
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
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
          </v-col>
          <v-col>
            <v-select
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
          </v-col>
          <v-col cols="4">
            <v-btn
              outlined
              color="info"
              class="d-inline rounded-lg rounded-r-0"
              @click="getStudent(reqdata)"
            >
              <v-icon>mdi-account-search</v-icon>
              <span>buscar</span>
            </v-btn>
            <v-btn
              outlined
              class="d-inline rounded-lg rounded-l-0 ml-2"
              color="success"
              dark
              @click="getAllAttendances"
            >
              <v-icon>mdi-content-save</v-icon>
              <span> Guardar </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-1">
      <v-data-table :items="studentsAt" :headers="headers" :key="studentsAt.id">
        <template v-slot:item="{ item }">
          <tr>
            <td><v-checkbox v-model="item.selected"></v-checkbox></td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.dni }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.datebirth }}</td>
          </tr>
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
    record: {
      date: new Date().toISOString().slice(0, 10),
      attes: [],
    },
    reqdata: {
      degree: null,
      section: null,
    },
    headers: [
      { text: "Presente" },
      { text: "Codigo", value: "id" },
      { text: "Nombre", value: "name", width: "25%" },
      { text: "Dni", value: "dni" },
      { text: "Genero", value: "gender" },
      { text: "Fecha Nacimiento", value: "datebirth" },
    ],
  }),
  computed: {
    ...mapState("moduleAttendance", ["studentsAt"]),
    ...mapState("moduleDegree", ["degrees"]),
    ...mapState("moduleSection", ["sections"]),
    ...mapState("moduleLogin", ["user"]),
  },
  mounted() {
    this.getDegree(this.user.user.id);
    this.getSection();
  },
  methods: {
    ...mapActions("moduleAttendance", ["getStudent"]),
    ...mapActions("moduleDegree", ["getDegree"]),
    ...mapActions("moduleSection", ["getSection"]),
    ...mapActions("moduleAttendance", ["createAttendance"]),
    getAllAttendances() {
      this.record.attes = this.studentsAt.map((item) => ({ ...item }));
      this.createAttendance(this.record);
    },
  },
};
</script>