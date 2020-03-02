export const state = () => ({
    about: [
      {
        speech: ['Hi! I am an interactive visual assistant', 'Let me introduce you', 'Franklin Kemta'], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
        information: `
        <div class="black--text" style="height: 100%; background-size: cover; background-repeat: no-repeat; background-image:url('/images/location.png')">
          <h4 class="pa-2 text-left" style="margin-bottom: 10px"> About </h4>
          <p class="pa-2 subheading" style="margin-top: 15px;"> 
            Residence : <b>Casablanca, Morocco</b> <br>
            Nationality : <b>Cameroon </b><br>
          </p>
        <div>
        `,
        color: 'primary',
        icon: 'mdi-information',
        preTypeDelay: 600,
        preEraseDelay: 1300,
        eraseStyle: 'select-all',
        sleepSpeech: ['Good ', 'Nice ', 'Lets rock it'], // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
        shuffleTyping: false,
        showCloseAction: true,
        doneAfterSpeech: false,
        autowakeUp: true,
        data: [
        {
          title: 'Reach me by : <b class="primary--text">Email</b>',
          speech: 'My e-mail is: franklinkemta@gmail.com',
          value: null,
          actions: [ { type: 'button', icon: '', label: ['Okay', 'Yes got it', 'Nice'], callback: (assistant) => { assistant.checkCurrent(true); assistant.sleep() }, timeout: 1000 } ]
        },
        {
          title: 'Reach me by : <b class="primary--text">Phone or Skype ?</b>', // can be array to suffle
          value: null,
          speech: ['My phone number is : +212 0609349882', 'Yes i do have a Skype account', 'Please search for franklinkemta in Skype..', 'I will be happy to e-meet you :)'], // can be array to suffle, this property is passed to assistant speech when, is available
          actions: [ { type: 'button', icon: '', label: ['Sure', 'Yes', 'Okay'], callback: (assistant) => { assistant.checkCurrent(true); assistant.sleep() } } ] // label can be array of string to suffle
        }
      ],
      sleepSpeech: ['Thanks', ':)'],
      }

    ],
    articles: [
      {
        speech: ['My articles', 'I Obviously pubish Articles on socials medias about my work and more', 'Unfortunately im currently working on this platform', 'Stay stuned to be informed about next updates ;)'], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
        information: '<span class="grey lighten-3 subheading" style="margin-top: 15px;">Sorry there are no Articles availle here. </span>',
        color: 'primary',
        icon: 'mdi-information',
        preTypeDelay: 1000,
        eraseStyle: 'select-all',
        sleepSpeech: ['Good ', 'Nice ', 'Lets rock it'], // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
        shuffleTyping: false,
        showCloseAction: true,
        doneAfterSpeech: false,
        autowakeUp: true,
      }
    ],
    pfe_master_1: [
        {
            speech: ['WhatsUp!', 'Watch this quick intro then call me :)'], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
            information: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0URuIXEpCJQ?autoplay=true" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            color: 'primary',
            icon: 'mdi-play',
            preTypeDelay: 1000,
            eraseStyle: 'select-all',
            sleepSpeech: ['Good ', 'Nice ', 'Lets rock it'], // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
            shuffleTyping: false,
            showCloseAction: true,
            doneAfterSpeech: false,
            autowakeUp: true,
        }
    ],
    these_master_2: [],
    first_se_cdi: [
      {
        speech: ['Hi! Am currently looking for a', 'Software Engineer Job'], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
        information: `
        <div 
          class="black--text" 
          style="height: 100%; background-size: cover; background-repeat: no-repeat; background-image:url('https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/tech/internship-blog-post/internship-blog-post-image@2x.png')"
          >
          <p class="pa-2 pt-3 subheading grey black--text font-weight-bold lighten-2" style=" opacity: 0.8">
            Hi thank you for your interest ! <br> 
            Am currently looking for a Software Engineer Job <br>
            Please contact me if you find some interests <br>
            View the About me
          </p>
        </div>`,
        color: 'primary',
        icon: 'mdi-information',
        preTypeDelay: 1000,
        preEraseDelay: 100,
        eraseStyle: 'select-all',
        sleepSpeech: 'Thank you', // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
        shuffleTyping: false,
        showCloseAction: true,
        doneAfterSpeech: false,
        autowakeUp: true,
        }
    ],
    first_ds_intership: [
      {
        speech: ['Hello Hope you are doing well !', 'I am currently looking for a', 'First-Entry Data Scince Job'], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
        information: `
        <div 
          class="black--text" 
          style="height: 100%; background-size: cover; background-repeat: no-repeat; background-image:url('https://med.unhas.ac.id/sinovia/wp-content/uploads/2019/04/S__9175043-1024x682.jpg')"
          >
          <p class="pa-2 pt-3 subheading grey black--text font-weight-bold lighten-2" style=" opacity: 0.8">
            Hello Hope you are doing well ! <br> 
            I am currently looking for a first-Entry Data Scince Job <br>
            If you have interest in my profile <br> 
            Please check my contact informations on About me.
          </p>
        </div>`,
        color: 'primary',
        icon: 'mdi-play',
        preTypeDelay: 1000,
        preEraseDelay: 100,
        eraseStyle: 'select-all',
        sleepSpeech: 'Thank you', // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
        shuffleTyping: false,
        showCloseAction: true,
        doneAfterSpeech: false,
        autowakeUp: true,
        }
    ]
})

export const mutations = {
}

export const getters = {
}

export const actions = {
}
