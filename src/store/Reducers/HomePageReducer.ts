import { createSlice } from '@reduxjs/toolkit'

const HomePage = createSlice({
	name: 'HomePage',
	initialState: {
		isDarkTheme: true
	},
	reducers: {
		ChangeTheme(state, action) {
			state.isDarkTheme = action.payload
		}
	}
})
export default HomePage.reducer
export const { ChangeTheme } = HomePage.actions
