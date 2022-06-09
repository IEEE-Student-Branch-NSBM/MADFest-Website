<template>
  <v-app>
    <div>
      <v-app-bar
        fixed
        color="white"
        flat
        style="border-bottom: 1px solid #d2d2d2 !important"
        app
      >
        <v-toolbar-title class="ml-sm-16">
          <v-img src="Assets/Navigation/logo_alt.png" width="250"></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon
            x-large
            color="#125596"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </span>
        <v-toolbar-items class="mr-16 hidden-xs-only">
          <v-btn text color="#125596" href="#home"
            ><h3 font-weight-700>Home</h3></v-btn
          >
          <v-btn text color="#125596" href="#about"
            ><h3 font-weight-700>About</h3></v-btn
          >
          <v-btn text color="#125596" href="#timeline"
            ><h3 font-weight-700>Timeline</h3></v-btn
          >
          <v-btn text color="#125596" href="#faq"
            ><h3 font-weight-700>FAQ</h3></v-btn
          >
        </v-toolbar-items>
      </v-app-bar>

      <!-- navigation drawer -->
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        temporary
        fixed
        color="#125596"
      >
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
          >
            <v-list-item-content>
              <v-list-item-title class="white--text pl-5"
                ><h4 font-weight-700>{{ item.title }}</h4></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <!-- main container -->
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer padless color="#ffffff">
      <v-container>
        <v-row no-gutters justify="center">
          <span class="text-center mb-6 mt-8 font-weight-bold footerTitle">
            ORGANIZED BY
          </span>
        </v-row>
        <v-row class="mb-6">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="3"
                ><v-img
                  quality="100"
                  format="webp"
                  :aspect-ratio="16 / 9"
                  contain
                  alt="Brand Logo"
                  src="Assets/Footer/Department.png"
              /></v-col>
              <v-col cols="3"
                ><v-img
                  quality="100"
                  format="webp"
                  :aspect-ratio="16 / 9"
                  contain
                  alt="Brand Logo"
                  src="Assets/Footer/IEEE.png"
              /></v-col>
              <v-col cols="3"
                ><v-img
                  quality="100"
                  format="webp"
                  :aspect-ratio="16 / 9"
                  contain
                  alt="Brand Logo"
                  src="Assets/Footer/WIE.png"
              /></v-col>
              <v-col cols="3"
                ><v-img
                  quality="100"
                  format="webp"
                  :aspect-ratio="16 / 9"
                  contain
                  alt="Brand Logo"
                  src="Assets/Footer/IEEECS.png"
              /></v-col>
            </v-row>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <hr />
        <v-row align="center" width="100%">
          <v-col cols="4" class="copyrightText" align="left">
            <i>&copy</i> Copyright MAD-FEST 2022. All Rights Reserved - IEEE
            NSBM
          </v-col>
          <v-col cols="4">
            <v-layout justify-center align-center>
              <v-flex shrink>
                <v-img
                  mx-auto
                  quality="100"
                  format="webp"
                  width="150"
                  aspect-ratio="1"
                  contain
                  alt="Brand Logo"
                  src="Assets/MADFEST.png"
                />
              </v-flex> </v-layout
          ></v-col>
          <v-col cols="4" class="copyrightText text-right" align="right">
            Terms of Service <i>&amp</i> Privacy Policy
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "MADFest",
      loader: null,
      loading4: false,
      drawer: false,
      items: [
        {
          title: "Home",
          link: "#home",
        },
        {
          title: "About",
          link: "#about",
        },
        {
          title: "Timeline",
          link: "#timeline",
        },
        {
          title: "FAQ",
          link: "#faq",
        },
      ],
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    },
  },

  // watch: {
  //   loader() {
  //     const l = this.loader;
  //     this[l] = !this[l];

  //     setTimeout(() => (this[l] = false), 3000);

  //     this.loader = null;
  //   },
  // },
};
</script>

<style>
.footerTitle {
  font-size: 20px;
  color: #0a142f;
}
.copyrightText {
  font-size: 14px;
  font-weight: 300;
}
</style>
