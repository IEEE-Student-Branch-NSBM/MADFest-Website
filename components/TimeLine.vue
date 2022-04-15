<template>
  <div class="mb-16">
    <v-container>
      <v-row class="py-10"
        ><v-col><h1 class="Title">TIMELINE</h1></v-col></v-row
      >
      <v-timeline
        :dense="$vuetify.breakpoint.smAndDown"
        class="mx-sm-16 py-16"
        width="500"
      >
        <v-timeline-item fill-dot right small>
          <v-card color="#19589D">
            <v-card-title>
              <h2 class="title text-h4">Registration Opening</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10" class="Subtitle">
                  06 / 04 / 2022
                </v-col>
                <v-col class="hidden-sm-and-down text-right" md="2"> </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item fill-dot left small>
          <v-card color="#19589D">
            <v-card-title class="justify-end">
              <h2 class="title text-h4 mr-4">Awareness Session 01</h2>
            </v-card-title>
            <v-container>
              <v-row class="justify-end">
                <v-col cols="12" md="5" align="left" class="Subtitle">
                  22 / 04 / 2022
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item fill-dot right small>
          <v-card color="#19589D">
            <v-card-title>
              <h2 class="title text-h4">Awareness Session 02</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10" class="Subtitle">
                  27 / 04 / 2022
                </v-col>
                <v-col class="hidden-sm-and-down text-right" md="2"> </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item fill-dot left small>
          <v-card color="#19589D">
            <v-card-title class="justify-end">
              <h2 class="title text-h4 mr-4">Project Submission open</h2>
            </v-card-title>
            <v-container>
              <v-row class="justify-end">
                <v-col cols="12" md="5" align="left" class="Subtitle">
                  27 / 04 / 2022
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          title: "Registration Opening",
          content: "06 / 04 / 2022",
        },
        {
          title: "Lorem ipsum2",
          content:
            "2Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
        },
        {
          title: "Lorem ipsum3",
          content:
            "3Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
        },
      ],
    };
  },
};
</script>

<style>
.timelineCard {
  background-color: blue;
}
.title {
  color: white;
  font-weight: lighter;
  font-size: 45px;
}
.Subtitle {
  color: white;
  font-weight: 700;
  font-size: 20px;
}

.Title {
  color: #19589d;
  font-size: 45px !important;
  font-weight: 600 !important;
  text-align: center !important;
}

@media only screen and (max-width: 600px) {
  .title {
    color: white;
    font-weight: 700;
    font-size: 15px !important;
  }
}
</style>