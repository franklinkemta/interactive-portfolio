
export const state = () => ({
  loading: false,
  alertMsg: null,
  locales: ['en', 'fr'],
  locale: 'en',
  menuItems: [
    { ref: 'about', title: 'About me' },
    { ref: 'articles', title: 'Articles' }
  ],
  socialLinks: [
    { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/franklin-kemta-b95915b7/' },
    { icon: 'mdi-github-circle', link: 'https://github.com/franklinkemta' },
    { icon: 'mdi-code-tags', link: 'https://www.kaggle.com/franklinkemta' }
  ],
  profiles: {
    fullstack_eng: {
      title: '< <span class="blue--text">Software</span> / UX Designer>',
      statusText: 'Fullstack Software Engineer and Product Manager caps <br>Gradueted in Computer Science and IT Project Management',
      cssClass: '',
      skills: [{
        name: 'Python',
        icon: '/images/icons/skills/python.png',
        level: 'Python programmer'
      }, {
        name: 'NodeJS',
        icon: '/images/icons/skills/nodejs.png',
        level: 'NodeJs developer'
      }, {
        name: 'Bash',
        icon: '/images/icons/skills/bash.png',
        level: 'Linux System Administration, RedHat, Kali, Windows Systems Administration'
      }, {
        name: 'VueJS',
        icon: '/images/icons/skills/vuejs.png',
        level: 'Front End Devoppement with VueJS'
      }, {
        name: 'Flask',
        icon: '/images/icons/skills/flask.png',
        level: 'Back End Devoppement with Flask'
      }, {
        name: 'Express',
        icon: '/images/icons/skills/express.png',
        level: 'Back End Devoppement with Express'
      }, {
        name: 'Flutter',
        icon: '/images/icons/skills/flutter.png',
        level: 'Web Devoppement with Django'
      }, {
        name: 'XD',
        icon: '/images/icons/skills/xd.png',
        level: 'Interface Design with Adobe XD'
      }]
    },
    data_scientist: {
      key: 'data_scientist',
      title: '[ <span class="orange--text">Data</span> Science | Analytics ]',
      statusText: 'Focused on increasing UX in products by bringing soft and hardwares systems to life using AI, ML, CV and analytics',
      cssClass: '',
      skills: [{
        name: 'R',
        icon: '/images/icons/skills/r.png',
        level: 'The basics'
      }, {
        name: 'SQL',
        icon: '/images/icons/skills/sql.png',
        level: 'SQL Developer'
      }, {
        name: 'Excel',
        icon: '/images/icons/skills/excel.png',
        level: 'Comfortable with Excel'
      }, {
        name: 'Tableau',
        icon: '/images/icons/skills/tableau.jpg',
        level: 'Starter'
      }, {
        name: 'ML',
        icon: '/images/icons/skills/tensorflow.png',
        level: 'Modeling and Training'
      }, {
        name: 'NoSQL',
        icon: '/images/icons/skills/mongodb.jpeg',
        level: 'MongoDB, Firebase DB'
      }, {
        name: 'Colab',
        icon: '/images/icons/skills/gcolab.jpg',
        level: 'Google Colab and Jupyter Notebook'
      }, {
        name: 'GCloud',
        icon: '/images/icons/skills/gcloud.png',
        level: 'Forward to certification'
      }]
    }
  },
})

export const mutations = {
  isLoading(state, payload) {
      state.loading = payload
  },
  showAlert(state, payload) {
      state.alertMsg = payload
  },
  setLang(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
      }
  }
}

export const getters = {
  getLocale(state) {
      return state.locale
  },
  isLoading(state) {
      return state.loading
  },
  getAlertMsg(state) {
      return state.alertMsg
  }
}

export const actions = {

}
