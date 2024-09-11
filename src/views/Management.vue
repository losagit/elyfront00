<template>
  <v-app>
    <v-card>
      <v-row>
        <v-col>
          <v-toolbar flat>
            <v-toolbar-title>Gestion principales</v-toolbar-title>
            <v-divider inset vertical class="mx-2"></v-divider>
            <v-icon>mdi-human-male-board-poll</v-icon>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card>
    <v-row class="mt-1">
      <v-col>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Grados</v-toolbar-title>
            <v-divider class="ml-2 mr-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn small color="success" dark class="ml-2"> + nuevo </v-btn>
          </v-toolbar>
          <v-data-table
            :items="alldegrees"
            :headers="headersDegree"
            :key="alldegrees.id"
            items-per-page="4"
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
      </v-col>
      <v-col>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Secciones</v-toolbar-title>
            <v-divider class="ml-2 mr-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn small color="success" dark class="ml-2"> + nuevo </v-btn>
          </v-toolbar>
          <v-data-table
            :items="sections"
            :headers="headersSection"
            :key="sections.id"
            items-per-page="4"
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
            </template></v-data-table
          >
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Cursos</v-toolbar-title>
            <v-divider class="ml-2 mr-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn small color="success" dark class="ml-2"> + nuevo </v-btn>
          </v-toolbar>
          <v-data-table
            :items="allcourses"
            :headers="headersCourse"
            :key="allcourses.id"
            items-per-page="4"
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
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    dialog: false,
    search: null,
    record: {},
    headersDegree: [
      { text: "Nombre", value: "name" },
      { text: "Opciones", value: "actions" },
    ],
    headersSection: [
      { text: "Nombre", value: "name" },
      { text: "Opciones", value: "actions" },
    ],
    headersCourse: [
      { text: "Nombre", value: "name" },
      { text: "Opciones", value: "actions" },
    ],
  }),
  computed: {
    ...mapState("moduleDegree", ["alldegrees"]),
    ...mapState("moduleSection", ["sections"]),
    ...mapState("moduleCourse", ["allcourses"]),
  },
  mounted() {
    this.getAllDegree();
    this.getSection();
    this.getAllCourse();
  },
  methods: {
    ...mapActions("moduleDegree", ["getAllDegree"]),
    ...mapActions("moduleSection", ["getSection"]),
    ...mapActions("moduleCourse", ["getAllCourse"]),
  },
};
</script>