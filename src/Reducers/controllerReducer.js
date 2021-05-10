export default function controllerReducer(state = {}, action) {
    switch (action.type) {
      case 'START':
        return { isActive: true }
      case 'STOP':
        return { isActive: false }
      default: return state
    }
  }
  