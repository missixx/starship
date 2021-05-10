

const initialState = {
    timerAmount: ['НАЧАТЬ', '3', '2', '1', 'START'],
    timerCurrentAmount: 0
}

export default function interfaceReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_TIMER':
            return { ...state, timerCurrentAmount: state.timerCurrentAmount + 1 }
    }
    return state
}