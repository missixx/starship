
const initialState = {
    speed: 27,
    verticalValue: 125,
}

export default function shipReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACCELERATE':
            return { ...state, speed: state.speed - 5 }
        case 'DECELERATE':
            return { ...state, speed: state.speed + 5 }
        case 'DOWN_MOVE':
            return { ...state, verticalValue: state.verticalValue + 120 }
        case 'UP_MOVE':
            return { ...state, verticalValue: state.verticalValue - 120 }
        default: return state
    }
}