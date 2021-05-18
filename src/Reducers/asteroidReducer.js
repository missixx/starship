const initialState = {
    top: 100,
    right: 200
}


export default function AsteroidReducer(state = initialState, action) {

    switch (action.type) {
        case 'ASTEROID_MOVE':
            return { ...state, right: state.right + 10 }
        default: return state
    }
    return state
}