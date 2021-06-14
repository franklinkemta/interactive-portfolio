<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
    >
      <v-img :src="data.previewMedia" aspect-ratio="1.7"
          contain></v-img>
      <v-card-text style="position: relative;">
        <v-btn absolute color="cyan"  fab right top  class="white--text" 
          v-show="hover" 
          @click="play()">
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <div class="ma-0 body-1 font-weight-bold text-left">{{ data.title.slice(0,100) }}</div>
        <div class="caption font-weight-medium font-italic text-left">
          {{ data.resume.slice(0,200) }} <br><br><hr style="opacity: 0">
          <template :v-if="data.skills && data.skills.length"  v-for="(skill, i) in data.skills">
            <v-chip :key="i" label small outlined>{{skill}}</v-chip>
          </template>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    props: {
      data: Object,
      required: true
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
      play () {
        // alert('play')
        this.$emit('play', this.data)
      }
    }
  }
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

</style>
