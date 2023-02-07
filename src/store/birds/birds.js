import { combineReducers } from 'redux'

// Action variables
const ADD_BIRD = 'ADD_BIRD'
const INCREMENT_BIRD = 'INCREMENT_BIRD'

// Action functions
export function addBird(bird) {
    return {
        type: ADD_BIRD,
        bird,
    }
}
export function incrementBird(bird) {
    return {
        type: INCREMENT_BIRD,
        bird
    }
}

// Action defaults
const defaultBirds = [
    {
        name: 'robin',
        views: 1,
    }
]

// Action reducers
function birds(state=defaultBirds, action) {
    switch (action.type) {
        case ADD_BIRD:
            return [
                ...state,
                {
                    name: action.bird,
                    views: 1
                }
            ]
        case INCREMENT_BIRD:
            const bird = state.find(b => action.bird === b.name)
            const birds = state.filter(b => action.bird !== b.name)
            return [
                ...birds,
                {
                    ...bird,
                    views: bird.views + 1
                },
            ]
        default: 
            return state       
    }
}

const birdApp = combineReducers({
    birds
})

export default birdApp