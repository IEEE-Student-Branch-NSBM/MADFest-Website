<template>
<div class="mainDiv">
  <v-row class="py-10"
      ><v-col><h1 class="Title">FAQ</h1></v-col></v-row
    >
<div class="d-flex justify-center">

      <v-expansion-panels focusable hover dark style="maxWidth: 800px;">
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header color="#19589d" class="white--text">Item</v-expansion-panel-header>
          <v-expansion-panel-content color="#39B54A" class="white--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

  </div>
</div>
  
</template>

<script>
export default {};
</script>


<style>

.mainDiv{
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
    font-weight: 700 ;
    font-size: 15px!important;
  }
}
</style>