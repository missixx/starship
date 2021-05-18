const initialState = [
    {
        id: 0,
        top: 125,
        right: 0
    },
]



export default function AsteroidReducer(state = initialState, action) {

    switch (action.type) {
        case 'ASTEROID_MOVE':
            const mapedAsteroids = state.map(item => {
                return { ...item, right: item.right + 10 }
            })
            return mapedAsteroids
        case 'ENEMY_ADD':
            return [...state, action.payload]
        default: return state
    }
    return state
}