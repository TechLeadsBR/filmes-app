import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import storage from 'redux-persist/lib/storage'

const initialState = {
    user: {
        email: "carlaoooooo",
        password: null,
        token: null
    }
}

function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case "SAVE_USER":
            return { ...state, user: action.payload }
        default:
            return { ...state }
    }
}

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)