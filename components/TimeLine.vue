<template>
  <div class="mb-16">
    <v-container>
      <v-row class="py-10"
        ><v-col><h1 class="Title">TIMELINE</h1></v-col></v-row
      >
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          fill-dot
          :color="`${task.dotColor}`"
          small
          v-for="(task, i) in tasks" :key="i"
        >
          <v-card :color="`${task.color}`">
            <v-card-title :color="`${task.color}`" >
              <h3 class="white--text font-weight-light">
                {{ task.title }}
              </h3>
            </v-card-title>
            <v-card-subtitle :color="`${task.color}`">
              <h4 class="white--text font-weight-light">
                {{ task.year }}
              </h4>
            </v-card-subtitle>
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
      tasks: [
        {
          title: "Registration Opening",
          year: "06 / 04 / 2022",
          color:"#8dc63f",
          dotColor:"#8dc63f"
        },
        {
          title: "Registration Opening",
          year: "06 / 04 / 2022",
          color:"#19589d",
          dotColor:"#19589d"
        },        {
          title: "Registration Opening",
          year: "06 / 04 / 2022",
          color:"#8dc63f",
          dotColor:"#8dc63f"
        },
        {
          title: "Registration Opening",
          year: "06 / 04 / 2022",
          color:"#19589d",
          dotColor:"#19589d"
        },        {
          title: "Registration Opening",
          year: "06 / 04 / 2022",
          color:"#8dc63f",
          dotColor:"#8dc63f"
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
