
const initialState = {
    speed: 30,
    verticalValue: 150,
}

export default function shipReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACCELERATE':
            return { ...state, speed: state.speed - 1 }
        case 'DECELERATE':
            return { ...state, speed: state.speed + 1 }
        default: return state
    }
}