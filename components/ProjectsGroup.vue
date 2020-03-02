<template>
  <v-container
    class="mb-12 "
  >
    <v-layout row no-gutters mb-2>
      <v-flex sm12>
        <template v-for="step in steps">
          <v-chip v-if="step.projects" :key="step.ref"
            class="ma-2"
            :color="currentStep.ref === step.ref ? 'orange lighten-4' : 'grey lighten-4'"
            @click="changeStep(step)">
            <v-avatar left>
              <v-img :src="step.icon"></v-img>
            </v-avatar>
            <b>{{ step.title }}</b>
          </v-chip>
      </template>
      </v-flex>
    </v-layout>
    <v-divider class=""></v-divider>
    <v-row  align="center" justify="center" class="projectsLayout grey lighten-4" >
      <template v-for="(project, i) in projects">
        <v-col :key="i" cols="12" md="4">
          <ProjectCard v-if="typeof(project)==='object'" @play="playProject" :data="project" />
        </v-col>
      </template>
    </v-row>
    <v-divider class=""></v-divider>
    <v-row class=" flex-column" justify="space-between" no-gutters>
      <div class="align-self-center">
        <v-btn disabled v-for="(icon, index) in icons" :key="index" color="black" icon large class="mx-3">
          <v-icon> {{ icon }} </v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
  import ProjectCard from '../components/ProjectCard.vue'
  export default {
    components: {
      ProjectCard,
    },
    data () {
      return {
        currentStep: { ref: '', title: '', projects: [] }, // new Date().getFullYear(),
        icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
        transparent: 'rgba(255, 255, 255, 0)',
        projects: []
      }
    },
    computed: {
      steps () {
        return this.$store.state.steps.list
      }
    },
    watch: {
      /*
      currentStep (val) {
        // console.log('Projects', val.projects)
        this.projects = [...val.projects]
      },
      */
    },
    methods: {
      changeStep (step) {
        this.currentStep = step
        this.projects = [...step.projects]
        // load project related to that step
      },
      playProject (project) {
        // load project's dialogs to the assitant
        if (project.ref && this.$store.state.dialogs[project.ref]) {
          const dialogs = [...this.$store.state.dialogs[project.ref] ]
          console.log(dialogs) // dialogs list associated to the selected project ref
          this.$store.commit('assistant/setDialogs', dialogs)
        } 
      }
    },
    mounted () {
      // Load the latest work
      if (this.steps) {
        this.changeStep(this.steps[this.steps.length - 1])
      }
    }
  }
</script>

<style scoped>

.projectsLayout {
  min-height: 45vh;
  /*
  background-size: cover; 
  background-image: url('https://wallpapercave.com/wp/wp3188133.jpg')
  */
}
</style>