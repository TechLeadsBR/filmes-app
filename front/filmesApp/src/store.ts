import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

interface Store {
    email: string | null
    password: string | null
    token: string | null
}

const initialState: Store = {
    email: null,
    password: null,
    token: null

}

function userReducer(state: Store = initialState, action: any) {
    switch (action.type) {
        case "SAVE_TOKEN":
            return { ...state, email: action.payload.email, password: action.payload.password, token: action.payload.token}
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