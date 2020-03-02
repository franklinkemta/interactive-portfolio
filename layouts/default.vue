<template>
  <v-app>
    <v-app-bar fixed app dark flat
      src="https://wallpapercave.com/wp/wp3188141.png">
      <v-btn :loading="reloadEffect" icon class="mr-1" @click="animeReload"> <v-icon>mdi-play</v-icon></v-btn>
      <v-toolbar-title v-if="reloadEffect" class="font-weight-bold v-chip  subtitle-2 px-1 hidden-xs-only white--text grey lighten-4"  style="min-width: 32%; opacity: 0.6">
        <vue-typer :text="titleLoad"  :repeat="0" @completed='reload' :erase-on-complete='true' @preTypeDelay='100'></vue-typer>
      </v-toolbar-title>
      <v-toolbar-title v-else class="font-weight-bold v-chip  subtitle-2 px-1 hidden-xs-only hidden-sm-only grey darken-3"  v-html="title"></v-toolbar-title>
      
      <v-spacer />
      <div>
        <template v-for="item in menuItems">
          <v-chip :key="item.ref" class="ma-2" @click="playMenuItem(item)" color="transparent">
            <b class="font-weight-bold"> {{ item.title }}</b>
          </v-chip>
        </template>
      </div>
      
      <v-spacer />
      <div class="hidden-xs-only">
        <template v-for="item in socialLinks">
          <a :key="item.icon" class="social-links" :href="item.link" target="_blank"> <v-btn icon> <v-icon>{{ item.icon }}</v-icon></v-btn> </a>
        </template>
      </div>

    </v-app-bar>
    <transition name="component-fade" mode="out-in">
      <v-content class="white">
        <v-container>
          <v-row class="text-center" no-gutters>

            <v-col cols="12" sm="4" md="4" lg="4" >
              <v-card :class="profiles.fullstack_eng.ccClass" flat tile >
                <v-card-text :class="'pa-1 ' + profiles.fullstack_eng.cssClass">
                  <div v-html="profiles.fullstack_eng.title " class=" headline font-weight-bold black--text"></div>
                  <div v-html="profiles.fullstack_eng.statusText" class="caption font-weight-medium font-italic mt-1 mb-1"></div>
                  <v-divider class="mt-2 mb-2"></v-divider>
                  <template v-for="skill in profiles.fullstack_eng.skills">
                      <v-chip small :key="skill.name" class="ma-1 transparent">
                        <v-avatar left  >
                          <v-img :src="skill.icon"></v-img>
                        </v-avatar>
                        <b>{{ skill.name }}</b>
                      </v-chip>
                  </template>
                </v-card-text>
              </v-card>
              
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4" class="col-xs-12">
             
              <v-avatar size="150" class="mr-2 elevation-2 v-btn v-btn--depressed v-btn--fab"><img src="/images/franklinkemta.jpeg" alt="FK"></v-avatar>
              <div class="subtitle font-weight-medium black--text mt-3"> {{ copy }}</div>
              
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4" class="col-xs-12">
              <v-card :class="profiles.data_scientist.ccClass" flat tile >
                <v-card-text :class="'pa-1 ' + profiles.data_scientist.cssClass">
                  <div v-html="profiles.data_scientist.title " class=" headline font-weight-bold black--text"></div>
                  <div v-html="profiles.data_scientist.statusText" class="caption font-weight-medium font-italic mt-1 mb-1"></div>
                  <v-divider class="mt-2 mb-2"></v-divider>
                  <template v-for="skill in profiles.data_scientist.skills">
                      <v-chip small :key="skill.name" class="ma-1 transparent">
                        <v-avatar left  >
                          <v-img :src="skill.icon"></v-img>
                        </v-avatar>
                        <b>{{ skill.name }}</b>
                      </v-chip>
                  </template>
                </v-card-text>
              </v-card>
              
            </v-col>
          </v-row>

          <v-row class="text-center">
            <ProjectsGroup />
          </v-row>
        </v-container>
      </v-content>
    </transition>
    <v-footer fixed color="transparent" app>
      <span class="font-weight-bold caption">&copy; {{ new Date().getFullYear() }} {{copy}}</span>
    </v-footer>
    <transition name="assistant" appear>
      <HiAssistant ref="Assistant" showLog  name="Hi !" v-if="assistant" /> <!-- A voice assistant that handles users input and match them with app actions --> 
    </transition>
  </v-app>
</template>

<script>
/* Import all components */
import ProjectsGroup from '../components/ProjectsGroup.vue'
import HiAssistant from '../components/plugins/HiAssistant.vue'
export default {
  components: {
    ProjectsGroup,
    HiAssistant
  },
  data () {
    return {
      reloadEffect: false,
      assistant: true,
      title: '<b class="mr-1 black--text">#</b>SELECT * FROM <span class="mx-1 cyan--text">Portfolios</span> WHERE Name=\'<span class="orange--text">Franklin_Kemta</span>\' ;',
      titleLoad: '> SELECT * FROM Portfolios WHERE Name= \'Franklin_Kemta\' ;',
      copy: 'Franklin Kemta'
    }
  },
  computed: {
    menuItems () {
      return this.$store.state.menuItems
    },
    socialLinks () {
      return this.$store.state.socialLinks
    },
    profiles () {
      return this.$store.state.profiles
    },
    skills () {
      return this.$store.state.skills
    }
  },
  methods: {
    playMenuItem (item) {
      // play menu item related to that ref
      if (item.ref && this.$store.state.dialogs[item.ref]) {
        const dialogs = [...this.$store.state.dialogs[item.ref] ]
        console.log(dialogs) // dialogs list associated to the selected menu Item ref
        this.$store.commit('assistant/setDialogs', dialogs)
      }
    },
    animeReload() {
      this.reloadEffect = true
    },
    reload () {
      location.reload()
    }

  }
}
</script>

<style>
  .component-fade-enter-active, .component-fade-leave-active { transition: all .8s ease }
  .component-fade-enter, .component-fade-leave-to {
  /* .component-fade-leave-active below version 2.1.8 */ 
    opacity: 0;
    height: 0
  }
  .assistant-enter-active, .assistant-leave-active {
    transition: all 2s ease
  }
  .assistant-enter, .assistant-leave-active {
    opacity: 0;
    height: 0px
  }

  .social-links { 
    text-decoration: none;
  }
  .no-scroll {
    overflow: hidden !important
  }
  .scroll {
    overflow-y: scroll !important
  }
  ::-webkit-scrollbar {
    transition: all .5s;
    width: 7px;
    height: 1px;
    z-index: 10
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background: transparent;
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b3ada7;
    outline: 1px solid slategrey
  }
</style>
