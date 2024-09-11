<template>
  <v-app>
    <v-row>
      <v-col>
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
          <v-row align="center">
            <v-col class="d-none d-md-flex">
              <img
                src="../assets/loginback06.png"
                style="width: 100%; height: 100vh"
              />
            </v-col>

            <!-- Formulario de inicio de sesión en el lado derecho -->
            <v-col cols="12" md="6">
              <v-row justify="center">
                <v-col cols="12" sm="8" md="8">
                  <v-card shaped :elevation="24">
                    <v-card-title class="headline text-center"
                      >Inicio de Sesión</v-card-title
                    >
                    <v-card-text>
                      <form name="form" @submit.prevent="handleLogin">
                        <div class="form-group">
                          <v-select
                            v-model="user.rol"
                            :items="roles"
                            label="Rol"
                            outlined
                            dense
                          />
                        </div>
                        <div class="form-group">
                          <v-text-field
                            v-model="user.dni"
                            label="Usuario"
                            outlined
                            dense
                          />
                        </div>
                        <div class="form-group">
                          <v-text-field
                            v-model="user.pwd"
                            type="password"
                            label="Contraseña"
                            outlined
                            dense
                          />
                        </div>
                        <div class="form-group mt-3" align="end">
                          <v-btn type="submit" color="success">
                            <span>Ingresar</span>
                          </v-btn>
                        </div>
                      </form>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {},
      loading: false,
      message: "",
      roles: ["Docente", "Estudiante"],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.LoginModule.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },

  methods: {
    handleLogin() {
      this.loading = true;
      if (this.user.rol && this.user.dni && this.user.pwd) {
        this.$store.dispatch("moduleLogin/login", this.user).then(
          () => {
            this.$router.push("/dashboard");
          },
          (error) => {
            this.loading = false;
            this.message = error.response.data.msg || error.toString();
          }
        );
      }
    },
  },
};
</script>

