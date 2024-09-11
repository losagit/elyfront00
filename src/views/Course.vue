<template>
  <v-app fluid >
    <v-row v-for="degree in groupedCourses" :key="degree.gradeName">
      <v-col>
        <v-card class="mt-1">
          <v-card-title>
            <span class="ml-2">{{ degree.gradeName.toUpperCase() }}</span>
            <v-divider vertical class="mx-2"></v-divider>
            <v-icon>mdi-lan</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col
                v-for="course in degree.coursesgrade"
                :key="course.id"
                cols="3"
              >
                <v-card shaped>
                  <v-toolbar flat>
                    <v-card-subtitle>{{
                      course.Course.name.toUpperCase()
                    }}</v-card-subtitle>
                    <v-spacer></v-spacer>
                    <v-icon>mdi-book-open-page-variant</v-icon>
                  </v-toolbar>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="rounded-lg rounded-l-0"
                      small
                      outlined
                      color="primary"
                      :to="{
                        name: 'issue',
                        params: {
                          id: course.id,
                          courseName: course.Course.name,
                          degreeName: degree.gradeName,
                        },
                      }"
                    >
                      <span class="primary--text">INGRESAR</span>
                      <v-icon small color="primary">mdi-login</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
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
    record: {},
  }),
  computed: {
    ...mapState("moduleCourse", ["courses"]),
    ...mapState("moduleLogin", ["user"]),
    groupedCourses() {
      const grouped = {};
      this.courses.forEach((course) => {
        if (!grouped[course.Degree.id]) {
          grouped[course.Degree.id] = {
            gradeName: course.Degree.name,
            coursesgrade: [],
          };
        }
        grouped[course.Degree.id].coursesgrade.push(course);
      });
      return Object.values(grouped);
    },
  },
  mounted() {
    this.getCourse(this.user.user.id);
  },
  methods: {
    ...mapActions("moduleCourse", ["getCourse"]),
  },
};
</script>