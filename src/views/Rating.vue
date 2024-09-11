<template>
  <v-app>
    <v-card>
      <v-card-title>
        <span> Calificaciones de Alumnos </span>
        <v-divider vertical class="mx-2"></v-divider>
        <v-icon>mdi-ab-testing</v-icon>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-select
              v-model="reqdata.course"
              :items="coursesbyid"
              label="Curso"
              outlined
              dense
              ><template v-slot:item="{ item }">
                {{ item.Course.name }}
              </template>
              <template v-slot:selection="{ item }">
                {{ item.Course.name }}
              </template></v-select
            >
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
            <v-btn outlined class="d-inline rounded-lg rounded-r-0" color="info" @click="getRating(reqdata)">
              <v-icon>mdi-text-search</v-icon>
              <span>buscar</span>
            </v-btn>
            <v-btn  outlined class="d-inline rounded-lg rounded-l-0 ml-2" color="success"  @click="saveRatings()">
              <v-icon>mdi-content-save</v-icon>
              <span>
                Guardar
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-2">
      <v-row>
        <v-col>
          <v-data-table :items="ratings" :headers="header">
            <template v-slot:item="{ item }">
              <tr>
                <td>
                  <span>
                    {{ item.id }}
                  </span>
                </td>
                <td>
                  <span>
                    {{ item.Student.name }}
                  </span>
                </td>
                <td>
                  <v-text-field regular v-model="item.q1"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q2"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q3"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q4"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q5"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q6"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q7"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q8"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q9"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q10"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q11"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q12"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q13"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q14"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q15"></v-text-field>
                </td>
                <td>
                  <v-text-field regular v-model="item.q16"></v-text-field>
                </td>
                <td>
                  <v-icon
                    color="info"
                    class="mr-2"
                    @click="showAverage(item.id)"
                  >
                    mdi-eye
                  </v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>
    
    <script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    dialogAverage: false,
    record: [],
    reqdata: {
      degree: null,
      section: null,
      course: null,
    },
    header: [
      { text: "id", value: "id" },
      { text: "Nombre", value: "Student.name", width: "50%" },
      { text: "q1", value: "q1", width: "8%" },
      { text: "q2", value: "q2" },
      { text: "q3", value: "q3" },
      { text: "q4", value: "q4" },
      { text: "q5", value: "q5" },
      { text: "q6", value: "q6" },
      { text: "q7", value: "q7" },
      { text: "q8", value: "q8" },
      { text: "q9", value: "q9" },
      { text: "q10", value: "q10" },
      { text: "q11", value: "q11" },
      { text: "q12", value: "q12" },
      { text: "q13", value: "q13" },
      { text: "q14", value: "q14" },
      { text: "q15", value: "q15" },
      { text: "q16", value: "q16" },
      { text: "Promedio", value: "actions", sorteable: false },
    ],
  }),
  computed: {
    ...mapState("moduleRating", ["ratings", "courses"]),
    ...mapState("moduleDegree", ["degrees"]),
    ...mapState("moduleSection", ["sections"]),
    ...mapState("moduleLogin", ["user"]),
    ...mapState("moduleCourse", ["coursesbyid"]),
  },
  mounted() {
    this.getDegree(this.user.user.id);
    this.getSection();
    this.getCourseById(this.user.user.id);
  },
  methods: {
    ...mapActions("moduleRating", ["getRating", "updateRating"]),
    ...mapActions("moduleDegree", ["getDegree"]),
    ...mapActions("moduleSection", ["getSection"]),
    ...mapActions("moduleCourse", ["getCourseById"]),
    saveRatings() {
      this.record = this.ratings.map((item) => ({ ...item }));
      this.updateRating(this.record);
    },
    showAverage(item) {
      this.dialogAverage = true;
    },
  },
};
</script>