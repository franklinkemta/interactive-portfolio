<template>
<v-layout>
    <v-tooltip v-model="showToast" top>
        <template v-slot:activator="{ on }">
            <v-btn outlined 
                v-if="currentView !== 'SPLASH'" 
                class="elevation-24" :fixed="displayOption.fixed" 
                :fab="displayOption.fab" 
                :bottom="displayOption.bottom" 
                :left="displayOption.left" 
                :top="displayOption.top" 
                :right="displayOption.right"  
                :color="displayOption.color" 
                @click.native="wakeUp" 
                v-on="on">
                <v-icon :style="{ marginTop: isEmpty(current) ? '30px' : '' }" :color="current.color ? current.color : 'grey'">{{ current.icon ? current.icon : 'mdi-emoticon' }}</v-icon>
            </v-btn>
        </template>
    <span>{{toastVal}}</span>
    </v-tooltip>
    <v-dialog v-model="awake" :persistent="locked"  width="500px">
       <v-card  style="" class="no-scroll">
        <v-toolbar flat dense class="pt-1">
          <v-btn color="grey lighten-2" class="mr-2" icon @click.native="mute" :outlined="muted" :loading="loading">
                <v-icon :color="current.color ? current.color : 'grey'">{{ current.icon ? current.icon : 'mdi-emoticon' }}</v-icon>
          </v-btn>
          <span class="body-2 black--text">{{toastVal}}</span>
          <v-spacer></v-spacer>
          <v-btn :disabled="locked" color="grey darken-1" class="" icon text @click.native="sleep">
            <v-icon>mdi-window-minimize</v-icon>
          </v-btn>
          <v-btn v-if="!locked && showCloseAction" icon text @click.native="close">
              <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title style="min-height: 10vh; overflow-y: auto !important; overflow-x: hidden !important; border-bottom: solid 1px lightgrey " class="scroll justify-center">
             <vue-typer
                v-if="awake"
                :text="speechVal"
                :repeat='current.repeatTyping ? current.repeatTyping : typerOption.repeatTyping'
                :shuffle='current.shuffleTyping ? current.shuffleTyping : typerOption.shuffleTyping'
                :initial-action='current.initialAction ? current.initialAction : typerOption.initialAction'
                :pre-type-delay="current.preTypeDelay ? current.preTypeDelay : typerOption.preTypeDelay"
                :type-delay="current.typeDelay ? current.typeDelay : typerOption.typeDelay"
                :pre-erase-delay="current.preEraseDelay ? current.preEraseDelay : typerOption.preEraseDelay"
                :erase-delay="current.eraseDelay ? current.eraseDelay : typerOption.eraseDelay"
                :erase-style='current.eraseStyle ? current.eraseStyle : typerOption.eraseStyle'
                :erase-on-complete='false'
                @erased='onTypeErased'
                @completed='onTypeComplete'
                caret-animation='expand'
                class="transparent title "
              ></vue-typer>
        </v-card-title>
        <v-container fluid style="height: 30vh; padding: 0;" id="information-screen" class="grey lighten-2 scroll grid-list-xs text-xs-center align-center justify-center" 
          v-html="(current.information !== undefined) ? current.information : defaultInformation"> 
        </v-container>
        <v-progress-linear style="margin:0; padding:0;" :indeterminate="loading" height="2" value="0" color="primary" background-color="grey lighten-2" ></v-progress-linear>
        <v-list two-line class=" scroll" style="height: 25vh;" >
          <template v-for="(data, index) in current.data">
            <v-subheader v-if="data.header" :key="data.header">{{ data.header }}</v-subheader>
            <v-divider v-else-if="data.divider" :inset="data.inset" :key="index"></v-divider>
            <v-list-item  v-else :key="data.title" @click="select(data)" class="grey lighten-4 mb-1" :class="{ selected: selected === data }">
              <v-list-item-avatar v-if="data.image">
                <v-img :src="data.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="data.title"></v-list-item-title>
                <v-list-item-subtitle v-html="data.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <v-card-actions style="height: 12vh;" class="cyan darken-4">
          <v-spacer></v-spacer>
          <v-btn text v-show="current.speechToText"  small color="teal lighten-1">
              <v-icon>mdi-microphone</v-icon>
          </v-btn>
          <template v-for="(action, index) in actions">
              <v-btn v-if="action.type === 'button'" :key="index" :color="action.color ? action.color : 'white'" outlined  @click.native="callAction(action)">
                <v-icon v-if="action.icon">{{action.icon}}</v-icon> {{ chooseString(action.label) }}
              </v-btn>
          </template>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
</v-layout>
  
</template>

<script>
  import { mapMutations } from 'vuex' // is cool, help to directly call store mutations as built-in methods
  export default {
    components: {
    },
    props: {
      defaultSpeech: {
        type: [String, Array],
        default: () => { return ['Hey!', 'WhatsUp?', 'mmmmh...', 'Hi!', 'Yeah!', 'Yes..'] }
      },
      defaultInformation: { // default information box value
        type: String,
        default: '' // <img height="100%" width="auto" class="portrait" src="/img/2.gif" height="150px"/>
      },
      typerOption: { // Ha ha ha ha :)
        type: Object,
        default: () => {
          return {
            preTypeDelay: 777,
            typeDelay: 70,
            preEraseDelay: 2000,
            eraseDelay: 250,
            eraseStyle: 'backspace', // backspace select-back clear
            repeatTyping: 0,
            shuffleTyping: false,
            initialAction: 'typing'
          }
        }
      },
      displayOption: {
        type: Object,
        default: () => { return { color: 'transparent', right: true, left: false, bottom: true, top: false, fab: true, fixed: true } }
      },
      defaultSleepSpeech: {
        type: Array,
        default: () => { return ['Ok', 'Here I am', 'Yes', 'Cool', 'Alright', 'Super 👍🏾', 'Nice 👌🏾'] }
      },
      defaultSleepTimeout: {
        type: Number,
        default: 777
      },
      defaultForceSpeech: {
        type: Array,
        default: () => { return ['Am waiting for you..', 'Dont forget to answer', 'Can you anwser?', 'Aie... :)', 'I need your answer', 'Validate you answer please'] }
      },
      defaultAuthSpeech: {
        type: Array,
        default: () => { return ['Please signIn to continue', 'Can you login first?', 'Okay login then...', 'Oh... you must authenticate first :)'] }
      },
      defaultPinSpeech: {
        type: Array,
        default: () => { return ['Please unlock to continue', 'Enter you secret pin', 'Confirm that it is you please', 'Okay your pin...'] }
      },
      showLog: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      awake: false,
      showToast: false,
      toast: '...',
      selected: {},
      current: {}, // this is the current
      speech: null, // must be an array or string
      showCloseAction: false,
      muted: false
    }),
    methods: {
      ...mapMutations({
        setContext: 'assistant/setContext',
        isLoading: 'assistant/isLoading',
        remove: 'assistant/remove'
      }),
      onTypeErased () {
        // call when finish a string
        this.log('. . .')
      },
      async onTypeComplete () {
        // when finish errasing a phrase in speech array
        this.log('mmmmmh...')
        this.play('typing')
        if (this.locked) {
          // maybe after a default time to make it less pressive to user
          this.log('Ops locked please give an answer', true) // warm
          return
        }
        if (!this.isEmpty(this.current) && this.current.doneAfterSpeech !== 'undefined') {
          this.log('Done after speech' + this.current.doneAfterSpeech)
          this.checkCurrent(this.current.doneAfterSpeech)
        } this.log('Waiting for you...')
      },
      validateContext (data) {
        // check if require context and if we are in the right context
        if (data.context && data.context !== this.context) {
          this.log('Validate context:' + false)
          this.remove(data)
          this.clearDialog()
          return false
        } else {
          this.log('Validate context:' + true)
          return true
        }
      },
      async loadDialog (data) {
        if (this.isEmpty(data)) return
        if (data.requireAuth) {
          if (!this.isLoggedIn()) {
            this.log('Require user ' + this.user)
            this.say(this.chooseString(this.defaultAuthSpeech)) // ask to login
          } else {
            this.say(this.chooseString(this.defaultPinSpeech)) // show pin pad and maybe lock app
            this.wakeUp()
            this.log('Confirm user ' + this.user.name)
          }
          return // stop the rest of the runction
        }
        // thoses values are maybe obligatoires
        this.say(data.speech)
        this.current = data
        if (this.current.autowakeUp) this.awake = true
        this.showCloseAction = (data.showCloseAction !== 'undefined') ? data.showCloseAction : false
      },
      async wakeUp () {
        if (!this.awake) this.awake = true
        this.play('awake')
        this.checkCurrent()
      },
      async save (done = false) { // default if it is not done it skip for later
        // move the list next side
        this.$store.dispatch('assistant/save', { dialog: this.current, selected: this.selected, done: done })
      },
      select (data) {
        this.log(data)
        this.selected = data
        if (data.speech !== 'undefined') {
          this.say(data.speech)
        } else this.say(this.chooseString(this.defaultSpeech))
      },
      isEmpty (object) {
        if (object === null || object === '' || object === 'undefined') return true
        for (var key in object) {
          if (object.hasOwnProperty(key)) return false
        }
        return true
      },
      async callAction (action) {
        this.log('ACTION')
        if (action.callback !== 'undefined' && typeof action.callback === 'function') {
          if (action.timeout) {
            this.isLoading(true)
            setTimeout(() => {
              action.callback(this)
              this.isLoading(false)
            }, action.timeout)
          } else action.callback(this)
        } else {
          this.log('NO ACTION OR INCORRECT FOR THIS', true)
          this.play('error')
        }
      },
      close () { // this is set to completly destroy a dialog
        this.log('close action')
        this.play('close')
        if (!this.isEmpty(this.current)) this.remove(this.current)
        this.clearDialog()
        this.awake = false
      },
      sleep () { // NOT A PROMISE
        if (this.locked) { // this.current.forceSelection && this.isEmpty(this.selected)
          // this.typeDelay = 50 // accelerate to show more quick, NB props are major than datas
          this.play('error')
          this.say(this.chooseString(this.current.forceSpeech ? this.current.forceSpeech : this.defaultForceSpeech))
          return
        } else this.play('ok') // play sleep
        this.awake = false
        this.toast = this.chooseString(this.current.sleepSpeech ? this.current.sleepSpeech : this.defaultSleepSpeech) // show closeSpeech  on minimize
        this.showToast = true
        setTimeout(() => {
          this.showToast = false
          if (this.current.waitSelection !== 'undefined' && !this.current.waitSelection) this.clearDialog()
          this.log('Sleeping ...')
        }, this.current.sleepTimeout ? this.current.sleepTimeout : this.defaultSleepTimeout)
      },
      clearDialog () {
        this.log('clear')
        this.current = {}
        this.selected = {}
        this.toast = this.name
        this.say()
        this.showCloseAction = false // this one force to close
        // this.checkCurrent() // check to load the next
      },
      chooseString (arrayOrString) { // NB: NOT a promise, a suffle method is different, because it send back the array
        // Give an random string from strings array or back the entire object if not array
        if (Array.isArray(arrayOrString)) {
          // random
          return arrayOrString[Math.floor(Math.random() * arrayOrString.length)]
        } else return arrayOrString
      },
      log (message = this.chooseString(this.defaultSpeech), warn = false) {
        if (!this.showLog) return
        if (warn) console.warn('ASSISTANT: ', message)
        else console.log('ASSISTANT: ', message)
      },
      isLoggedIn () {
        return (this.user !== null && !this.isEmpty(this.user))
      },
      removeNext () { // used when we have chained dialogs and when some action is done and the next is no more required
        if (this.dialogs.length > 1) {
          const next = this.dialogs[1]
          this.remove(next)
        }
      },
      checkCurrent (done = false) { // Explicitly set done to true to set that the action is finished
        if (this.isEmpty(this.current)) {
          if (this.dialogs.length) {
            const next = this.dialogs[0]
            this.loadDialog(next)
          }
        } else {
          this.log('Have something...')
          this.validateContext(this.current)
          if (done) {
            this.log(':done')
            this.play('done')
            if (this.current.saveOnDone) {
              this.log(':save ')
              this.save(done)
            }
            this.remove(this.current)
            this.clearDialog()
          }
        }
      },
      mute () {
        this.muted = !this.muted
      },
      play (sound = this.sounds.default) {
        this.log('play:' + sound)
        if (!this.muted) window.ion.sound.play(sound)
      },
      say (speech = this.chooseString(this.defaultSpeech)) {
        this.play('huh')
        this.speech = speech
      }
    },
    beforeDestroy () {
      this.log('Destroyed ...', true)
    },
    computed: {
      name () {
        return this.$store.state.assistant.name
      },
      user () {
        return this.$store.getters.getUser
      },
      loading () {
        return this.$store.state.assistant.loading
      },
      dialogs () {
        // return this.$store.getters.getAssistantDialogs
        return this.$store.state.assistant.dialogs
      },
      actions () {
        return this.selected ? this.selected.actions : []
      },
      speechVal () {
        return this.speech ? this.speech : this.chooseString(this.defaultSpeech)
      },
      toastVal () {
        return this.toast ? this.toast : this.name
      },
      locked () {
        if (this.current.forceSelection !== 'undefined' && this.current.forceSelection === true && this.isEmpty(this.selected)) return true
        return false
      },
      currentView () {
        return this.$store.getters.getCurrentView
      },
      context () {
        return this.$store.state.assistant.context
      }
    },
    mounted () {
      this.play('default')
    },
    watch: { // actualisation cases : diaogs, done
      dialogs () {
        this.checkCurrent()
      }
    }
}
</script>

<style scoped>
  .selected { background: #DFE5E7 !important }
  /* information-screen:hover {
    cursor: help
    opacity: 0.8
  } */
  /* player { display: none !important }
  */
</style>