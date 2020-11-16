import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import storage from 'redux-persist/lib/storage'

interface Store {
    user: {
        email: string | null
        password: string | null
        token: string | null
    }
}

const initialState: Store = {
    user: {
        email: null,
        password: null,
        token: null
    }
}

function userReducer(state: Store = initialState, action: any) {
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