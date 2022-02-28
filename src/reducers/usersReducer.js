const initialData = {
    userslist: []
}

function usersReducer(state = initialData, action) {
    let newState
    switch (action.type) {
        case 'ADD_USER':
            newState = {
                ...state,
                userslist: [...state.userslist, 'New-Reducer-User']
            }
            break
        default:
            return state
    }
    return newState
}

export default usersReducer

