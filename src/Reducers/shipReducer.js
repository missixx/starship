
const initialState = {
    health: 100,
    speed: 10,
    distance: 0,
    verticalValue: 125,
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
        default: return state
    }
}