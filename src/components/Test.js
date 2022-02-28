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

    return (
        <div>
            <h1>This is Test Component</h1>
            <h1>The Total Items are {itemsObj.itemslist.length}</h1>
            <h1>The Total Users are {usersObj.userslist.length}</h1>
            <button onClick={dispatchAddUser}>ADD-USER</button>
            <button onClick={dispatchAddItem}>ADD-ITEM</button>
        </div>
    )
}
