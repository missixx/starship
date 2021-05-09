

const initialState = {
    timerAmount: ['3', '2', '1', 'START'],
    timerCurrentAmount: 0
}

export default function interfaceReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_TIMER':
            // console.log(state.timerAmount.length);
            // console.log(state.timerCurrentAmount);
            return { ...state, timerCurrentAmount: state.timerCurrentAmount + 1 }
    }
    return state
}