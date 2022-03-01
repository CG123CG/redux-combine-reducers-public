import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Test() {

    //1 Object for Each Reducer
    const itemsObj = useSelector(store => store.itemsReducer)
    const usersObj = useSelector(store => store.usersReducer)

    const dispatch = useDispatch()

    const dispatchAddUser = () => {
        dispatch({ type: 'ADD_USER' })
    }

    const dispatchAddItem = () => {
        dispatch({ type: 'ADD_ITEM' })
    }

    const dispatchSameAction = () => {
        dispatch({ type: 'ADD' })
    }

    return (
        <div>
            <div>
                <h1>This is Test Component</h1>
                <h1>The Total Items are {itemsObj.itemslist.length}</h1>
                <h1>The Total Users are {usersObj.userslist.length}</h1>
                <button onClick={dispatchAddUser}>ADD-USER</button>
                <button onClick={dispatchAddItem}>ADD-ITEM</button>
            </div>
            <div>
                <h1>Issue when same Action is there in both the Reducers</h1>
                <h1>Both get invoked as there is no way to dispatch to a specific Reducer</h1>
                <h2>The Total Items are {itemsObj.itemslist.length}</h2>
                <h2>The Total Users are {usersObj.userslist.length}</h2>
                <button onClick={dispatchSameAction}>ADD-USER</button>
                <button onClick={dispatchSameAction}>ADD-ITEM</button>
            </div>
        </div>
    )
}
