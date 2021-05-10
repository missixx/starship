const initialState = {
  isCustomization: false
}

export default function controllerReducer(state = initialState, action) {
  switch (action.type) {
    case 'START':
      return { ...state, isActive: true }
    case 'STOP':
      return { ...state, isActive: false }
    case 'ENTER_CUSTOMIZATION':
      return { ...state, isCustomization: true }
    case 'EXIT_CUSTOMIZATION':
      return { ...state, isCustomization: false }
    default: return state
  }
}
