export const state = () => ({
  about: [
    {
      speech: [
        "Hi! I am an interactive visual assistant",
        "I'll help you to know more about",
        "Franklin Kemta",
      ], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
      information: `
        <div class="black--text" style="height: 100%; background-size: cover; background-repeat: no-repeat; background-image:url('/images/location.png')">
          <h4 class="pa-2 text-left" style="margin-bottom: 10px"> About </h4>
          <p class="pa-2 subheading" style="margin-top: 15px;"> 
            Residence : <b>Casablanca, Morocco</b> <br>
            Nationality : <b>Cameroon </b><br>
          </p>
        <div>
        `,
      color: "primary",
      icon: "mdi-information",
      preTypeDelay: 600,
      preEraseDelay: 1300,
      eraseStyle: "select-all",
      sleepSpeech: ["Good ", "Nice ", "Lets rock it"], // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
      shuffleTyping: false,
      showCloseAction: true,
      doneAfterSpeech: false,
      autowakeUp: true,
      data: [
        {
          title: 'Reach me by : <b class="primary--text">Email</b>',
          speech: "My e-mail is: franklinkemta@gmail.com",
          value: null,
          actions: [
            {
              type: "button",
              icon: "",
              label: ["Okay", "Yes got it", "Nice"],
              callback: (assistant) => {
                assistant.checkCurrent(true);
                assistant.sleep();
              },
              timeout: 1000,
            },
          ],
        },
        {
          title: 'Reach me by : <b class="primary--text">Phone or Skype ?</b>', // can be array to suffle
          value: null,
          speech: [
            "My phone number is : +212 0609349882",
            "Yes i do have a Skype account",
            "Please search for franklinkemta in Skype..",
            "I will be happy to e-meet you :)",
          ], // can be array to suffle, this property is passed to assistant speech when, is available
          actions: [
            {
              type: "button",
              icon: "",
              label: ["Sure", "Yes", "Okay"],
              callback: (assistant) => {
                assistant.checkCurrent(true);
                assistant.sleep();
              },
            },
          ], // label can be array of string to suffle
        },
      ],
      sleepSpeech: ["Thanks", ":)"],
    },
  ],
  blog: [
    {
      speech: [
        "Concerning my blog posts",
        "I often post on socials medias about my work and subject that am passionate about",
        "Unfortunately im currently working on this platform",
        "Stay stuned to be informed about next updates ;)",
      ], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
      information:
        '<span class="grey lighten-3 subheading" style="margin-top: 15px;">Sorry there are no Articles availle here. </span>',
      color: "primary",
      icon: "mdi-information",
      preTypeDelay: 1000,
      eraseStyle: "select-all",
      sleepSpeech: ["Good ", "Nice ", "Lets rock it"], // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
      shuffleTyping: false,
      showCloseAction: true,
      doneAfterSpeech: false,
      autowakeUp: true,
    },
  ],
  pfe_master_1: [
    {
      speech: ["WhatsUp!", "Watch this quick intro then call me :)"], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
      information:
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0URuIXEpCJQ?autoplay=true" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
      color: "primary",
      icon: "mdi-play",
      preTypeDelay: 1000,
      eraseStyle: "select-all",
      sleepSpeech: ["Good ", "Nice ", "Lets rock it"], // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
      shuffleTyping: false,
      showCloseAction: true,
      doneAfterSpeech: false,
      autowakeUp: true,
    },
  ],
  memoire_master_2: [],
  first_se_cdi: [
    {
      speech: [
        "Hi! Am always open to the market",
        "Looking for challenging opportunities",
        "and obviously a path to grow up",
        "Please let me know if you find some interest on my profile",
        "I would love to discuss with you",
      ], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
      information: `
        <div class="black--text" style="height: 100%; background-size: cover; background-repeat: no-repeat; background-image:url('/images/projects/Portfolio.png')"></div>`,
      color: "primary",
      icon: "mdi-information",
      preTypeDelay: 100,
      preEraseDelay: 100,
      eraseStyle: "select-all",
      sleepSpeech: "Thank you", // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
      shuffleTyping: false,
      showCloseAction: true,
      doneAfterSpeech: false,
      autowakeUp: true,
    },
  ],
  monk: [
    {
      speech: [
        "Hello!",
        "I just worked recently as a fullstack developer",
        "As the principal frontend developper",
        "I got an external mission joint the dev team of a Monk's Morocco partner",
        "to bring Monk's inspection mobile app to production",
        "Worked on the internal data visualisation framework",
        "Enjoyed learning the Agile development process",
        "I also enjoyed learning, how to automate deploiement with git, circleCI, docker and Gcloud",
      ], // can be array - no need to apply suffle method because VueTyper handle it automaticaly
      information: `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/c9jXwpQdg84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "primary",
      icon: "mdi-play",
      preTypeDelay: 300,
      preEraseDelay: 600,
      eraseStyle: "select-all",
      sleepSpeech: "Thank you, for reading", // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
      shuffleTyping: false,
      showCloseAction: true,
      doneAfterSpeech: false,
      autowakeUp: true,
    },
  ],
  buttertech: [
    {
      speech: [
        "In a small team building vehicles and peoples counting software using Computer vision",
        "Realized the Frontend UI of the traffic analysis dashboard.",
        "Used Computer Vision to build a Realtime Vehicle Counting Solution Prototype",
        "Trained and Deployed Image/Video Processing algorithms using cloud GPU (Flask Microservices )",
        "Wrote the products specs and made the project planning with the engineering team",
      ],
      information: `
        <div class="black--text" style = "height: 100%; background-size: cover; background-repeat: no-repeat; background-image:url('/images/projects/viize-trafic.png')"></div>`,
      color: "primary",
      icon: "mdi-play",
      preTypeDelay: 1000,
      preEraseDelay: 2000,
      eraseStyle: "select-all",
      sleepSpeech: "Thank you, for reading", // next time we will encode some snipet inside string to call some standarts values like user name, phone numbers and others
      shuffleTyping: false,
      showCloseAction: true,
      doneAfterSpeech: false,
      autowakeUp: true,
    },
  ],
});

export const mutations = {};

export const getters = {};

export const actions = {};
