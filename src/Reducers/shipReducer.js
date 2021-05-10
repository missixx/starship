
const initialState = {
    health: 100,
    speed: 10,
    distance: 0,
    verticalValue: 125,
    currentSkinValue: 0,
    skins: [
        {
            name: 'first',
            url: 'url(' + '/static/media/starship.e8f799b9.png' + ')'
        },
        {
            name: 'second',
            url: 'url(' + '/static/media/starship1.99ddddb9.png' + ')'
        }
    ]
}

export default function shipReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACCELERATE':
            if (state.speed < 30) { return { ...state, speed: state.speed + 10 } }
            else { return state }
        case 'DECELERATE':
            if (state.speed > 10) { return { ...state, speed: state.speed - 10 } }
            else { return state }
        case 'UP_MOVE':
            if (state.verticalValue > 5) {
                return { ...state, verticalValue: state.verticalValue - 120 }
            } else { return state }
        case 'DOWN_MOVE':
            if (state.verticalValue < 245) {
                return { ...state, verticalValue: state.verticalValue + 120 }
            } else { return state }
        case 'CHANGE_DISTANCE':
            return { ...state, distance: state.distance + state.speed }
        case 'NEXT_SKIN':
            return { ...state, currentSkinValue: state.currentSkinValue + 1 }
        case 'PREV_SKIN':
            return { ...state, currentSkinValue: state.currentSkinValue - 1 }
        default: return state

    }
}