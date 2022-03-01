const initialData = {
    itemslist: []
}

function itemsReducer(state = initialData, action) {
    let newState
    switch (action.type) {
        case 'ADD_ITEM':
            newState = {
                ...state,
                itemslist: [...state.itemslist, 'New-Reducer-Item']
            }
            break
        case 'ADD':
            newState = {
                ...state,
                itemslist: [...state.itemslist, 'New-Reducer-Item']
            }
            break
        default:
            return state
    }
    return newState
}

export default itemsReducer

