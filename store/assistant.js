export const state = () => ({
    name: 'Hi!',
    dialogs: [], // list,
    context: '',
    loading: false
})

export const mutations = {
    add(state, dialog) {
        state.dialogs.push(dialog)
    },
    remove(state, dialog) {
        state.dialogs.splice(state.dialogs.indexOf(dialog), 1)
        console.log('remove ', dialog)
    },
    setDialogs(state, payload) {
        console.log('Assistant listening')
        state.dialogs = payload
    },
    setContext(state, payload) {
        console.log('Assistant context', payload)
        state.context = payload
    },
    isLoading(state, payload) {
        state.loading = payload
    }
}

export const getters = {
    getDialogs(state) {
        return state.dialogs
    },
    getContext(state) {
        return state.context
    }
}

export const actions = {
    load({
        commit
    }) {
        // get all the users assistant dialogs in the server where pending equal to true
        // commit('setAssistantDialogs', result)
    },

    save({
        commit
    }, payload) {
        // create or update existing pending user assistant dialogs to the server
        // { dialog, selected: selected, done }
        // transform the dialog to message beetween user and assistant
        // create a ref of this discussion with the user and at her selected as result
        console.log('saving: ' + payload)
    }
}
