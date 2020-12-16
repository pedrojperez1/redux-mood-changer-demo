const moods = {
    sad: '(╥_╥)',
    mad: '(๑˃̵ᴗ˂̵)ﻭ',
    happy: '(✿◠‿◠)',
    derp: '（°々°）'
}

const INITIAL_STATE = { mood: moods.happy}

function moodReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "MAD" :
            return {...state, mood: moods.mad}
        case "SAD" :
            return {...state, mood: moods.sad}
        case "HAPPY" :
            return {...state, mood: moods.happy}
        case "DERP" :
            return {...state, mood: moods.derp}
        default:
            return state
    }
}

const store = Redux.createStore(moodReducer);