import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { paintingApi } from './api/paintings'
import HomePageReducer from './Reducers/HomePageReducer'

const rootReducer = combineReducers({
	HomePage: HomePageReducer,
	[paintingApi.reducerPath]: paintingApi.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(paintingApi.middleware)
})
setupListeners(store.dispatch)
const state = store.getState()
export type appStateType = typeof state
