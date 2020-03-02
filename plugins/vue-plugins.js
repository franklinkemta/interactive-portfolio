import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Impport plugins
// Vue typer pluggin
import VueTyperPlugin from 'vue-typer'

import 'ion-sound' // will be used as window.ion

import VueNotifications from 'vue-notifications'
// Include mini-toaster (or any other UI-notification library
import miniToastr from 'mini-toastr'

// Config plugins
// ion sound config
window.ion.sound({
    sounds: [{
            name: 'default'
        },
        {
            name: 'ok'
        },
        {
            name: 'huh'
        },
        {
            name: 'awake'
        },
        {
            name: 'sleep'
        },
        {
            name: 'close'
        },
        {
            name: 'loading'
        },
        {
            name: 'typing'
        },
        {
            name: 'error'
        },
        {
            name: 'done'
        }
    ],
    // main config
    path: '/sounds/',
    preload: true,
    multiplay: true,
    volume: 0.9
})

// Here we setup messages output to `mini-toastr`
const toast = function ({
    title,
    message,
    type,
    timeout,
    cb
}) {
    return miniToastr[type](message, title, timeout, cb)
}

// Binding for methods .success(), .error() and etc. You can specify and map your own methods here.
// Required to pipe our outout to UI library (mini-toastr in example here)
// All not-specified events (types) would be piped to output in console.
const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
}

// Activate plugins
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/images/avatar.png',
    // loading: 'dist/loading.gif',
    attempt: 1
})

Vue.use(VueTyperPlugin)

Vue.use(VueNotifications, options)
