export const state = () => ({
    loading: false,
    alertMsg: null,
    locales: ['en', 'fr'],
    locale: 'en',
    menuItems: [{
            ref: 'about',
            title: 'About me'
        },
        {
            ref: 'articles',
            title: 'Articles'
        }
    ],
    socialLinks: [{
            icon: 'mdi-linkedin',
            link: 'https://www.linkedin.com/in/franklin-kemta-b95915b7/'
        },
        {
            icon: 'mdi-github',
            link: 'https://github.com/franklinkemta'
        },
        {
            icon: 'mdi-code-tags',
            link: 'https://www.kaggle.com/franklinkemta'
        }
    ],
    profiles: {
        fullstack_eng: {
            title: '< <span class="blue--text">Fullstack</span> / Developer >',
            statusText: 'Fullstack Software Engineer <br>Graduated in Computer Science and IT Project Management',
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
                name: 'ReactJS',
                icon: '/images/icons/skills/reactjs.png',
                level: 'Front End Devoppement with ReactJS'
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
                name: 'XD',
                icon: '/images/icons/skills/xd.png',
                level: 'Interface Design with Adobe XD'
            }]
        },
        workspace_tools: {
            key: 'workspace_tools',
            title: '[ <span class="orange--text">Workspace</span> / Tools ]',
            statusText: 'Focused on increasing UX in products by bringing soft and hardwares systems to life using AI, ML, CV and analytics',
            cssClass: '',
            skills: [{
                name: 'Docker',
                icon: '/images/icons/skills/docker.png',
                level: 'Manage containers and environements with Docker'
            }, {
                name: 'SQL',
                icon: '/images/icons/skills/sql.png',
                level: 'SQL Developer'
            }, {
                name: 'GitLab',
                icon: '/images/icons/skills/gitlab.png',
                level: 'Deploy and manage code repos on Gitlab'
            }, {
                name: 'MongoDB',
                icon: '/images/icons/skills/mongodb.jpeg',
                level: 'MongoDB, Firebase DB'
            }, {
                name: 'Slack',
                icon: '/images/icons/skills/slack.png',
                level: 'Work and Colab with teams on Slack'
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