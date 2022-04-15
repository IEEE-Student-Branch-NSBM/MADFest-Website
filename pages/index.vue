<template>
  <div>
    <v-sheet color="#ffffff" class="text-center">
      <v-container>
        <v-row align="center" no-gutters class="mt-8">
          <v-col cols="12" sm="6" order-sm="first" class="hidden-xs-only">
            <v-layout justify-center align-center>
              <v-flex shrink>
                <v-img
                  mx-auto
                  width="600"
                  alt="Brand Logo"
                  src="Assets/Home/Header.png"/>
              </v-flex>
            </v-layout>
          </v-col>
          <v-col class="px-8 HeaderText" cols="12" sm="6" order-sm="last">
            <div class="pa-0 MobileText">Mobile</div>
            <div class="pa-0 ApplicationText">Application</div>
            <div class="pa-0 DevelopmentText">Development</div>
            <div class="pa-0 pb-8 CompetitionText">
              Competition <i class="mx-1"> &amp </i> Exhibition
            </div>

            <client-only>
              <flip-countdown deadline="2022-06-25 00:00:00"></flip-countdown>
            </client-only>

            <button class="button-2" role="button">
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
        <v-row align="center" no-gutters class="mt-8">
          <v-col class="px-sm-0" cols="12" sm="6">
            <v-card-title class="pa-0 pb-2 cardTitle"
              >What is MAD-FEST?</v-card-title
            >
            <v-card-text class="pa-0 pb-2 text-justify cardSubtitle py-8">
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
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6">
            <v-layout justify-center align-center>
              <v-flex shrink>
                <v-img
                  mx-auto
                  width="450"
                  alt="Brand Logo"
                  src="Assets/Home/whatis.png"
              /></v-flex>
            </v-layout>
            <!-- <lottie-animation path="Assets/Home/whatIsMadFest.json" :width="450"/> -->
          </v-col>
        </v-row>
        <v-row class="dateTime mt-7">
          <v-col cols="12" sm="4" class="d-flex justify-center align-center">
            <v-icon color="white" size="35" class="mr-2 mb-2"
              >mdi-calendar-month-outline</v-icon
            >25 of May 2022
          </v-col>
          <v-col cols="12" sm="4" class="d-flex justify-center align-center"
            ><v-icon color="white" size="35" class="mr-2 mb-1"
              >mdi-clock-time-nine-outline </v-icon
            >09.00 AM Onwards</v-col
          >
          <v-col cols="12" sm="4" class="d-flex justify-center align-center"
            ><v-icon color="white" size="35" class="mr-2"
              >mdi-map-marker-outline </v-icon
            >Faculty of Computing</v-col
          >
        </v-row>
      </v-container>
    </v-sheet>
    <timeLine/>
  </div>
</template>


<script>
import FlipCountdown from "vue2-flip-countdown";
import timeLine from "../components/TimeLine";

export default {
  components: { FlipCountdown,timeLine },
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
  margin-top: 20px;
  margin-right: 8px;
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

@media only screen and (max-width: 600px) {
  .cardTitle {
    font-size: 35px !important;
  }
  .MobileText {
    font-weight: 700;
    font-size: 50px;
  }
  .ApplicationText {
    font-weight: 700;
    font-size: 50px;
  }
  .DevelopmentText {
    font-weight: 700;
    font-size: 50px;
  }

  .CompetitionText {
    font-weight: 700;
    font-size: 22px;
  }
  .button-2 {
    margin-top: 30px;
  }
}
</style>
