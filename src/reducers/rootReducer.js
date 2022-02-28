import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
    //As our reducer names are identical to what we want to use for a store's property names, we can use the ES6 shorthand
    //Key-Value pair
    itemsReducer: itemsReducer,
    usersReducer: usersReducer
})

export default rootReducer
