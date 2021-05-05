
const initialState = {
    speed: 27,
    verticalValue: 150,
}

export default function shipReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACCELERATE':
            return { ...state, speed: state.speed - 5 }
        case 'DECELERATE':
            return { ...state, speed: state.speed + 5 }
        default: return state
    }
}