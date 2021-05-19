const initialState = [
    // {
    //   id: 0,
    //   value: 10
    // },
    // {
    //   id: 1,
    //   value: 49
    // },
    // {
    //   id: 2,
    //   value: 76
    // },
  ]
  
  export default function graphsReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_GRAPH':
        return [...state, action.payload]
      case 'DELETE_GRAPH':
        const stateCopy = state.slice()  
        stateCopy.shift()
        return stateCopy
      default: return state
    }
  }