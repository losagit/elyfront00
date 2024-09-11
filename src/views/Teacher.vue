<template>
  <v-app>
    <v-card class="mb-1">
      <v-toolbar flat>
        <v-toolbar-title class="mx-2">Docentes</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-icon>mdi-account-group</v-icon>
        <v-spacer></v-spacer>
        <v-text-field
          class="mt-6"
          v-model="search"
          append-icon="mdi-magnify"
          label="buscar"
          outlined
          dense
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn outlined color="success" dark @click="drawer = !drawer" small>
          + nuevo
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-row>
      <v-col>
        <v-card>
          <v-data-table
            :items="teachers"
            :headers="headers"
            :key="teachers.id"
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
      </v-col>
    </v-row>
    <v-navigation-drawer v-model="drawer" fixed right temporary width="400px">
      <v-subheader> Datos del docente </v-subheader>
      <v-divider></v-divider>
      <v-form class="mx-2 ma-2">
        <v-row no-gutters>
          <v-col class="col-md-3">
            <v-text-field
              v-model="record.dni"
              label="DNI"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col class="col-md-3 mx-2">
            <v-select
              v-model="record.gender"
              outlined
              dense
              :items="gender"
              label="Sexo"
            >
            </v-select>
          </v-col>
          <v-col>
            <v-menu

              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  outlined
                  dense
                  v-model="record.date"
                  label="Fecha"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-text-field
              v-model="record.name"
              label="Nombre"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-text-field
              v-model="record.email"
              label="Email"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col class="ml-2">
            <v-text-field
              v-model="record.telefone"
              label="telefono"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <template v-slot:append>
        <v-divider></v-divider>
        <div class="d-flex align-end flex-column mx-2 ma-2">
          <v-btn dark @click="saveRecord">Guardar</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-app>
</template>
      
  <script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    drawer: false,
    search: null,
    menu2: false,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    record: {
    },
    gender: ["M", "F"],
    reqdata: {
      degree: null,
      section: null,
    },
    headers: [
      { text: "DNI", value: "dni" },
      { text: "Nombre", value: "name" },
      { text: "Fecha nacimiento", value: "datebirth" },
      { text: "Genero", value: "gender" },
      { text: "Email", value: "email" },
      { text: "Telefono", value: "telefone" },
      { text: "Admin", value: "isAdmin" },
      { text: "Opciones", value: "actions" },
    ],
  }),
  computed: {
    ...mapState("moduleTeacher", ["teachers"]),
  },
  mounted() {
    this.getTeacher();
  },
  methods: {
    ...mapActions("moduleTeacher", ["getTeacher"]),
  },
};
</script>
