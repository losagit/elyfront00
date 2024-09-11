<template>
  <v-app fluid>
    <v-card class="mb-1">
      <v-toolbar flat>
        <v-icon>mdi-book-education</v-icon>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <v-spacer></v-spacer>
        <v-btn small primary @click="drawer = !drawer">+ temas</v-btn>
      </v-toolbar>
    </v-card>
    <v-card class="mt-2">
      <v-row v-for="issue in issues" :key="issue.id">
        <v-col>
          <v-divider></v-divider>
          <v-toolbar flat>
            <v-toolbar-title class="mx-2">{{
              issue.name.toUpperCase()
            }}</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-icon>mdi-book-open-variant</v-icon>
            <v-spacer></v-spacer>
            <v-btn outlined small color="success">+ file</v-btn>
          </v-toolbar>
          <v-card-text>{{ issue.desc }}</v-card-text>
          <v-btn text small>
            <v-icon>mdi-cloud-download-outline</v-icon>
            <span>nameFile</span>
          </v-btn>
          <v-btn text small>
            <v-icon>mdi-cloud-download-outline</v-icon>
            <span>nameFile</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-navigation-drawer v-model="drawer" app right temporary>
      <v-card>
        <v-card-title>
          <span>Agregar nuevo tema</span>
          <v-divider vertical inset class="mx-3"></v-divider>
          <v-icon>mdi-book-education</v-icon>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="record.name"
            label="nombre"
            outlined
          ></v-text-field>
          <v-textarea
            v-model="record.desc"
            label="descripcion"
            outlined
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="red" @click="drawer = false">Cancelar</v-btn>
          <v-btn color="success" @click="saveRecord">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "componentIssue",
  data: () => ({
    drawer: null,
    record: {},
  }),
  computed: {
    ...mapState("moduleIssue", ["issues"]),
  },
  mounted() {
    this.getIssue(this.$route.params.id);
  },
  created() {
    this.items = [
      {
        text: this.$route.params.degreeName.toUpperCase(),
        disabled: true,
      },
      {
        text: this.$route.params.courseName.toUpperCase(),
        disabled: true,
      },
    ];
  },
  methods: {
    ...mapActions("moduleIssue", ["getIssue", "createIssue"]),
    saveRecord() {
      this.record.management_id = this.$route.params.id;
      this.createIssue(this.record);
      this.drawer = false;
    },
  },
};
</script>