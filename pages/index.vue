<template>
  <div>
    <v-sheet color="#ffffff" class="text-center">
      <v-container>
        <v-row align="center" no-gutters>
          <v-col>
            <v-layout justify-center align-center>
              <v-flex shrink>
                <v-img
                  mx-auto
                  quality="100"
                  format="webp"
                  fit="contain"
                  width="600"
                  alt="Brand Logo"
                  src="Assets/Home/Header.png"
              /></v-flex>
            </v-layout>
            <lottie-animation path="Assets/Home/whatIsMadFest.json" :width="450"/>
          </v-col>
          <v-col class="px-10 align-right HeaderText">
            <div class="pa-0 MobileText">Mobile</div>
            <div class="pa-0 ApplicationText">Application</div>
            <div class="pa-0 DevelopmentText">Development</div>
            <div class="pa-0 pb-8 CompetitionText">
              Competition <i class="mx-1"> &amp </i> Exhibition
            </div>

            <client-only>
              <flip-countdown deadline="2022-06-25 00:00:00"></flip-countdown>
            </client-only>

            <button class="button-2 mt-4 mr-4" role="button">
              <span>Register Now</span>
            </button>
          </v-col>
        </v-row>
        <v-row class="dateTime mt-7">
          <v-col><v-icon>mdi-calender-range</v-icon>25 of May 2022</v-col>
          <v-col>09.00 AM Onwards</v-col>
          <v-col>Faculty of Computing</v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="#19589D" class="pt-8 pb-8 text-right">
      <v-container>
        <v-row align="center" no-gutters class="mt-8 text-right">
          <v-col class="px-10 text-left">
            <div class="pa-0 pb-2 cardTitle">What is MAD-FEST?</div>
            <div class="pa-0 pb-2 cardSubtitle text-left py-8">
              MAD-Fest 2022 is the first- ever Mobile Application Development
              base competition and exhibition organized by Department of
              Software Engineering & Computer Science in Faculty of Computing,
              NSBM with IEEE Computer Society Student Branch Chapter of NSBM.Not
              only that, we organized MAD Awareness and Preparation sessions for
              all MAD enthusiast techies.We welcome all freshers to Mobile
              Application Development as well as who would like to brush up
              their own knowledge to MAD -Fest Awareness & Preparation
              sessions.Do u look right place to give a value for your valuable
              projects? Join with us and give a great value for your priceless
              effort.
            </div>
          </v-col>
          <v-col>
            <v-layout justify-center align-center>
              <v-flex shrink>
                <v-img
                  mx-auto
                  quality="100"
                  format="webp"
                  fit="contain"
                  width="450"
                  alt="Brand Logo"
                  src="Assets/Home/whatis.png"
              /></v-flex>
            </v-layout>
            <!-- <lottie-animation path="Assets/Home/whatIsMadFest.json" :width="450"/> -->
          </v-col>
        </v-row>
        <v-row class="dateTime mt-7">
          <v-col cols="4"
            ><v-icon>mdi-calender-range</v-icon>25<sup>th</sup> of May 2022</v-col
          >
          <v-col cols="4">09.00 AM Onwards</v-col>
          <v-col cols="4">Faculty of Computing</v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>


<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
  components: { FlipCountdown },
};
</script>

<style>
.cardTitle {
  color: white;
  font-size: 45px !important;
  font-weight: 600 !important;
  letter-spacing: -0px;
  text-align: left !important;
}
.cardSubtitle {
  letter-spacing: 0px;
  line-height: 25px;
  color: white;
  font-size: 20px !important;
  font-weight: 300 !important;
  justify-content: left !important;
}
.dateTime {
  font-size: 24px;
  font-weight: 500;
  color: white;
}
.HeaderText {
  text-align: right !important;
  text-align-last: right !important;
  direction: rtl !important;
}
.MobileText {
  color: #19589d;
  font-size: 64px;
  font-weight: bold;
  margin-bottom: -25px !important;
}
.DevelopmentText {
  color: #525252;
  font-size: 64px;
  font-weight: bold;
}
.ApplicationText {
  color: #39b54a;
  font-size: 64px;
  font-weight: bold;
  margin-bottom: -25px !important;
}
.CompetitionText {
  color: #19589d;
  font-size: 35px;
  font-weight: 500;
  margin-bottom: -25px !important;
}
.button-2 {
  padding: 1rem 3rem;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: rgb(56, 56, 56);
  border-radius: 15px;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #8dc63f;
  box-shadow: 5px 5px 10px rgba(226, 226, 226, 0.664);
}
.button-2:hover {
  background: linear-gradient(88.18deg, #19589d 0.34%, #8dc63f 121.79%);
}
.flip-card__top {
  background-color: #8dc63f !important;
  color: #ffffff !important;
}
.flip-card__bottom {
  background-color: #8dc63f !important;
  color: #ffffff !important;
}

.flip-card__back-bottom {
  background-color: #8dc63f !important;
  color: #ffffff !important;
}
.flip-clock__slot {
  color: #19589d !important;
  font-size: 18px !important;
  text-transform: uppercase !important;
  margin-top: 4px !important;
}
</style>
