<template>
  <div class="mainDiv">
    <v-row class="py-10"
      ><v-col><h1 class="Title">FAQ</h1></v-col></v-row
    >
    <div class="d-flex justify-center">
      <v-expansion-panels
        focusable
        hover
        dark
        style="maxwidth: 800px"
        class="mx-10"
      >
        <v-expansion-panel>
          <v-expansion-panel-header color="#19589d" class="white--text"
            >What conditions may apply for MAD-Fest 2022?
          </v-expansion-panel-header>
          <v-expansion-panel-content color="#39B54A" class="white--text">
            <ul class="mt-5">
              <li>
                Only the team leader require to fill out the form with the rest
                of the other members' details.
              </li>
              <li>
                Please consider that one team can have maximum 06 members and a
                minimum of 03 members.
              </li>
              <li>
                Group members allow to use any programming language and any
                framework to develop the Mobile Application project.
              </li>
              <li>Plagiarism will be detected.</li>
              <li>
                Every participant should accept and respect the final decision
                made by the judge panel.
              </li>
              <li>Only for NSBM green University Students.</li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header color="#19589d" class="white--text"
            >What is the flow of the hackathon?
          </v-expansion-panel-header>
          <v-expansion-panel-content color="#39B54A" class="white--text">
            <ul class="mt-5">
              <li>Registration Closed: 17th of April 2022</li>
              <li>Submission Open: 27th of April 2022</li>
              <li>MAD-Fest 2022 Competition: 22nd of May 2022</li>
              <li>
                MAD-Fest 2022 Exhibition & Award Ceronmany: 25th of May 2022
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header color="#19589d" class="white--text"
            >Why participate?
          </v-expansion-panel-header>
          <v-expansion-panel-content color="#39B54A" class="white--text">
            <p class="mt-5">
              This exhibition and competition are organized with the explicit
              purpose of enhancing the programming skills of undergraduates.
              This is taking place as a Physical event and the winners will
              receive gifts and valuable certificates upon completing the
              competition under the standards of the event.
              <br /><br />
              We plan to do awareness and preparation sessions regarding Mobile
              Application Development with industry experts before the
              Competition and Exhibition as a motivation for Mobile application
              enthusiast undergraduates. Throughout this project, we mainly
              focus on motivating the undergraduates to create and value their
              projects in the current competitive technological world.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header color="#19589d" class="white--text"
            >How to reach us?
          </v-expansion-panel-header>
          <v-expansion-panel-content color="#39B54A" class="white--text">
            <p class="mt-5">
              You can reach out to the organizing committee of MAD-Fest 2022
              during the Awareness and Preparation sessions or competition and
              Exhibition. If you have any questions before the day of the event,
              please contact us asap. You can contact us via the IEEE NSBM
              Facebook page or drop an email at
              <a href="mailto:nsbmieee@gmail.com">nsbmieee@gmail.com</a>.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "What conditions may apply for MAD-Fest 2022?",
          content: [
            {
              id: 1,
              text: "▪️ Only the team leader require to fill out the form with the rest of the other members' details.",
            },
            {
              id: 2,
              text: "▪️ Only the team leader require to fill out the form with the rest of the other members' details.",
            },
            {
              id: 3,
              text: "▪️ Only the team leader require to fill out the form with the rest of the other members' details.",
            },
          ],
        },
      ],
    };
  },
};
</script>


<style>
.mainDiv {
  background-color: #c1dfff;
  padding-bottom: 100px;
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
