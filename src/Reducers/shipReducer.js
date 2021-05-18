
const initialState = {
    health: 100,
    distance: 0,
    top: 125,
    right: 750,
    currentSkinValue: 0,
    skins: [
        {
            name: 'DESTROYER',
            url: 'url(' + '/static/media/starship.e8f799b9.png' + ')'
        },
        {
            name: 'ANIHILATOR',
            url: 'url(' + '/static/media/starship1.99ddddb9.png' + ')'
        }
    ]
}

export default function shipReducer(state = initialState, action) {
    switch (action.type) {
        // case 'ACCELERATE':
        //     if (state.speed < 30) { return { ...state, speed: state.speed + 10 } }
        //     else { return state }
        // case 'DECELERATE':
        //     if (state.speed > 10) { return { ...state, speed: state.speed - 10 } }
        //     else { return state }
        case 'UP_MOVE':
            if (state.top > 5) {
                return { ...state, top: state.top - 120 }
            } else { return state }
        case 'DOWN_MOVE':
            if (state.verticalValue < 245) {
                return { ...state, verticalValue: state.verticalValue + 120 }
            } else { return state }
        case 'CHANGE_DISTANCE':
            return { ...state, distance: state.distance + 10 }
        case 'NEXT_SKIN':
            if (state.currentSkinValue < state.skins.length - 1) {
                return { ...state, currentSkinValue: state.currentSkinValue + 1 }
            } else {
                return { ...state, currentSkinValue: 0 }
            }
        case 'PREV_SKIN':
            if (state.currentSkinValue > 0) {
                return { ...state, currentSkinValue: state.currentSkinValue - 1 }
            } else {
                return { ...state, currentSkinValue: state.skins.length - 1 }
            }

        default: return state

    }
}